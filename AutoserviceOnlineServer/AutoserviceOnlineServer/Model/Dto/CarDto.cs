using System;
using System.Collections.Generic;
using DataAccess.Model;
using Newtonsoft.Json;

namespace AutoserviceOnlineServer.Model.Dto
{
    public sealed class CarDto
    {
        public int Id { get; set; }

        public string Manufacturer { get; set; }

        public string Model { get; set; }

        public string Vin { get; set; }

        public int ManufactureYear { get; set; }

        public int CustomerId { get; set; }

        public CustomerDto CustomerDto { get; set; }

        public ICollection<OrderDto> Order { get; set; }
    }

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

    public sealed class WorkmanDto
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string MiddleName { get; set; }

        public string LastName { get; set; }

        [JsonIgnore]
        public ICollection<OrderDto> Order { get; set; }
    }

    public sealed class TaskDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public decimal? Price { get; set; }

        [JsonIgnore]
        public ICollection<OrderDto> Orders { get; set; }
    }

    public sealed class CustomerDto
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string MiddleName { get; set; }

        public string LastName { get; set; }

        [JsonIgnore]
        public ICollection<CarDto> Car { get; set; }

        [JsonIgnore]
        public ICollection<OrderDto> Order { get; set; }
    }
}