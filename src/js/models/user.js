'use strict';

SW.Models.User = Backbone.Model.extend({
  url: function() {
    var url = '/api/users';

    if(!this.id) {
      return url;
    }

    return url + '/' + this.id;
  }
});
