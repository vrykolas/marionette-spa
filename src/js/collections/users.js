'use strict';

window.SW.Collections.Users = Backbone.Collection.extend({
  model: window.SW.Models.User,
  url: '/api/users'
});
