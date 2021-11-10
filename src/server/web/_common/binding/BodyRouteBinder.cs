#region Usings
using ED.Plugins;
using log4net;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.AspNetCore.Mvc.ModelBinding.Binders;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ModelDataSource = ED.DataSources.DataSource;
#endregion

namespace ED.Web
{
  /// <summary>
  /// 
  /// </summary>
  public class BodyRouteBindingSource : BindingSource
  {
		#region Class initialization
    /// <summary>
    /// 
    /// </summary>
		public static readonly BindingSource BodyAndRoute = new BodyRouteBindingSource(
        "BodyAndRoute",
        "BodyAndRoute",
        true,
        true
        );
    /// <summary>
    /// 
    /// </summary>
    /// <param name="id"></param>
    /// <param name="displayName"></param>
    /// <param name="isGreedy"></param>
    /// <param name="isFromRequest"></param>
    public BodyRouteBindingSource( string id, string displayName, bool isGreedy, bool isFromRequest ) 
      : base( id, displayName, isGreedy, isFromRequest )
    {
    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="bs"></param>
    /// <returns></returns>
    public override bool CanAcceptDataFrom( BindingSource bs ) => bs == Body || bs == this;

    #endregion
  }

  /// <summary>
  /// 
  /// </summary>
  [AttributeUsage( AttributeTargets.Parameter | AttributeTargets.Property, AllowMultiple = false, Inherited = true )]
  public class FromBodyRouteAttribute : Attribute, IBindingSourceMetadata
  {
		#region Class properties
    /// <summary>
    /// 
    /// </summary>
		public BindingSource BindingSource => BodyRouteBindingSource.BodyAndRoute;
    #endregion
  }

  public class BodyRouteModelBinder : IModelBinder
  {
    #region Class members
    /// <summary>
    /// 
    /// </summary>
    private readonly IModelBinder _bodyBinder;
    /// <summary>
    /// 
    /// </summary>
    private readonly IModelBinder _complexBinder;
    #endregion

    #region Class initialization
    /// <summary>
    /// 
    /// </summary>
    /// <param name="bodyBinder"></param>
    /// <param name="complexBinder"></param>
    public BodyRouteModelBinder( IModelBinder bodyBinder, IModelBinder complexBinder )
    {
      _bodyBinder = bodyBinder;
      _complexBinder = complexBinder;
    }
    #endregion

    #region Class public methods
    /// <summary>
    /// 
    /// </summary>
    /// <param name="bindingContext"></param>
    /// <returns></returns>
    public async Task BindModelAsync( ModelBindingContext bindingContext )
    {
      await _bodyBinder.BindModelAsync( bindingContext );

      if( bindingContext.Result.IsModelSet )
      {
        bindingContext.Model = bindingContext.Result.Model;
      }

      await _complexBinder.BindModelAsync( bindingContext );
    }
    #endregion
  }

  public class BodyRouteModelBinderProvider : IModelBinderProvider
  {
    #region Class members
    /// <summary>
    /// 
    /// </summary>
    private BodyModelBinderProvider _bodyModelBinderProvider;
    /// <summary>
    /// 
    /// </summary>
    private ComplexObjectModelBinderProvider _complexTypeModelBinderProvider;
    #endregion

    #region Class initialization
    /// <summary>
    /// 
    /// </summary>
    /// <param name="bodyModelBinderProvider"></param>
    /// <param name="complexTypeModelBinderProvider"></param>
    public BodyRouteModelBinderProvider( 
      BodyModelBinderProvider bodyModelBinderProvider,
      ComplexObjectModelBinderProvider complexTypeModelBinderProvider )
    {
      _bodyModelBinderProvider = bodyModelBinderProvider;
      _complexTypeModelBinderProvider = complexTypeModelBinderProvider;
    }
    #endregion

    #region Class public methods
    /// <summary>
    /// 
    /// </summary>
    /// <param name="context"></param>
    /// <returns></returns>
    public IModelBinder GetBinder( ModelBinderProviderContext context )
    {
      var bodyBinder = _bodyModelBinderProvider.GetBinder( context );
      var complexBinder = _complexTypeModelBinderProvider.GetBinder( context );

      if( context.BindingInfo.BindingSource != null
          && context.BindingInfo.BindingSource.CanAcceptDataFrom( BodyRouteBindingSource.BodyAndRoute ) )
      {
        return new BodyRouteModelBinder( bodyBinder, complexBinder );
      }
      else
      {
        return null;
      }
    }
    #endregion
  }

  /// <summary>
  /// 
  /// </summary>
  public static class BodyRouteModelBinderProviderSetup
  {
		#region Class public methods
    /// <summary>
    /// 
    /// </summary>
    /// <param name="providers"></param>
		public static void InsertBodyRouteBinding( this IList<IModelBinderProvider> providers )
    {
      var bodyProvider = providers.Single( provider =>
        provider.GetType() == typeof( BodyModelBinderProvider ) ) as BodyModelBinderProvider;

      var complexProvider = providers.Single( provider =>
        provider.GetType() == typeof( ComplexObjectModelBinderProvider ) ) as ComplexObjectModelBinderProvider;

      var bodyAndRouteProvider = new BodyRouteModelBinderProvider( bodyProvider, complexProvider );

      providers.Insert( 0, bodyAndRouteProvider );
    }
    #endregion
  }
}
