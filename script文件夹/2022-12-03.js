// let listPersons = [
//   "薛蟠     4560 25",
//   "薛宝钗   35776 23",
//   "薛宝琴   14346 18",
//   "王熙凤   24460 25",
//   "王子腾   55660 45",
//   "王仁     15034 65",
// ];
// let persons = [];
// let money
// for (let i = 0; i < listPersons.length; i++) {
//   var listPerson = listPersons[i];
//   persons.push(listPerson);
// }
// stringa=persons.splice(",")
// console.log(stringa)
// // console.log(typeof(persons))
// // let first = persons.indexOf(" ");
// // let last = persons.lastIndexOf(" ");
// let person = document.getElementById("person");
// document.getElementById("list").innerHTML = stringa

// var select = document.querySelector("select");
// var html = document.querySelector(".output");
// select.onchange = function () {
//   var choice = select.value;
//   switch (choice) {
//     case "White":
//       update("black", "white");
//       break;
//     case "Black":
//       update("white", "black");
//       break;
//     case "Purple":
//       update("psychedelic", "white");
//       break;
//     case "Yellow":
//       update("psychedelic", "yellow");
//       break;
//     case "Psychedelic":
//       update("white", "psychedelic");
//       break;
//   }
// };
// function update(bgColor, textColor) {
//   html.style.backgroundColor = bgColor;
//   html.style.color = textColor;
// }

// var output = document.querySelector(".output");
// output.innerHTML = "";
// var i = 10;
// while (i >= 0) {
//   var para = document.createElement("p");
//   if (i === 0) {
//     para.textContent = "Blast off!" + i;
//   } else if (i === 10) {
//     para.textContent = "Countdown 10" + i;
//   } else {
//     para.textContent = i;
//   }
//   output.appendChild(para);
//   i--;
// }

var people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

var admitted = document.querySelector(".admitted");
var refused = document.querySelector(".refused");
admitted.textContent = "Admit: ";
refused.textContent = "Refuse: ";
var i = 0;
while (i < people.length) {
  i++;
  if (people[i] === "Phil" || people[i] === "Lola") {
    refused.textContent = "Refuse: " + people[i];
    continue;
  } else {
    admitted.textContent = "Admit: " + people[i];
    continue;
  }
}

// refused.textContent += ;
// admitted.textContent += ;
