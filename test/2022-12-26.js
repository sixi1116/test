var frequency = 0;

const testsIds = [];
const testsId = document.querySelectorAll("td");
for (let i = 0; i < testsId.length; i++) {
  testsIds.push(testsId[i].id);
}
const testsIdsString = testsIds.join(",");
const place1 = testsId[Math.floor(Math.random() * testsId.length)].id;
const place2 = testsId[Math.floor(Math.random() * testsId.length)].id;
const place3 = testsId[Math.floor(Math.random() * testsId.length)].id;
const place = [place1, place2, place3].join(",");
console.log(place);
function randomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  // console.log(r,g,b)
  return "rgba(" + r + "," + g + "," + b + ",0.5" + ")";
}
// const test=document.getElementById("00")
// test.addEventListener("click",myFunction1)
// function myFunction1(){
//     test.style.backgroundColor=randomColor()
//     // console.log(randomColor())
// }
const tests = document.getElementsByTagName("td");
for (let i = 0; i < tests.length; i++) {
  tests[i].addEventListener("click",function() {
    frequency = frequency + 1;
    console.log(frequency);
    if (frequency <= 5) {
    } else {
      alert("结束了");
      return
    }
    tests[i].style.backgroundColor = randomColor();
    if (!place.includes(tests[i].id)) {
      if (tests[i].innerHTML.length > 1) {
        this.innerHTML = "x";
      } else {
        this.innerHTML = tests[i].id;
      }
      // console.log(randomColor());
    } else {
      alert("hello");
      this.innerHTML = "hello";
      this.style.backgroundColor = "red";
      frequency = 0;
    }
    return frequency;
  })
}
const button1 = document.getElementById("button1");
// var idsArray=[]
button1.addEventListener("click", myFunction1);
function myFunction1() {
  const input1 = document.getElementById("input1").value;
  frequency = frequency + 1;
  console.log(frequency);
  if (frequency <= 5) {
  } else {
    alert("结束了");
    return
  }
  if (place.includes(input1) & (input1 !== "")) {
    alert("hello");
    document.getElementById(input1).innerHTML = "hello";
    document.getElementById(input1).style.backgroundColor = "red";
    frequency = 0;
  } else {
    if ((testsIdsString.includes(input1) > 0) & (input1.length === 2)) {
      document.getElementById(input1).style.backgroundColor = randomColor();
      //   setTimeout(function () {
      //     document.getElementById(input1).style.backgroundColor = "";
      //   }, 2000);
    } else {
      alert("坐标有误");
    }
  }
  return frequency;
}
window.onload = function () {
  setInterval(function () {
    document.getElementById("input1").style.backgroundColor = randomColor();
  }, 3000);
};
console.log(frequency);


