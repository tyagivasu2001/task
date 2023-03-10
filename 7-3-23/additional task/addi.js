let source = document.getElementById("selectSource");
let destination = document.getElementById("selectDestination");

let sourceroute = new Map();
sourceroute.set("Delhi", ["Delhi"]);
sourceroute.set("Mumbai", ["Mumbai"]);
sourceroute.set("Banglore", ["Banglore"]);
sourceroute.set("Pune", ["Pune"]);
sourceroute.set("Noida", ["Noida"]);
let destinatinroute= new Map();
destinatinroute.set("Delhi", ["Delhi"]);
destinatinroute.set("Mumbai", ["Mumbai"]);
destinatinroute.set("Banglore", ["Banglore"]);
destinatinroute.set("Pune", ["Pune"]);
destinatinroute.set("Noida", ["Noida"]);


function src() {
  let destOptions = destination.options;
  let blockedDest = sourceroute.get(source.value);

  for (let i = 0; i < destOptions.length; i++) {
    destOptions[i].disabled = false;
  }

  for (let i = 1; i < destOptions.length; i++) {
    for (let j = 0; j < blockedDest.length; j++) {
      if (destOptions[i].value == blockedDest[j]) {
        destOptions[i].disabled = true;
      }
    }
  }
}

function desti() {
  let srcOptions = source.options;
  let blockedsrc = destinatinroute.get(destination.value);
  for (let i = 0; i < srcOptions.length; i++) {
    srcOptions[i].disabled = false;
  }

  for (let i = 1; i < srcOptions.length; i++) {
    for (let j = 0; j < blockedsrc.length; j++) {
      if (srcOptions[i].value == blockedsrc[j]) {
        srcOptions[i].disabled = true;
      }
    }
  }
}
function valid() {
  let newBlockedDest = sourceroute.get(source.value);
  newBlockedDest.push(destination.value);
  sourceroute.set(source.value, newBlockedDest);

  let newroutefordestination=destinatinroute.get(destination.value);
  newroutefordestination.push(source.value);
  destinatinroute.set(destination.value,newroutefordestination);

  let showRoutes = document.getElementById("routes");
  showRoutes.innerHTML += source.value + " to " + destination.value + "<br>";

  source.selectedIndex = 0;
  destination.selectedIndex = 0;
  let destOptions = destination.options;
  let srcOptions = source.options;
  for (let i = 0; i < srcOptions.length; i++) {
    srcOptions[i].disabled = false;
  }
  for (let i = 0; i < destOptions.length; i++) {
    destOptions[i].disabled = false;
  }
}
