SW.Views.Components.MainMenu = Marionette.ItemView.extend({
  template: 'components/main-menu',

  serializeData: function() {
    var links = [
      {
        url: window.appConfig.baseUrl + '',
        label: 'Dashboard',
        active: false
      },
      {
        url: window.appConfig.baseUrl + 'compute',
        label: 'Compute',
        active: false
      },
      {
        url: window.appConfig.baseUrl + 'assure',
        label: 'Assure',
        active: false
      },
      {
        url: window.appConfig.baseUrl + 'backup',
        label: 'Backup',
        active: false
      },
      {
        url: window.appConfig.baseUrl + 'mail',
        label: 'Mail',
        active: false
      },
      {
        url: window.appConfig.baseUrl + 'users-groups',
        label: 'Users & Groups',
        active: false
      },
      {
        url: window.appConfig.baseUrl + 'desktop',
        label: 'Desktop',
        active: false
      },
      {
        url: window.appConfig.baseUrl + 'flash',
        label: 'Flash',
        active: false
      },
      {
        url: window.appConfig.baseUrl + 'software',
        label: 'Software',
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
