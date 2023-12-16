var a = 1;
document.getElementById("button").onclick = function () {
  a = a + 1;
  if (a % 2 == 0) {
    console.log(a);
    document.getElementById("button").style.backgroundColor =
      "rgb(233, 233, 233)";
    document.getElementById("bt-in").style.backgroundColor = "rgb(58, 58, 58)";
    document.getElementById("bt-in").style.marginLeft = "56%";
    document.getElementById("experimental-zone").style.backgroundColor =
      "rgb(49, 49, 49)";
    document.getElementById("bt-in").innerHTML = "Black";
    document.getElementById("bt-in").style.color = "white";

    document.getElementById("audio").currentTime = "0";
    document.getElementById("audio").play();

    // document.getElementById("audio").play();
    // document.getElementById("audio2").pause();
  } else {
    a = 1;
    document.getElementById("button").style.backgroundColor = "rgb(58, 58, 58)";
    document.getElementById("bt-in").style.backgroundColor =
      "rgb(233, 233, 233)";
    document.getElementById("bt-in").style.marginLeft = "";
    document.getElementById("experimental-zone").style.backgroundColor =
      "rgb(209, 209, 209)";
    document.getElementById("bt-in").innerHTML = "White";
    document.getElementById("bt-in").style.color = "black";

    document.getElementById("audio").currentTime = "0";
    document.getElementById("audio").play();

    // document.getElementById("audio2").play();
    // document.getElementById("audio").pause();
  }
};
