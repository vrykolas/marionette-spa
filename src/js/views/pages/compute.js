window.SW.Views.Pages.Compute = Marionette.LayoutView.extend({
  template: 'pages/compute',

  regions: {
    computeOverview: '#compute-overview',
    supportContacts: '#support-contacts',
    serverUsage: '#server-usage',
    taskListing: '#task-listing',
    serverListing: '#server-listing'
  }
});
