using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ArtropyRestApi.Model
{
    public class DigitalAsset
    {
        public int id { get; set; }
        public string guid { get; set; }
        public string name { get; set; }
        public int[][] dimensions { get; set; }
        public int views { get; set; }
        public int favorited { get; set; }
        public int purchased { get; set; }
        [Range(1, 100), DataType(DataType.Currency)]
        public int donatedAmount { get; set; }
        [Range(1, 100), DataType(DataType.Currency)]
        public decimal artistPrice { get; set; }
        public string authorDescription { get; set; }
        public bool artropyPurchaseAble { get; set; }
        public decimal artropyPrice { get; set; }

    }
}
