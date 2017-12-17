using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using DataAccess.Model;

namespace DataAccess
{
    public class OrdersAccess : AccessBase<AutoserviceDb>
    {
        public Order AddOrder(Order orderModel)
        {
            var resultOrder = new Order
            {
                Completed = orderModel.Completed,
                Created = orderModel.Created,
                Customer = orderModel.CustomerId > 0 ? Db.Customer.Find(orderModel.CustomerId) : orderModel.Customer
            };

            if (orderModel.CarId > 0)
            {
                resultOrder.Car = Db.Car.Find(orderModel.CarId);
            }
            else
            {
                var car = orderModel.Car;
                var customer = resultOrder.Customer;

                resultOrder.Car = car;

                car.Customer = customer;
                car.Order.Add(resultOrder);

                customer.Car.Add(resultOrder.Car);
                customer.Order.Add(resultOrder);
            }

            //Todo: tasks and workmans
            Db.Order.Add(resultOrder);

            var tasksIds = orderModel.Tasks.Select(task => task.Id).ToList();
            //var loadedTasks = Db.Task.ToList();
            var dbTasks = Db.Task.Where(task => tasksIds.Contains(task.Id)).ToList();
            foreach (Task task in dbTasks)
            {
                if (task.Orders == null)
                    task.Orders = new List<Order>();

                task.Orders.Add(resultOrder);
                resultOrder.Tasks.Add(task);
            }
            Db.SaveChanges();
            return resultOrder;
        }
    }
}