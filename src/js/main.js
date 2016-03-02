window.ServiceWorks = Marionette.Application.extend({
  initialize: function() {
  }
});

window.App = new window.ServiceWorks();

window.App.on('start', function() {
  // Initialize Authentication/Authorisation model
  window.App.authModel = new window.SW.Models.Auth();

  var regionManager = new Marionette.RegionManager();
  regionManager.addRegion('page', '#page');
  window.App.Page = regionManager.get('page');
  Backbone.history.start({
    pushState: true,
    root: window.appConfig.baseUrl
  });
});

jQuery(document).on('click', 'a', function(event) {
  var $this = $(this);
  var href = $this.attr('href');
  if(href && href.indexOf(window.appConfig.baseUrl) === 0 && $this.attr('target') !== '_blank') {
    event.preventDefault();
    Backbone.history.navigate(href, { trigger: true });
  }
});

// loadInitialData().then(window.App.start);
window.App.start();
