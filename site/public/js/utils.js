(function (window) {
	'use strict';

  var attach = function(obj, event, fn) {
    obj.addEventListener(event, fn, false);
  }

  // Export to window
	window.attach = attach;
})(window)


