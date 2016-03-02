SW.Views.Layouts.Authenticated = Marionette.LayoutView.extend({
  template: 'layouts/authenticated',

  regions: {
    header: '#header',
    mainMenu: '#main-menu',
    breadcrumbs: '#breadcrumbs',
    notices: '#notices',
    content: '#content',
    footer: '#footer'
  },

  onRender: function() {
    this.header.show(new SW.Views.Layouts.AuthenticatedHeader());
    this.mainMenu.show(new SW.Views.Components.MainMenu());
    this.footer.show(new SW.Views.Components.AuthenticatedFooter());
  }
});
