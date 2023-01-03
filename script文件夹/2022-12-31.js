console.log("hello");
let botton1 = document.getElementById("botton1");
botton1.addEventListener("click", myFunction);

let i = 0;
function myFunction() {
  let input1 = document.getElementById("input1").value.trim();
  if (input1 === "") {
    alert("输入无效");
  } else {
    const uls = document.getElementsByClassName("ul");
    if (i < uls.length) {
      uls[i].innerHTML = input1;
      i = i + 1;
    } else {
      alert("结束了");
    }
  }
}

let botton2 = document.getElementById("botton2");
botton2.addEventListener("click", myFunction2);
function myFunction2() {
  let input1 = document.getElementById("input1").value.trim();
  let newnode = document.createElement("li");
  let taxtnode = document.createTextNode(input1);
  newnode.appendChild(taxtnode);
  document.getElementById("myList").appendChild(newnode);
}
let botton3 = document.getElementById("botton3");
botton3.addEventListener("click", myMove);
let x = 0;
let pos1 = 0;
let pos2 = 0;
function myMove() {
  let elem = document.getElementById("div2");
  if (x == 0) {
    let id = setInterval(frame, 500);
    // function frame() {
    //   if (pos == 360) {
    //     clearInterval(id);
    //     x = 1;
    //     pos = 360;
    //   } else {
    //     pos++;
    //     elem.style.top = pos + "px";
    //     elem.style.left = pos + "px";
    //   }
    // }

    function frame() {
      if (pos1 > 350 || pos2 > 350) {
        clearInterval(id);
        console.log("pos=300");
        x = 1;
      } else {
        pos1 = Math.floor(Math.random() * 360);
        pos2 = Math.floor(Math.random() * 360);
        console.log(pos1 + "+" + pos2);
        elem.style.top = pos1 + "px";
        elem.style.left = pos2 + "px";
      }
    }
  }
  if (x == 1) {
    let id1 = setInterval(frame1, 5);
    function frame1() {
      if (pos1 == 0 || pos2 == 0) {
        clearInterval(id1);
        
        console.log("1");
        x = 0;
        pos1 = 0;
        pos2 = 0;
      } else {
        pos1--;
        pos2--;
        elem.style.top = pos1 + "px";
        elem.style.left = pos2 + "px";
      }
    }
  }
}
