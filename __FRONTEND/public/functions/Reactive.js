var handler = function () {
  return {
    get: function (obj, prop) {
      console.log("updated scoring state detected in proxy");
      if (
        ["[Object Object]", "[Object Array]"].indexOf(
          Object.prototype.toString.call(obj[prop])
        ) > -1
      ) {
        return new Proxy(obj[prop], handler());
      }
      return obj[prop];
    },
    set: function (obj, prop, value) {
      console.log("set it");
      obj[prop] = value;
      return true;
    },
    deleteProperty: function (obj, prop) {
      console.log("delete it");
      delete obj[prop];
      return true;
    },
  };
};

var simpleHandler = {
  get: function (obj, prop) {
    // do stuff when someone gets property
    // return the value like default maybe
    return obj[prop];
  },
  set: function (obj, prop, value) {
    // do stuff when someone set property
    // set the property maybe
    obj[prop] = value;
    // maybe return true
    return true;
  },
  deleteProp: function (obj, prop) {
    // do stuff when someone deletes property
    // maybe do default
    delete obj[prop];
    // maybe return true
    return true;
  },
};

var objectProxy = new Proxy(object, simpleHandler);
