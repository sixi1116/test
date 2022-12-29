const imgs = document.querySelectorAll("#imgs>img");
const img = document.getElementById("img");
for (i = 0; i < imgs.length; i++) {
  console.log(imgs[i]);
  imgs[i].addEventListener("mouseover", function () {
    this.style.opacity = "1";
    img.src = this.src;
    img.style.display = "block";
    img.setAttribute
  });
  imgs[i].addEventListener("mouseout", function () {
    this.style.opacity = "0.5";
    // img.src=""
    img.removeAttribute("src");
    img.style.display = "none";
  });
}
var x = 0xFF;
console.log(x)