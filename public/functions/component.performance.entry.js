function print_PerformanceEntries() {
  var p = performance.getEntries();
  for (var i = 0; i < p.length; i++) {
    console.log("PerformanceEntry[" + i + "]");
    print_performanceEntry(p[i]);
  }
}

function print_Records(p) {
   // var p = performance.getEntries();
    for (var i = 0; i < p.length; i++) {
      console.log("PerformanceEntry[" + i + "]");
      print_performanceEntry(p[i]);
    }
  }

function print_PerformanceEntry(entry) {
  var props = ["name", "entryType", "startTime", "duration"];
  for (var i = 0; i < props.length; i++) {
    var supported = properties[i] in entry;
    if (supported) {
      var value = entry[props[i]];
      console.log("... " + props[i] + " = " + value);
    } else {
      console.log("... " + props[i] + " not supported");
    }
  }
}

var optionsEntryTypes = (function(){
    let optionsArray = [
        "mark",
        "measure",
        "navigation",
        "resource",
        "longtask",
        "paint",
        "element",
        "event",
        "first-input",
        "layout-shift",
        "largest-contentful-paint",
      ];
  let optionsObj = {    
  mark: false,
  measure: false,
  navigation: false,
  resource: false,
  longtask: false,
  paint: false,
  element: false,
  event: false,
  "first-input": false,
  "layout-shift": false,
  "largest-contentful-paint": false
  }
  return{
      setAll: function(){
          mark = true;
          measure = true;
          navigation = true;
          resource = true;
          longtask = true;
          paint = true;
          element = true;
          event = true;
          "first-input" = true;
          "layout-shift" = true;
          "largest-contentful-paint" = true;
          return options;
      }
  }
})();

function observer_cb(list, observer) {
  // todo
}
var observer = new PerformanceObserver(observer_cb);
observer.observe({ entryTypes: ["measure","navigation"] });

document.addEventListener("DOMContentLoaded", function(){
    let results = observer.takeRecords();
    print_Records(results);
})