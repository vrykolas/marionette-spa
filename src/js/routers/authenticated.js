SW.Routers.Authenticated = new Marionette.FilteredAppRouter({
  pushState: true,
  controller: SW.Controllers.Authenticated,
  appRoutes: {
    '': 'dashboard',
    compute: 'compute',
    assure: 'assure',
    backup: 'backup',
    mail: 'mail',
    'users-groups': 'usersAndGroups',
    desktop: 'desktop',
    flash: 'flash',
    software: 'software',
    users: 'users',
    'audit-log': 'auditLog',
    help: 'help',
    logout: 'logout'
  },
  before: function() {
    if(!window.App.authModel.isAuthenticated()) {
      window.App.authModel.clear();
      Backbone.history.navigate('/login', { trigger: true });
      return false;
    }

    jQuery(document).find('body').removeClass('unauthenticated').addClass('authenticated');
    if(!window.App.rootView || !(window.App.rootView instanceof SW.Views.Layouts.Authenticated)) {
      window.App.rootView = new SW.Views.Layouts.Authenticated();
      window.App.Page.empty();
      window.App.Page.show(window.App.rootView);
    }
  },
  after: function() {
  }
});
