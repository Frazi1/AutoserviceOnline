﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using DataAccess;

namespace AutoserviceOnlineServer.Controllers
{
    public class OrdersController : ApiController
    {
        private AutoserviceDb db = new AutoserviceDb();

        // GET: api/Orders
        public IEnumerable<order> Getorder()
        {
            return db.order.ToList();
        }

        // GET: api/Orders/5
        [ResponseType(typeof(order))]
        public IHttpActionResult Getorder(int id)
        {
            order order = db.order.Find(id);
            if (order == null)
            {
                return NotFound();
            }

            return Ok(order);
        }

        // PUT: api/Orders/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putorder(int id, order order)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != order.id)
            {
                return BadRequest();
            }

            db.Entry(order).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!orderExists(id))
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
        [ResponseType(typeof(order))]
        public IHttpActionResult Postorder(order order)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.order.Add(order);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = order.id }, order);
        }

        // DELETE: api/Orders/5
        [ResponseType(typeof(order))]
        public IHttpActionResult Deleteorder(int id)
        {
            order order = db.order.Find(id);
            if (order == null)
            {
                return NotFound();
            }

            db.order.Remove(order);
            db.SaveChanges();

            return Ok(order);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool orderExists(int id)
        {
            return db.order.Count(e => e.id == id) > 0;
        }
    }
}