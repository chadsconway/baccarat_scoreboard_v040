window.onload = function () {
  let devbutton = document.querySelector("#elemtodisplay");

  function displayProps() {
    let elem = document.getElementById("elemtodisplay");
    console.log(elem);
    let rect = document.createElement("rect");
    for (let prop in rect) {
      let val = rect[prop];
      console.log(`${prop} = ${val}`);
    }
  }
};
