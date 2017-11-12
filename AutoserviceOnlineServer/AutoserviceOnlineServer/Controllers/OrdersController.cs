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

            _db.Order.Remove(order);
            _db.SaveChanges();

            return Ok(order);
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