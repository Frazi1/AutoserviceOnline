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

        public IEnumerable<Task> GetTasks()
        {
            return Db.Task;
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
    }
}