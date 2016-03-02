SW.Controllers.Authenticated = {
  dashboard: function() {
    window.App.rootView.showChildView('content', new window.SW.Views.Pages.Dashboard());
  },
  compute: function() {
    window.App.rootView.showChildView('content', new window.SW.Views.Pages.Compute());
  },
  assure: function() {
    window.App.rootView.showChildView('content', new window.SW.Views.Pages.Assure());
  },
  backup: function() {
    window.App.rootView.showChildView('content', new window.SW.Views.Pages.Backup());
  },
  mail: function() {
    window.App.rootView.showChildView('content', new window.SW.Views.Pages.Mail());
  },
  usersAndGroups: function() {
    window.App.rootView.showChildView('content', new window.SW.Views.Pages.UsersAndGroups());
  },
  desktop: function() {
    window.App.rootView.showChildView('content', new window.SW.Views.Pages.Desktop());
  },
  flash: function() {
    window.App.rootView.showChildView('content', new window.SW.Views.Pages.Flash());
  },
  software: function() {
    window.App.rootView.showChildView('content', new window.SW.Views.Pages.Software());
  },
  users: function() {
    window.App.rootView.showChildView('content', new window.SW.Views.Pages.Users());
  },
  auditLog: function() {
    window.App.rootView.showChildView('content', new window.SW.Views.Pages.AuditLog());
  },
  help: function() {
    window.App.rootView.showChildView('content', new window.SW.Views.Pages.Help());
  },
  logout: function() {
    window.App.authModel.clear();
    Backbone.history.navigate('/login', { trigger: true });
  }
};
