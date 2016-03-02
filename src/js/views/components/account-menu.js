SW.Views.Components.AccountMenu = Marionette.ItemView.extend({
  template: 'components/account-menu',

  serializeData: function() {
    var links = [
      {
        url: window.appConfig.baseUrl + 'users',
        label: 'Users',
        active: false
      },
      {
        url: window.appConfig.baseUrl + 'audit-log',
        label: 'Audit Log',
        active: false
      },
      {
        url: window.appConfig.baseUrl + 'help',
        label: 'Help',
        active: false
      },
      {
        url: window.appConfig.baseUrl + 'logout',
        label: 'Logout',
        active: false
      },

      {
        url: window.appConfig.baseUrl + 'login',
        label: 'Login',
        active: false
      },
      {
        url: window.appConfig.baseUrl + 'forgotten-password',
        label: 'Forgotten Password',
        active: false
      },
      {
        url: window.appConfig.baseUrl + 'reset-password',
        label: 'Reset Password',
        active: false
      }
    ];

    var currentPath = window.appConfig.baseUrl + Backbone.history.getFragment();
    links = _.map(links, function(link) {
      if(link.url === currentPath) {
        link.active = true;
      }

      return link;
    });

    return {
      links: links
    };
  }
});
