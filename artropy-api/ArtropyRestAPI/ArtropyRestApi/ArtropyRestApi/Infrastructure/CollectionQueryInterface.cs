using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ArtropyRestApi.Infrastructure
{
      public interface CollectionQueryInterface<TModel, in TPk>
      {
        Task<IEnumerable<TModel>> GetItemsFromCollectionAsync();
        Task<TModel> GetItemFromCollectionAsync(TPk id);
        Task<TModel> AddDocumentIntoCollectionAsync(TModel item);
        Task<TModel> UpdateDocumentFromCollection(TPk id, TModel item);
        Task DeleteDocumentFromCollectionAsync(TPk id);
      }
}
