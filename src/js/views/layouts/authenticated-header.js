SW.Views.Layouts.AuthenticatedHeader = Marionette.LayoutView.extend({
  template: 'layouts/authenticated-header',
  regions: {
    logo: '#logo',
    accountMenu: '#account-menu',
    mainMenu: '#main-menu'
  },

  onRender: function() {
    this.logo.show(new SW.Views.Components.Logo());
    this.accountMenu.show(new SW.Views.Components.AccountMenu());
    this.mainMenu.show(new SW.Views.Components.MainMenu());
  }
});
