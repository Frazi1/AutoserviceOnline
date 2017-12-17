using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using DataAccess.Model;

namespace DataAccess
{
    public class TasksAccess : AccessBase<AutoserviceDb>
    {
        public Task GetTask(int id)
        {
            return Db.Task.Find(id);
        }

        public List<Task> GetTasks()
        {
            return Db.Task.ToList();
        }

        public List<Task> GetTasks(Func<Task, bool> predicate)
        {
            return Db.Task.Where(predicate).ToList();
        }

        public void AddTask(Task task)
        {
            Db.Task.Add(task);
            Db.SaveChanges();
        }

        public void UpdateTask(int id, Task task)
        {
            Db.Entry(task).State = EntityState.Modified;
            Db.SaveChanges();
        }

        public void DeleteTask(Task task)
        {
            Db.Task.Remove(task);
            Db.SaveChanges();
        }

        public bool TaskExists(int id)
        {
            return Db.Task.Count(e => e.Id == id) > 0;
        }

        public void AppendToOrder(int taskId, int orderId)
        {
            var order = Db.Order.Find(orderId);
            var task = Db.Task.Find(taskId);
            order.Tasks.Add(task);
            task.Orders.Add(order);
            Db.SaveChanges();
        }
    }
}