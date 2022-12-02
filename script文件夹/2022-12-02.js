// const para = document.getElementById("gamestart");
// const randomNumber = Math.floor(Math.random() * 101);
// para.addEventListener("click", inputNumber);
// // var number;
// var i = 0;
// function inputNumber() {
//   let number = prompt("输入你猜测的数字").trim();
//   if (number){
//   if (i < 10) {
//     i = i + 1;
//     if (Number(number) === randomNumber) {
//       alert(i + "次猜对了 " + "系统出的数字的" + randomNumber);
//     } else if (number < randomNumber) {
//       alert(i + "次输入的数字是 " + number + "猜小了");
//       return inputNumber();
//     } else if (number > randomNumber) {
//       alert(i + "次你输入的数字是 " + number + "猜大了");
//       return inputNumber();
//     }
//     return i;
//   } else {
//     alert("次数超过");
//   }
// }else{
//   return
// }
// }

// 1. 定义变量和函数

const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// 2. 纯文本字符串

// 3. 事件监听器和未完成的函数定义
randomize.addEventListener("click", result);
function result() {
  if (customName.value !== "") {
    var name = customName.value;
  }
  const inserta = ["怪兽威利", "大老爹", "圣诞老人"];
  a = Math.floor(Math.random() * 3);
  const insertb = ["肯德基", "迪士尼乐园", "白宫"];
  b = Math.floor(Math.random() * 3);
  const insertc = ["自燃了", "在人行道化成了一坨泥", "变成一条鼻涕虫爬走了"];
  c = Math.floor(Math.random() * 3);
  if (document.getElementById("american").checked) {
    var weight = Math.floor(Math.random() * 300) + 200 + "磅";
    var temperature = Math.floor(Math.random() * 50) + 50 + "华氏度,";
  } else {
    var weight = Math.floor(Math.random() * 300) + 200 + "公斤";
    var temperature = Math.floor(Math.random() * 50) + 50 + "摄氏度,";
  }
  story.textContent ="今天气温"+temperature +inserta[a] +"出去遛弯,当走到" +insertb[b] +
    "门前时,突然就" +
    insertc[c]+
  "。人们都惊呆了，" + name + "全程目睹但并没有慌，因为" + inserta[a]+
  "是一个" + weight+"的胖子，天气又辣么热";
  story.style.visibility = "visible";
}

// const para = document.querySelector('p');

// para.addEventListener('click', updateName);

// function updateName() {
//   let name = prompt('输入一个新的名字：');
//   para.textContent = '玩家 1：' + name;
// }

// document.addEventListener("DOMContentLoaded", function() {
//   function createParagraph() {
//     let para = document.createElement('p');
//     para.textContent = '你点击了这个按钮！';
//     document.body.appendChild(para);
//   }

//   const buttons = document.querySelectorAll('button');

//   for(let i = 0; i < buttons.length ; i++) {
//     buttons[i].addEventListener('click', createParagraph);
//   }
// });
