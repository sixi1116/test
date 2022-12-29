// const td = document.querySelectorAll("td");
// for (i = 0; i < td.length; i++) {
//   console.log(td[i].innerHTML);
// }

const button1 = document.getElementById("button1");
button1.addEventListener("click", myFunction1);

function myFunction1() {
  const input1 = document.getElementById("input1");
  inputValue = input1.value;
  console.log(inputValue);
  if (toString(inputValue) === "a0") {
    document.getElementById("a0").style.color = "rgba(115,217,165,0.8)";
    alert("击中");
  } else {
    document.getElementById("a0").style.color = "rgba(115,217,165,0.8)";
    alert("重来");
  }
}
// function ramColor() {
//   const r = Math.floor(Math.random() * 255);
//   const g = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);
//   var ramcolor = "rgba(" + r + "," + g + "," + b + ",0.8)";
//   return ramcolor;
// }
const element2 = document.querySelectorAll("#div4 td");
for (let i = 0; i < element2.length; i++) {
  element2[i].addEventListener("click", function () {
    this.setAttribute("class", "hit");
  });
}
// const hit=document.getElementsByClassName("hit")
// for(let i=0;i<hit.length;i++){
//     console.log(hit[i])
// }

