(function (window) {
	'use strict';

  var Abstract = {
    Vehicle: function(name, seats, wheels) {
      this.name = name;
      this.seats = seats;
      this.wheels = wheels;

      this.get = function(prop) {
        return this[prop];
      }
      this.set = function(prop, value) {
        this[prop] = value;
      }
    }
  };

  // Export to window
	window.SC = window.SC || {};
	window.SC.Abstract = Abstract;
})(window)
