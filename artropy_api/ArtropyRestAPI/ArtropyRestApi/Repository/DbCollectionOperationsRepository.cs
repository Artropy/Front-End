using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ArtropyRestApi.Infrastructure;


namespace ArtropyRestApi.Repository
{
  public interface IDbCollectionOperationsRepository<TModel, in TPk>
  {
    Task<IEnumerable<TModel>> GetItemsFromCollectionAsync();
    Task<TModel> GetItemFromCollectionAsync(TPk id);
    Task<TModel> AddDocumentIntoCollectionAsync(TModel item);
    Task<TModel> UpdateDocumentFromCollection(TPk id, TModel item);
    Task DeleteDocumentFromCollectionAsync(TPk id);
  }

  /*
  public class DbCollectionOperationsRepository : IDbCollectionOperationsRepository<PersonalInformationModel, string>
  {
    }
    */
}
