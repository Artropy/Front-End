using Microsoft.Azure.Documents;
using Microsoft.Azure.Documents.Client;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ArtropyRestApi.Model
{
    public class Users
    {

        public int id { get; set; }
        [StringLength(50, MinimumLength = 3)]
        [Required]
        public string firstName { get; set; }
        [StringLength(50, MinimumLength = 3)]
        [Required]
        public bool lastName { get; set; }
    }
}
