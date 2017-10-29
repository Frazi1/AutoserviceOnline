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
    public class CarsController : ApiController
    {
        private AutoserviceDb db = new AutoserviceDb();

        // GET: api/Cars
        public IQueryable<car> Getcar()
        {
            return db.car;
        }

        // GET: api/Cars/5
        [ResponseType(typeof(car))]
        public IHttpActionResult Getcar(int id)
        {
            car car = db.car.Find(id);
            if (car == null)
            {
                return NotFound();
            }

            return Ok(car);
        }

        // PUT: api/Cars/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putcar(int id, car car)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != car.id)
            {
                return BadRequest();
            }

            db.Entry(car).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!carExists(id))
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

        // POST: api/Cars
        [ResponseType(typeof(car))]
        public IHttpActionResult Postcar(car car)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.car.Add(car);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (carExists(car.id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = car.id }, car);
        }

        // DELETE: api/Cars/5
        [ResponseType(typeof(car))]
        public IHttpActionResult Deletecar(int id)
        {
            car car = db.car.Find(id);
            if (car == null)
            {
                return NotFound();
            }

            db.car.Remove(car);
            db.SaveChanges();

            return Ok(car);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool carExists(int id)
        {
            return db.car.Count(e => e.id == id) > 0;
        }
    }
}