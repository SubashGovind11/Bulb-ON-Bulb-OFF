function changeImage() {
  var pic = document.getElementById("bulb");
  if (pic.src.match("on")) {
    console.log("ON");
    pic.src = "bulboff.jpg";
  } else {
    console.log("off");
    pic.src = "bulb on.jpg";
  }
}
