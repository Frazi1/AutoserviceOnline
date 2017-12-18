using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace AutoserviceOnlineServer.Model.Dto
{
    public sealed class TaskDto
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public decimal? Price { get; set; }

        [JsonIgnore]
        public ICollection<OrderDto> Orders { get; set; }
    }
}