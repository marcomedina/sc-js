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

  var Instances = {
    Car: function(name, seats, wheels) {
      Abstract.Vehicle.call(this, name, seats, wheels);
    },
    Motorcycle: function(name, seats, wheels) {
      Abstract.Vehicle.call(this, name, seats, wheels);
    }
  };

  // Car inherits from Vehicle
  Instances.Car.prototype = new Abstract.Vehicle();
  Instances.Car.prototype.constructor = Abstract.Vehicle;
  
  // Motorcycle inherits from Vehicle
  Instances.Motorcycle.prototype = new Abstract.Vehicle();
  Instances.Motorcycle.prototype.constructor = Abstract.Vehicle;

  // Export to window
	window.SC = window.SC || {};
	window.SC.Abstract = Abstract;
})(window)
