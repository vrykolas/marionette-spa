'use strict';

Marionette.FilteredAppRouter = Marionette.AppRouter.extend({
  _addAppRoute: function(controller, route, methodName) {
    if(!controller[methodName]) {
      throw new Marionette.Error('Method "' + methodName + '" was not found on the controller');
    }

    var method = function(beforeMethod, actualMethod, afterMethod) {
      return function() {
        var continueRouting = true;

        if(beforeMethod) {
          continueRouting = beforeMethod.apply(arguments);
        }

        if(continueRouting !== false) {
          continueRouting = actualMethod.apply(arguments);
        }

        if(continueRouting !== false && afterMethod) {
          continueRouting = afterMethod.apply(arguments);
        }
      };
    }(this.options.before, controller[methodName], this.options.after);

    this.route(route, methodName, _.bind(method, controller));
  }
});
