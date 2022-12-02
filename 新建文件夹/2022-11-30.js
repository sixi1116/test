window.onload = alert("hello"); //页面加载完成后，弹窗提示hello
document.write("world" + "<br>"); //将world写入到html文档（将scrip放在head下方时，world显示在了页面上方，将script放在body下方时，world显示在了标题和段落下方）
document.getElementById("para2").innerHTML = "new para"; //获取id为para2的元素，将内容替换为new para（之前由于script部分放在head出，提示错误，之后放在body处显示正常）
document.getElementById("para1").setAttribute("class", "txt"); //给id为para1的元素加上class="txt"
document.getElementById("para3").style.display = "none"; //隐藏id为para3的元素
document.getElementById("button2").addEventListener("click", function () {
  alert(Math.random());
}); //按钮点击之后弹窗一个随机0-1的小数
document.getElementById("button3").addEventListener("click", function () {
  alert(Math.floor(Math.random() * 10));
});
document.getElementById("para1").addEventListener("mousedown", function () {
  this.style.color = "#ff0000";
}); //点击鼠标
document.getElementById("para1").addEventListener("mouseup", function () {
  this.style.color = "#d0b0c3";
}); //移开鼠标
document.getElementById("para1").addEventListener("mouseover", function () {
  this.style.backgroundColor = "#dbd8ed";
}); //点击鼠标
document.getElementById("para1").addEventListener("mouseout", function () {
  this.style.backgroundColor = "#96c7d4";
}); //松开鼠标
document.getElementById("button4").addEventListener("click", function () {
  document.getElementById("para7").innerHTML = Date();
});
console.log("console.log"); //在控制台显示console.log

//数据类型
var aSrting = "hllo world";
var aNumber = 123.456;
var aBoolean = false;
var aNull = null;
var aUndefind;
//aSymbol
console.log(typeof aSrting); //string
console.log(typeof aNumber); //number
console.log(typeof aBoolean); //boolean
console.log(typeof aNull); //object
console.log(typeof aUndefind); //undefind

var aObject = { name: "john", age: 20 };
var aArray = [12, 43, 23, 67, 54];
var aFunction = function (a, b) {
  return a * b;
}; //函数表达式，将函数赋值给aFunction，console.log(aFunction(3,4));结果是12
//正则 RegExp
var aDate = Date(); //console.log(aDate) 结果是 Wed Nov 30 2022 12:34:26 GMT+0800 (中国标准时间)
console.log(typeof aObject); //object
console.log(typeof aArray); //object
console.log(typeof aFunction); //functiong
console.log(typeof aDate); //string

//数组遍历元素
for (var i = 0; i < aArray.length; i++) {
  document.write(aArray[i] + "<br>");
} //var aArray=[12,43,23,67,54]，结果为  12  43  23  67  54

//对象键值遍历
for (var i in aObject) {
  document.write(i + " :" + aObject[i] + "<br>");
} //var aObject={name:"john",age:20},结果为  name :john  age :20

//使用constructor属性查看对象是否为数组
function isArray(myArray) {
  return myArray.constructor.toString().indexOf("Array") > -1; //返回true或者false，.indexOf(" ")检查指定字符串在字符串中出现的问题，没有找到返回-1（>-1表示指定字符串有找到）
}
console.log(aArray.constructor.toString()); //返回function Array() { [native code] }
console.log(isArray(aArray)); //返回true

//数据转换
// String() 转换为字符串 或者是toString()
// Number() 转换为数字 非数字转换为NaN（不是数字的数字）

//点击按钮加1
var counter = 0; //全局变量，将变量声明在函数内将不能一直计数
function myFunction1() {
  return (counter = counter + 1);
}
function myFunction2() {
  document.getElementById("para4").innerHTML = myFunction1();
}

function myFunction3(a, b, c) {
  return arguments.length;
}
console.log(myFunction3(1, 4, 12)); //结果为3

//箭头函数
var x = (x, y) => x * y;
console.log(x(3, 5));

