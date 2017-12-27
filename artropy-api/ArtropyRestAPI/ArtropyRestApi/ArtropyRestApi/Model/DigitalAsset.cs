using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ArtropyRestApi.Model
{
    public class DigitalAsset
    {
        [Range(1, 100), DataType(DataType.Currency)]
        public decimal Price { get; set; }



    }
}
