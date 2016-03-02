SW.Routers.Unauthenticated = new Marionette.FilteredAppRouter({
  pushState: true,
  controller: SW.Controllers.Unauthenticated,
  appRoutes: {
    login: 'login',
    'forgotten-password': 'forgottenPassword',
    'reset-password': 'resetPassword'
  },
  before: function() {
    if(window.App.authModel.isAuthenticated()) {
      Backbone.history.navigate('/', { trigger: true });
      return false;
    }

    jQuery(document).find('body').removeClass('authenticated').addClass('unauthenticated');
    console.log('before unauthenticated route');
    if(!window.App.rootView || !(window.App.rootView instanceof SW.Views.Layouts.Unauthenticated)) {
      window.App.rootView = new SW.Views.Layouts.Unauthenticated();
      window.App.Page.empty();
      window.App.Page.show(window.App.rootView);
    }
  },
  after: function() {
    console.log('after unauthenticated route');
  }
});
