using System;
using DataAccess.Model;

namespace DataAccess
{
    public class OrdersAccess : IDisposable
    {
        private readonly AutoserviceDb _db = new AutoserviceDb();
        
        public Order AddOrder(Order order)
        {
            var resultOrder = new Order
            {
                Completed = order.Completed,
                Created = order.Created,
                Customer = order.CustomerId > 0 ? _db.Customer.Find(order.CustomerId) : order.Customer
            };

            if (order.CarId > 0)
            {
                resultOrder.Car = _db.Car.Find(order.CarId);
            }
            else
            {
                var car = order.Car;
                var customer = resultOrder.Customer;

                resultOrder.Car = car;
                
                car.Customer = customer;
                car.Order.Add(resultOrder);
                
                customer.Car.Add(resultOrder.Car);
                customer.Order.Add(resultOrder);
            }

            //Todo: tasks and workmans

            _db.Order.Add(resultOrder);
            //_db.Car.Add(resultOrder.Car);
            //_db.Customer.Add(resultOrder.Customer);

            _db.SaveChanges();
            return resultOrder;
        }

        public void Dispose()
        {
            _db?.Dispose();
        }
    }
}