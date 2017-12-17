using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;
using AutoMapper;
using AutoserviceOnlineServer.Model.Dto;
using DataAccess;
using DataAccess.Model;

namespace AutoserviceOnlineServer.Controllers
{
    public class OrdersController : ApiController
    {
        private readonly AutoserviceDb _db = new AutoserviceDb();

        // GET: api/Orders
        [HttpGet]
        [Route("api/Orders")]
        public IEnumerable<OrderDto> Getorder()
        {
            //return _db.Order.ToList();
            return Mapper.Map<IEnumerable<Order>, IEnumerable<OrderDto>>(_db.Order.ToList()).ToList();
        }

        // GET: api/Orders/5
        [HttpGet]
        [Route("api/Orders/{id}")]
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
        [HttpPut]
        [Route("api/Orders/{id}")]
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

        [HttpPost]
        [Route("api/Orders/")]
        [ResponseType(typeof(void))]
        public IHttpActionResult AddOrder(Order order)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            using (var ordersAccess = new OrdersAccess())
            {
                var result = ordersAccess.AddOrder(order);
                return Created("DefaultApi", result);
            }
        }

        // DELETE: api/Orders/5
        [HttpDelete]
        [Route("api/Orders/{id}")]
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