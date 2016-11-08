'use strict';

var Operation = Operation || {};

Operation.prototype.getRealHeaderParams = function(map) {
  var obj = this.execute(map, {
    mock: true
  });
  this.clientAuthorizations.apply(obj, this.operation.security);
  for (var key in obj.headers) {
    if (typeof(obj.headers[key]) !== 'string') {
      obj.headers[key] = obj.headers[key].toString();
    }
  }
  return obj.headers;
};
