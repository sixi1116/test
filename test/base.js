console.log("hello world");
const button1 = document.getElementById("button1");
const para2 = document.getElementById("para2");
button1.innerHTML = "按钮";
button1.addEventListener("click", myFunction1);
let button = false;
function myFunction1() {
  if (button === false) {
    alert("出现");
    para2.innerHTML = "我出现了";
    para2.style.color = "#5522ee";
    button = true;
  } else {
    alert("消失");
    para2.innerHTML = " ";
    button = false;
  }
}
const para3 = document.getElementById("para3").innerHTML;
console.log(para3);
const button2 = document.getElementById("button2");
button2.addEventListener("click", myFunction2);
let para4 = document.getElementById("para4");
function myFunction2() {
  txt1 = prompt("输入");
  if (txt1 === "hello") {
    para4.innerHTML = txt1 + " world";
  } else {
    para4.innerHTML = "?";
  }
}
// console.log(numberCount.numberAll(23,45,65,43,76,423,786,34,56))
// function numberCount(num){
//   numberAll=function(num){
//     let sum=0;
//     for (let i=0;i<num.length;i++){
//       sum=sum+num[i];
//     } return sum;
//   }
// }

const element1 = document.getElementById("00");
element1.addEventListener("click", myFunction3);
function myFunction3() {
  alert("hello");
}
const element2 = document.getElementById("01");
element2.addEventListener("mousemove", myFunction4);
function myFunction4() {
  document.getElementById("01").innerHTML = "aa";
  element2.setAttribute("class", "drink");
}
const element3 = document.getElementById("10");
element3.addEventListener("click", myFunction5);
function myFunction5() {
  element3.setAttribute("class", "drink");
}

const element4 = document.getElementById("11");
// element4.addEventListener("mousedown",myFunction6)

const lable = document.querySelectorAll("label");

for (let i = 0; i < lable.length; i++) {
  console.log(lable[i].innerHTML);
}
