window.SW.Views.Pages.Login = Marionette.ItemView.extend({
  template: 'pages/login',
  events: {
    'click .btn-success': 'processForm'
  },
  validationErrors: {},

  templateHelpers: function() {
    return {
      validationErrors: this.validationErrors
    };
  },

  processForm: function(event) {
    event.preventDefault();

    // Update model
    this.model.set('email', this.$('#email').val());

    // Validate model and remaining form elements
    var password = this.$('#password').val().trim();
    this.validationErrors = _.extend({}, this.model.validate());
    if(!password) {
      this.validationErrors.password = 'Please enter a password';
    }

    if(!_.isEmpty(this.validationErrors)) {
      this.render();
      return;
    }

    this.model.login(password);
  }
});
