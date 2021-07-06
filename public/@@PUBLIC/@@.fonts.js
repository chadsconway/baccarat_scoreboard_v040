import { DomManipulate } from "./@@.domready.js";

var el = {};
var debug = true;

window.onload = function () {
  let placeholder = document.querySelector(".placeholder");
  placeholder.addEventListener("click", function (Event) {
    placeholder.classList.add("hide");
    Event.preventDefault();
    buildFontSelector();
  });
};

function buildFontSelector() {
  let ul = document.querySelector(".ndc-font-list__ul");
  ul.classList.remove("hide");

  let fontClasses = [
    "ndc-font-hobeaux",
    "ndc-font-hobeaux-cocoeaux-sherman",
    "ndc-font-Filson-Pro-Bold",
    "ndc-font-Filson-Pro-Bold-I",
    "ndc-font-Filson-Pro-Regular",
    "ndc-font-Filson-Pro-Regular-I",
    "ndc-font-Filson-Soft-Bold",
    "ndc-font-Filson-Soft-Regular-I",
    "ndc-font-Filson-Soft-Bold-I",
    "ndc-font-Filson-Soft-Regular",
    "ndc-font-condor--Italic",
    "ndc-font-condor--Regular",
    "ndc-font-condor--Bold",
    "ndc-font-condor--Bold-Italic",
    "ndc-font-condor-Comp-Regular",
    "ndc-font-condor-Comp-Italic",
    "ndc-font-condor-Comp-Bold",
    "ndc-font-condor-Comp-Bold",
    "ndc-font-condor-Cond-Regular",
    "ndc-font-condor-Cond-Italic",
    "ndc-font-condor-Cond-Bold-Italic",
    "ndc-font-condor-Cond-Bold",
    "ndc-font-condor-Extd-Regular",
    "ndc-font-condor-Extd-Italic",
    "ndc-font-condor-Extd-Bold-Italic",
    "ndc-font-condor-Extd-Bold",
    "ndc-font-condor-Wide-Regular",
    "ndc-font-condor-Wide-Italic",
    "ndc-font-condor-Wide-Bold",
    "ndc-font-condor-Wide-Bold-Italic",
    "ndc-font-coquette-regular",
    "ndc-font-coquette-bold",
  ];
  fontClasses.forEach(function (val, ind, arr) {
    let template = document.querySelector(".template-ndc-font-list");
    let listItem = template.content.firstElementChild.cloneNode(true);
    let fontname = val.slice(9);
    listItem.dataset.ndcIndex = ind;
    if (debug) {
      console.log("val = " + val);
      console.log("ul = " + ul);
      console.log("fontname = " + fontname);
      console.log("typeof listItem = " + typeof listItem);
      console.log("listItem = " + listItem);
      console.log("ndcIndex = " + listItem.dataset.ndcIndex);
    }

    listItem.innerHTML = fontname;
    listItem.classList.add(val);
    ul.appendChild(listItem);
  });
  ul.addEventListener("click", function (Event) {
    if (debug) {
      console.log(Event.explicitOriginalTarget.dataset.ndcIndex);
    }
    let fontClass = fontClasses[Event.explicitOriginalTarget.dataset.ndcIndex];
    ul.classList.add("hide");
    if (debug) {
      console.log("typeof fontClass = " + typeof fontClass);
    }
    let placeholder = document.querySelector(".placeholder");
    let fontname = fontClass.slice(9);
    placeholder.innerHTML = fontname;
    placeholder.classList.remove("hide");
    placeholder.classList.add(fontClass);
  });
}

function handleFontListClick(fontclass) {
  if (debug) {
    console.log("clicked on fontclass = " + fontclass);
  }
  document.body.classList.add(fontclass);
  document.querySelector(".ndc-wrapper").classList.add(fontclass);
}

/**
$(".placeholder").text($(this).text()).css("opacity", "1");

$("select").on("change", function (e) {
  $(".placeholder").text(this.value);

  // Animate select width as placeholder
  $(this).animate({ width: $(".placeholder").width() + "px" });
});
*/
