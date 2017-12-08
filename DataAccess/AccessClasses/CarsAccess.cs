using System;
using System.Linq;
using DataAccess.Model;

namespace DataAccess
{
    public class CarsAccess : IDisposable
    {
        private readonly AutoserviceDb _db = new AutoserviceDb();

        public IQueryable<Car> GetCustomerCars(int customerId)
        {
            return _db.Car.Where(car => car.CustomerId == customerId);
        }

        public Car GetCar(int id)
        {
            return _db.Car.Find(id);
        }

        public void AddCar(Car car)
        {
            
        }

        public void Dispose()
        {
            _db?.Dispose();
        }
    }
}