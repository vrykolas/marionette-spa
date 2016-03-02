'use strict';

Backbone.SearchableCollection = Backbone.Collection.extend({
  searchableIndex: null,
  searchableIdField: '',
  searchableFields: [],

  initialize: function() {
    var self = this;
    this.searchableIndex = lunr(function() {
      for(var i = 0; i < self.searchableFields.length; i++) {
        this.field(self.searchableFields[i]);
      }
      this.ref(self.searchableIdField);
    });

    this.on('add', this.addToIndex);
    this.on('remove', this.removeFromIndex);
    this.on('update', this.updateInIndex);
  },

  addToIndex: function(model) {
    this.searchableIndex.add(this.convertToSearchableDoc(model));
  },

  updateInIndex: function(model) {
    this.searchableIndex.update(this.convertToSearchableDoc(model));
  },

  removeFromIndex: function(model) {
    this.searchableIndex.remove(this.convertToSearchableDoc(model));
  },

  convertToSearchableDoc: function(model) {
    var docFields = this.searchableFields.concat([
      this.searchableIdField
    ]);
    return _.pick(model.attributes, docFields);
  },

  searchDocs: function(query) {
    if(query.trim() === '') {
      var self = this;
      return _.map(this.models, function(model) {
        return model.get(self.searchableIdField);
      });
    }

    var results = this.searchableIndex.search(query);
    results = _.sortBy(results, 'score');
    return _.pluck(results, 'ref');
  }
});
