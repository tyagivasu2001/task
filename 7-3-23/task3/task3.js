function glow() {
  var image = document.getElementById("imgid");
  if (image.src.match(".//pic_bulboff.gif")) {
    image.src = ".//pic_bulbon.gif";
    document.getElementById("bulbstate").innerHTML = "OFF";
  } else {
    image.src = ".//pic_bulboff.gif";
    document.getElementById("bulbstate").innerHTML = "ON";
  }
}
