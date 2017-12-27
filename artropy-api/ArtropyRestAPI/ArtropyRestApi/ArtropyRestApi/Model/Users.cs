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


        public List<Users> getAllUsers()
        {
            var listOfUsers = new List<Users>();

            return listOfUsers;
        }

        public List<Users> getUser()
        {
            var user = new List<Users>();
            return user;
        }

        public void insertNewUser()
        {
            return;
        }

        public void updateUser()
        {

        }

        public void uploadUserImage()
        {
            return;
        }
    }
}
