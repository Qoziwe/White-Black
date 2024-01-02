var a = 1;

const LS = localStorage;
let b = JSON.parse(localStorage.getItem("Player")) - 1;
const c = b;
document.getElementById("score").innerHTML = b;
document.getElementById("button").onclick = function () {
  b = JSON.parse(localStorage.getItem("Player"));
  const c = JSON.parse(localStorage.getItem("Player")) + 1;
  console.log(c);
  LS.setItem("Player", c);
  document.getElementById("score").innerHTML = b;

  a = a + 1;
  if (a % 2 == 0) {
    // console.log(a);
    // document.getElementById("score").style.color = "white";
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
    // document.getElementById("score").style.color = "black";
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

// if (LS.getItem("formData")) {
//   formData = JSON.parse(LS.getItem("formData"));
// console.log(formData);
// for (let key in formData) {
//   form.elements[key].value = formData[key];
// }
// }
