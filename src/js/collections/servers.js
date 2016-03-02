'use strict';

window.SW.Collections.Servers = Backbone.Collection.extend({
  model: window.SW.Models.Server,
  url: '/api/servers'
});
