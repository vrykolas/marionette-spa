SW.Controllers.Unauthenticated = {
  login: function() {
    window.App.rootView.showChildView('content', new window.SW.Views.Pages.Login({
      model: window.App.authModel
    }));
  },
  forgottenPassword: function() {
    window.App.rootView.showChildView('content', new window.SW.Views.Pages.ForgottenPassword({
      model: window.App.authModel
    }));
  },
  resetPassword: function() {
    window.App.rootView.showChildView('content', new window.SW.Views.Pages.ResetPassword({
      model: window.App.authModel
    }));
  }
};
