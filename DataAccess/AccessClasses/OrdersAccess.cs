using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using AutoMapper;
using AutoserviceOnlineServer.Model.Dto;
using DataAccess.Model;

namespace DataAccess
{
    public class OrdersAccess : AccessBase<AutoserviceDb>
    {
        public OrderDto AddOrder(OrderDto orderDto)
        {
            var resultOrder = new Order
            {
                Completed = orderDto.Completed,
                Created = orderDto.Created,
                Customer = orderDto.CustomerId > 0 ? Db.Customer.Find(orderDto.CustomerId) : Mapper.Map<Customer>(orderDto.Customer)
            };

            if (orderDto.CarId > 0)
            {
                resultOrder.Car = Db.Car.Find(orderDto.CarId);
            }
            else
            {
                var car = Mapper.Map<Car>(orderDto.Car);
                var customer = resultOrder.Customer;

                resultOrder.Car = car;

                car.Customer = customer;
                car.Order.Add(resultOrder);

                customer.Car.Add(resultOrder.Car);
                customer.Order.Add(resultOrder);
            }

            //Todo: tasks and workmans
            Db.Order.Add(resultOrder);

            var tasksIds = orderDto.Tasks.Select(task => task.Id).ToList();
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
            return Mapper.Map<OrderDto>(resultOrder);
        }
    }
}