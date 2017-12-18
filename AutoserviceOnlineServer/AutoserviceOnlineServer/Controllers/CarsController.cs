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

    public class CarsController : ApiController
    {
        private readonly AutoserviceDb _db = new AutoserviceDb();

        // GET: api/Cars
        [Route("api/cars")]
        public IEnumerable<CarDto> Getcar()
        {
            return Mapper.Map<IEnumerable<CarDto>>(_db.Cars);
        }

        // GET: api/Cars/5
        [Route("api/cars/{id}")]
        [ResponseType(typeof(CarDto))]
        public IHttpActionResult Getcar(int id)
        {
            CarDto car = Mapper.Map<CarDto>(_db.Cars.Find(id));
            if (car == null)
            {
                return NotFound();
            }

            return Ok(car);
        }

        // PUT: api/Cars/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putcar(int id, CarDto car)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != car.Id)
            {
                return BadRequest();
            }

            _db.Entry(car).State = EntityState.Modified;

            try
            {
                _db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CarExists(id))
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

        //// POST: api/Cars
        //[ResponseType(typeof(Car))]
        //public IHttpActionResult Postcar(Car car)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    _db.Car.Add(car);

        //    try
        //    {
        //        _db.SaveChanges();
        //    }
        //    catch (DbUpdateException)
        //    {
        //        if (CarExists(car.Id))
        //        {
        //            return Conflict();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return CreatedAtRoute("DefaultApi", new {id = car.Id}, car);
        //}

        // DELETE: api/Cars/5
        [ResponseType(typeof(Car))]
        public IHttpActionResult Deletecar(int id)
        {
            Car car = _db.Cars.Find(id);
            if (car == null)
            {
                return NotFound();
            }

            _db.Cars.Remove(car);
            _db.SaveChanges();

            return Ok(car);
        }

        [HttpGet]
        [Route("api/cars/GetCustomerCars/")]
        public IList<CarDto> GetCustomerCars([FromUri] int customerId=0)
        {
            using (var carsAccess = new CarsAccess())
                return Mapper.Map<IList<CarDto>>(carsAccess.GetCustomerCars(customerId).ToList());
        }

        [HttpPost]
        [Route("api/cars/AddCar")]
        public IHttpActionResult AddCar(CarDto car, [FromUri] int customerId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (customerId <= 0)
            {
                return BadRequest(customerId.ToString());
            }
            car.CustomerId = customerId;
            Car carDb = Mapper.Map<Car>(car);
            using (var carsAccess = new CarsAccess())
            {
                carsAccess.AddCar(carDb);
            }
            return Ok(new {id = carDb.Id});
        }
        
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CarExists(int id)
        {
            return _db.Cars.Count(e => e.Id == id) > 0;
        }
    }
}