using System;
using System.Collections.Generic;

namespace AutoserviceOnlineServer.Model.Dto
{
    public sealed class OrderDto
    {
        public int Id { get; set; }

        public DateTime Created { get; set; }

        public bool Completed { get; set; }

        public DateTime? CompletionDate { get; set; }

        public int CustomerId { get; set; }

        public int CarId { get; set; }

        public CarDto Car { get; set; }

        public CustomerDto Customer { get; set; }

        public ICollection<TaskDto> Tasks { get; set; }

        public ICollection<WorkmanDto> Workman { get; set; }
    }
}