Marionette.WebSocket = Marionette.Object.extend({
  collections: {},

  addCollection: function(type, collection) {
    this.collections[type] = collection;
  },

  removeCollection: function(type) {
    delete this.collections[type];
  },

  start: function() {
    this.socket.on('dataRecieved', function(message) {
      if(_.has(this.collections, message.type)) {
        switch(message.action) {
          case 'add':
          case 'update':
            this.collections[message.type].add(
              message.data,
              {
                merge: true
              }
            );
            break;
          case 'remove':
            this.collections[message.type].remove(message.data);
            break;
          case 'clear':
            this.collections[message.type].reset();
            break;
        }
      }
    });
  }
});
