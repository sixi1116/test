const button = document.querySelector("button");
button.addEventListener("click", myFunction);
function myFunction() {
  let a;

  const numBer1 = Math.floor(Math.random() * 5) + 1;
  const numBer2 = numBer1 + 1;
  const numBer3 = numBer1 + 2;
  const numBer = [numBer1, numBer2, numBer3];
  const useInput = prompt("请输入猜测的数字");
  var b = 3;
  if (b > 0) {
    for (let i = 0; i < numBer.length; i++) {
      if (Number(useInput) === numBer[i]) {
        alert("猜中了");
        numBer.splice(index, i);
        a = a + 1;
        b = b - 1;
        myFunction();
      } else {
        alert("猜错了");
        b = b - 1;
        myFunction();
      }
    }
  } else {
    alert("三次机会用完");
  }
}
