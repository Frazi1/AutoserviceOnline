using System;
using System.Linq;
using DataAccess.Model;

namespace DataAccess
{
    public class CarsAccess : AccessBase<AutoserviceDb>
    {

        public IQueryable<Car> GetCustomerCars(int customerId)
        {
            return Db.Cars.Where(car => car.CustomerId == customerId);
        }

        public Car GetCar(int id)
        {
            return Db.Cars.Find(id);
        }

        public void AddCar(Car car)
        {
            Db.Cars.Add(car);
            Db.SaveChanges();
        }
    }
}