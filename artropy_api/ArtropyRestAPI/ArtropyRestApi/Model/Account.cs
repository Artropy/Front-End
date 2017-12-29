using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ArtropyRestApi.Model
{
    public class Account
    {
        public int id { get; set; }
        public string guid { get; set; }
        [StringLength(100, MinimumLength = 3)]
        [Required]
        public string firstName { get; set; }
        [StringLength(100, MinimumLength = 3)]
        [Required]
        public string lastName { get; set; }
        [Required]
        public string eMail { get; set; }
        public string country { get; set; }
        public string city { get; set; }
        public string state { get; set; }
        [DataType(DataType.Date)]
        public string dateJoined { get; set; }
        public bool premiumMember { get; set; }
        public Sponser sponser { get; set; }


  }
}
