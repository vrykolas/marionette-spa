'use strict';

window.SW.Models.Server = Backbone.Model.extend({
  url: function() {
    var url = '/api/servers';

    if(!this.id) {
      return url;
    }

    return url + '/' + this.id;
  }
});
