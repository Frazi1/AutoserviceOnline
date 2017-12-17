using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using AutoMapper;
using AutoserviceOnlineServer.Model.Dto;
using DataAccess;
using DataAccess.Model;

namespace AutoserviceOnlineServer.Controllers
{
    [RoutePrefix("api/Customers")]
    public class CustomersController : ApiController
    {
        private AutoserviceDb _db = new AutoserviceDb();

        // GET: api/Customers
        [HttpGet]
        public IQueryable<Customer> Getcustomer()
        {
            return _db.Customer;
        }

        // GET: api/Customers/5
        [HttpGet]
        [ResponseType(typeof(Customer))]
        [Route("{id}")]
        public IHttpActionResult Getcustomer(int id)
        {
            Customer customer = _db.Customer.Find(id);
            if (customer == null)
            {
                return NotFound();
            }

            return Ok(customer);
        }

        // PUT: api/Customers/5
        [HttpPut]
        [ResponseType(typeof(void))]
        public IHttpActionResult Putcustomer(int id, Customer customer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != customer.Id)
            {
                return BadRequest();
            }

            _db.Entry(customer).State = EntityState.Modified;

            try
            {
                _db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustomerExists(id))
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

        // POST: api/Customers
        //[ResponseType(typeof(int))]
        //public IHttpActionResult Postcustomer(CustomerDto customerDto)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    var customer = Mapper.Map<Customer>(customerDto);
        //    _db.Customer.Add(customer);
        //    _db.SaveChanges();
        //    var resultDto = Mapper.Map<CustomerDto>(customer);
        //    return CreatedAtRoute("DefaultApi", new { id = resultDto.Id }, resultDto.Id);
        //}
        [HttpPost]
        [Route("api/Customers")]
        public IHttpActionResult AddCustomer(CustomerDto customerDto)
        {
            var customer = Mapper.Map<Customer>(customerDto);
            _db.Customer.Add(customer);
            _db.SaveChanges();
            var resultDto = Mapper.Map<CustomerDto>(customer);
            return Ok(new {id = resultDto.Id});
        }

        [HttpGet]
        [Route("api/Customers/Test")]
        public int Test()
        {
            return 228;
        }
        
        // DELETE: api/Customers/5
        [ResponseType(typeof(Customer))]
        [Route("{id}")]
        public IHttpActionResult Deletecustomer(int id)
        {
            Customer customer = _db.Customer.Find(id);
            if (customer == null)
            {
                return NotFound();
            }

            _db.Customer.Remove(customer);
            _db.SaveChanges();

            return Ok(customer);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CustomerExists(int id)
        {
            return _db.Customer.Count(e => e.Id == id) > 0;
        }
    }
}