var aboutNumber = {
  //找最大值
  findMax() {
    var max = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
      if (arguments[i] > max) {
        max = arguments[i];
      }
    }
    return max;
  },
  //求和
  sumAll() {
    var sum = 0; //sum初始值需要设置为0
    for (var i = 0; i < arguments.length; i++) {
      sum = sum + arguments[i];
    }
    return sum;
  },
  //找最小值
  findMix() {
    var mix = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
      if (arguments[i] < mix) {
        mix = arguments[i];
      }
    }
    return mix;
  },
};
var manyNumber = [12, 43, 23, 67, 54]; //为什么不能以数组的形式来求值
console.log(aboutNumber.findMax(12, 43, 23, 67, 54)); //返回67
console.log(aboutNumber.sumAll(12, 43, 23, 67, 54)); //返回199
console.log(aboutNumber.findMix(12, 43, 23, 67, 54)); //返回12

console.log(2 + "2"); //22
console.log(2 + 2); //4
console.log("2" + "2"); //22

console.log(3 - "2"); //1
console.log(2 * "a"); //NaN
console.log(2 / "2"); //1

var newString = " zhEshi yigHenhAppyde gushi ";
var newString2 = "hello";
// 返回指定位置的字符
console.log(newString.charAt(5)); //h
// 返回指定位置字符的Unicode编码
console.log(newString.charCodeAt(5)); //104
// 连接两个字符串，并返回新的字符串
console.log(newString.concat(" " + newString2)); // zhEshi yigHenhAppyde gushi  hello
// 判断是否是以指定的字符结尾
console.log(newString.endsWith("i")); //false
// 判断是否是以指定的字符开头
console.log(newString.startsWith("h")); //false
// 返回某个字符串首次出现的问题
console.log(newString.indexOf("e")); //12
// 判断字符串是否包括指定的字符串
console.log(newString.includes("e")); //true
// 从后往前搜索字符串，从起始位置计算返回字符串最后出现的位置
console.log(newString.lastIndexOf(" ")); //27
// 重复字符串并连接在一起返回
console.log(newString.repeat(2)); // zhEshi yigHenhAppyde gushi  zhEshi yigHenhAppyde gushi
// 查找字符串并替换匹配的字符串（替换一次），没有找到字符串不变
console.log(newString.replace("shi", "Bushi")); // zhEBushi yigHenhAppyde gushi
// 找到字符串返回索引位置
console.log(newString.search(5)); //-1
console.log(newString.search("pp")); //16
// 不清楚怎么用
console.log(newString.slice("zheshi")); // zhEshi yigHenhAppyde gushi
// 把字符串分割为字符串数组，可以转换为字符串显示
console.log(newString.split(" ").toString()); // ,zhEshi,yigHenhAppyde,gushi,
// 提取字符串中两个指定的索引号之间的字符
console.log(newString.substring(2, 5)); //hEs
// 转小写
console.log(newString.toLowerCase()); // zheshi yighenhappyde gushi
// 转大写
console.log(newString.toUpperCase()); // ZHESHI YIGHENHAPPYDE GUSHI
// 去除字符串两侧的空格
console.log(newString.trim()); //zhEshi yigHenhAppyde gushi

//this
var person = {
  firstname: "jhon",
  lastname: "doe",

  fullname: function () {
    return this.firstname + this.lastname;
  },
};
console.log(person.fullname()); //jhondoe

//call
var person1 = {
  fullname: function () {
    return this.firstname + " " + this.lastname;
  },
};
var person2 = {
  firstname: "John",
  lastname: "Doe",
};
console.log(person1.fullname.call(person2)); //John Doe

document.getElementById("button5").addEventListener("click", function () {
  document.getElementById("para8").innerHTML = todayday();
});
function todayday() {
  var x;
  var d = new Date().getDay();
  switch (d) {
    case 6:
      x = "周六";
      break;
    case 0:
      x = "周日";
      break;
    default:
      x = "期待周末";
  }
  return x;
}

 

function showImg() {
  var myImg = document.getElementById("myimg2");
  // myImg.src="threeblur.jpg"
  if (myImg.src.includes("threeblur.jpg")) {
    //myImg.src.match("three.jpg")也可以
    myImg.src = "three.jpg";
  } else {
    myImg.src = "threeblur.jpg";
  }
}
