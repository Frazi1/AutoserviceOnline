using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;
using DataAccess;
using DataAccess.Model;

namespace AutoserviceOnlineServer.Controllers
{
    public class OrdersController : ApiController
    {
        private readonly AutoserviceDb _db = new AutoserviceDb();

        // GET: api/Orders
        public IEnumerable<Order> Getorder()
        {
            return _db.Order.ToList();
        }

        // GET: api/Orders/5
        [ResponseType(typeof(Order))]
        public IHttpActionResult Getorder(int id)
        {
            Order order = _db.Order.Find(id);
            if (order == null)
            {
                return NotFound();
            }

            return Ok(order);
        }

        // PUT: api/Orders/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putorder(int id, Order order)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != order.Id)
            {
                return BadRequest();
            }


            _db.Entry(order).State = EntityState.Modified;
            _db.Entry(order.Car).State = EntityState.Modified;
            _db.Entry(order.Customer).State = EntityState.Modified;
            try
            {
                _db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrderExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Orders
        [ResponseType(typeof(Order))]
        public IHttpActionResult Postorder(Order order)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (order.Car.Id != 0)
            {
                using (var carAccess = new CarsAccess())
                {
                    order.Car = carAccess.GetCar(order.Car.Id);
                    order.CarId = order.Car.Id;
                }
            }
            if (order.Customer.Id != 0)
            {
                order.Customer = _db.Customer.First(customer => customer.Id == order.Customer.Id);
                order.CustomerId = order.Customer.Id;
                //order.Car.Customer = order.Customer;
            }
            
            //_db.Car.Add(order.Car);
            //_db.Customer.Add(order.Customer);
            _db.Order.Add(order);

            _db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = order.Id }, order);
        }

        // DELETE: api/Orders/5
        [ResponseType(typeof(Order))]
        public IHttpActionResult Deleteorder(int id)
        {
            Order order = _db.Order.Find(id);
            if (order == null)
            {
                return NotFound();
            }
            RemoveCarIfPossible(order);
            RemoveCustomerIfPossible(order);

            _db.Order.Remove(order);
            _db.SaveChanges();

            return Ok(order);
        }

        private void RemoveCustomerIfPossible(Order order)
        {
            int otherOrdersCount = _db.Order
                .Count(item => item.Id != order.Id && item.CustomerId == order.CustomerId);
            if (otherOrdersCount == 0)
            {
                Customer customer = _db.Customer.Find(order.CustomerId);
                //var customerCars = _db.Car.Where(car => car.CustomerId == customer.Id);
                //if (customerCars.Any())
                //{
                //    _db.Car.RemoveRange(customerCars);
                //}
                if (customer != null)
                    _db.Customer.Remove(customer);
            }
        }

        private void RemoveCarIfPossible(Order order)
        {
            if (!_db.Order.Any(o => o.CarId == order.CarId && o.Id != order.Id))
            {
                Car car = _db.Car.Find(order.CarId);
                if (car != null)
                    _db.Car.Remove(car);
            }
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool OrderExists(int id)
        {
            return _db.Order.Count(e => e.Id == id) > 0;
        }
    }
}