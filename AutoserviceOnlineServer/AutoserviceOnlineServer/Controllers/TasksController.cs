using System;
using System.Collections;
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
    [RoutePrefix("api/Tasks")]
    public class TasksController : ApiController
    {
        // GET: api/Tasks
        [HttpGet]
        public IEnumerable<TaskDto> GetTasks()
        {
            using (var tasksAccess = new TasksAccess())
            {
                var taskDtos = Mapper.Map<IEnumerable<Task>, IEnumerable<TaskDto>>(tasksAccess.GetTasks());
                return taskDtos;
            }
            //return new List<TaskDto> {new TaskDto {Name = "test", Price = 200}};
        }


        // GET: api/Tasks/5
        [HttpGet]
        [Route("{id}")]
        [ResponseType(typeof(Task))]
        public IHttpActionResult GetTask(int id)
        {
            Task task;
            using (var tasksAccess = new TasksAccess())
            {
                task = tasksAccess.GetTask(id);
            }
            if (task == null)
            {
                return NotFound();
            }

            return Ok(task);
        }

        // PUT: api/Tasks/5
        [HttpPut]
        [Route("{id}")]
        [ResponseType(typeof(void))]
        public IHttpActionResult UpdateTask(int id, Task task)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != task.Id)
            {
                return BadRequest();
            }
            using (var tasksAccess = new TasksAccess())
            {
                tasksAccess.UpdateTask(id, task);
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Tasks
        [HttpPost]
        [ResponseType(typeof(Task))]
        public IHttpActionResult AddTask(Task task)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            using (var tasksAccess = new TasksAccess())
            {
                tasksAccess.AddTask(task);
            }

            return CreatedAtRoute("DefaultApi", new {id = task.Id}, task);
        }

        // DELETE: api/Tasks/5
        [ResponseType(typeof(Task))]
        public IHttpActionResult Deletetask(int id)
        {
            using (var tasksAccess = new TasksAccess())
            {
                Task task = tasksAccess.GetTask(id);
                if (task == null)
                {
                    return NotFound();
                }

                tasksAccess.DeleteTask(task);
                return Ok(task);
            }
        }
    }
}