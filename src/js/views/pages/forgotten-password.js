window.SW.Views.Pages.ForgottenPassword = Marionette.ItemView.extend({
  template: 'pages/forgotten-password',
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
    this.validationErrors = _.extend({}, this.model.validate());

    if(!_.isEmpty(this.validationErrors)) {
      return this.render();
    }

    this.model.sendForgottenPassword();
  }
});
