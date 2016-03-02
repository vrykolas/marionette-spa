window.SW.Views.Pages.ResetPassword = Marionette.ItemView.extend({
  template: 'pages/reset-password',
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

    // Validate model and remaining form elements
    this.validationErrors = {};
    var password = this.$('#password').val().trim();
    var confirmPassword = this.$('#confirm-password').val().trim();
    if(!password) {
      this.validationErrors.password = 'Please enter a password';
    }
    if(!confirmPassword) {
      this.validationErrors.confirmPassword = 'Please confirm the password';
    }
    if(password !== confirmPassword) {
      this.validationErrors.confirmPassword = 'The passwords supplied do not match';
    }

    if(!_.isEmpty(this.validationErrors)) {
      return this.render();
    }

    this.model.resetPassword(password);
  }
});
