Marionette.Auth = Marionette.Object.extend({
  loginUrl: null,
  logoutUrl: null,
  refreshUrl: null,

  currentUser: null,

  refreshTimer: null,
  logoutTimer: null,

  login: function(username, password) {
    if(!this.loginUrl) {
      return;
    }

    this.currentUser = null;

    if(this.refreshTimer) {
      window.clearTimeout(this.refreshTimer);
    }

    if(this.logoutTimer) {
      window.clearTimeout(this.logoutTimer);
    }

    var response = jQuery.post(
      this.loginUrl,
      {
        username: username,
        password: password
      }
    );

    if(!loggedIn) {
      // show error messages
      return;
    }

    // set currentUser

    if(this.refreshUrl) {
      this.refreshTimer = window.setTimeout(this.refresh, refreshDelay);
    }

    this.logoutTimer = window.setTimeout(this.logout, logoutDelay);

    Backbone.history.navigate('', {trigger: true});
  },

  logout: function() {
    if(!this.logoutUrl) {
      return;
    }

    if(this.refreshTimer) {
      window.clearTimeout(this.refreshTimer);
    }

    if(this.logoutTimer) {
      window.clearTimeout(this.logoutTimer);
    }

    if(this.logoutUrl) {
      jQuery.get(this.logoutUrl);
    }

    Backbone.history.navigate('logout', {trigger: true, replace: true});
  },

  refresh: function() {
    if(!this.refreshUrl) {
      return;
    }
  },

  forgottenPassword: function() {},

  resetPassword: function() {}
});
