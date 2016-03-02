window.SW.Views.Pages.Dashboard = Marionette.LayoutView.extend({
  template: 'pages/dashboard',

  regions: {
    productCarousel: '#product-carousel',
    supportContacts: '#support-contacts',
    billingHistory: '#billing-history',
    platformStatus: '#platform-status',
    platformMetrics: '#platform-metrics'
  }
});
