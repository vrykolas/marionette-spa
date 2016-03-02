SW.Views.Layouts.Unauthenticated = Marionette.LayoutView.extend({
  template: 'layouts/unauthenticated',

  regions: {
    header: '#header',
    content: '#content',
    footer: '#footer'
  },

  onRender: function() {
    this.header.show(new SW.Views.Components.UnauthenticatedHeader());
  }
});
