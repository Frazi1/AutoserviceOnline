using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace AutoserviceOnlineServer.Model.Dto
{
    public sealed class WorkmanDto
    {
        public int Id { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string MiddleName { get; set; }

        [Required]
        public string LastName { get; set; }

        [JsonIgnore]
        public ICollection<OrderDto> Order { get; set; }
    }
}