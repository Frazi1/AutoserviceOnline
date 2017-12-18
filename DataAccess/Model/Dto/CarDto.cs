using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using DataAccess.Model;
using Newtonsoft.Json;

namespace AutoserviceOnlineServer.Model.Dto
{
    public sealed class CarDto
    {
        public int Id { get; set; }

        [Required]
        public string Manufacturer { get; set; }

        [Required]
        public string Model { get; set; }

        [Required]
        public string Vin { get; set; }

        [Required]
        public int ManufactureYear { get; set; }

        public int CustomerId { get; set; }

        public CustomerDto CustomerDto { get; set; }

        public ICollection<OrderDto> Order { get; set; }
    }

    public sealed class CustomerDto
    {
        public int Id { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string MiddleName { get; set; }

        [Required]
        public string LastName { get; set; }

        [JsonIgnore]
        public ICollection<CarDto> Car { get; set; }

        [JsonIgnore]
        public ICollection<OrderDto> Order { get; set; }
    }
}