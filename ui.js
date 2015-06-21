(function (window, document) {
	'use strict';

  var UI = {
    addVehicle: function(name, type) {
      if(type==='car') {
        var vehicle = new SC.Instances.Car(name);
      }
      if(type==='motorcycle') {
        var vehicle = new SC.Instances.Motorcycle(name);
      }

      var node = document.createElement('li');
      var textNode = document.createTextNode(vehicle.name);
      var buttonNode = document.createElement('input');
      buttonNode.type = "button";
      buttonNode.value = 'Info';
      node.appendChild(textNode);  
      node.appendChild(buttonNode);  

      // Attach info function to info button
      var handler = function(e) {
        vehicle.info();
      };
      window.attach(buttonNode, 'click', handler);

      document.getElementById('vehicles-list').appendChild(node);
    }
  };

  // Export to window
	window.SC = window.SC || {};
	window.SC.UI = UI;
})(window, document)

