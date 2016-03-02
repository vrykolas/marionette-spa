'use strict';

window.SW.Models.Auth = Backbone.Model.extend({
  validation: {
    email: {
      required: true,
      pattern: 'email',
      msg: 'Please enter a valid email'
    }
  },

  isAuthenticated: function() {
    return false;
  },

  login: function(password) {
    var username = this.get('email');
  },

  sendForgottenPassword: function() {
    var username = this.get('email');
  },

  resetPassword: function(password) {
    var username = this.get('email');
  }
});
