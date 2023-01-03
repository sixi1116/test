let submit = document.getElementById("submit");
submit.addEventListener("click", myFunction1);
let button = document.getElementById("button");
let reset = document.getElementById("reset");
reset.style.display = "none";
function myFunction1() {
  let name1 = document.getElementById("name").value.trim();
  let compensation = document.getElementById("compensation").value;
  let age = document.getElementById("age").value;
  if (name1 == "" || compensation == "") {
    alert("姓名和薪资为必填");
  } else {
    let list = document.createElement("li");
    let listtext = document.createTextNode(
      name1 + " " + compensation + " " + age
    );
    list.appendChild(listtext);
    if (compensation >= 20000) {
      document.getElementById("para1list").appendChild(list);
      list.style.display = "none";
    } else {
      document.getElementById("para2list").appendChild(list);
      list.style.display = "none";
    }
    let table = document.getElementById("table");
    table.innerHTML +=
      "<tr><td>" +
      name1 +
      "</td><td>" +
      compensation +
      "</td><td>" +
      age +
      "</td></tr>";
  }
  reset.click();
}
button.addEventListener("click", myFunction2);
function myFunction2() {
    let liList = document.getElementsByTagName("li");
    for (let i = 0; i < liList.length; i++) {
      liList[i].style.display = "block";
    }
}

