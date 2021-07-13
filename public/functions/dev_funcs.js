window.onload = function () {
  let elems = document.querySelectorAll(".ndc-debug-element");
  console.log(elems);
  for (let i = 0; i < elems.length; i++) {
    let elem = elems[i];
    for (let prop in elem) {
      let val = elem[prop];
      console.log(`${prop} = ${val}`);
    }
  }
};
