var DomManipulate = function (selector) {
  document.addEventListener("DOMContentLoaded", () => {
    this.element = document.querySelector(selector);

    if (typeof this.callback === "function") this.callback();
  });
};

//HERE WE HAVE CALLBACK WHEN OUR MODULE CAN BE USED
DomManipulate.prototype.onReady = function (callback) {
  this.callback = callback;
};

DomManipulate.prototype.getElement = function () {
  //example object method

  return this.element;
};

DomManipulate.prototype.write = function (text) {
  return (this.element.innerText = text);
};

export { DomManipulate };
