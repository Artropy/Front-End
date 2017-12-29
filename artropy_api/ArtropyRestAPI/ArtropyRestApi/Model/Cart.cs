using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ArtropyRestApi.Model
{
    public class Cart{

      public decimal subTotal { get; set; }
      public decimal grandTotal { get; set; }
      public decimal taxRate { get; set;}
      public decimal shippingAcmount { get; set;}
      public Account account { get; set;}
      public Address billingAddress { get; set; }
      public Address shippingAddress { get; set; }

    }
}
