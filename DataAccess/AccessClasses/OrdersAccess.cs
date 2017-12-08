using System;
using DataAccess.Model;

namespace DataAccess
{
    public class OrdersAccess : IDisposable
    {
        private readonly AutoserviceDb _db = new AutoserviceDb();
        
        public void AddOrder(Order order)
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
                resultOrder.Car = order.Car;
                resultOrder.Car.Customer = resultOrder.Customer;
                order.Customer.Car.Add(resultOrder.Car);
            }

            //Todo: tasks and workmans

            _db.Order.Add(resultOrder);
            //_db.Car.Add(resultOrder.Car);
            //_db.Customer.Add(resultOrder.Customer);
            
            _db.SaveChanges();

        }

        public void Dispose()
        {
            _db?.Dispose();
        }
    }
}