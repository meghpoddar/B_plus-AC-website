
let w = window.innerWidth;
let h = window.innerHeight;
if (w < 576) {
  document.getElementById("mySidepanel").style.width = "0";
  document.getElementById("containerdiv").style.width = "100vw";
  document.getElementById("containerdiv").style.height = "100vh";
  document.getElementById("toggle-div").classList.remove("d-none");
  document.getElementById("mySidepanel1").classList.remove("d-none");
} else {
  document.getElementById("mySidepanel").style.width = "18vw";
  document.getElementById("containerdiv").style.width = "82vw";
  document.getElementById("containerdiv").style.height = "100vh";
  document.getElementById("toggle-div").classList.add("d-none");
  document.getElementById("mySidepanel1").classList.add("d-none");
}
let downiconelement = document.getElementById("downaboutUsicon");
let rightaboutUsicon = document.getElementById("rightaboutUsicon");
let aboutsUsdropdown = document.getElementById("AboutsUs-dropdown");
let rightPortfolioicon = document.getElementById("rightPortfolioicon");
let downPortfolioicon = document.getElementById("downPortfolioicon");
let portfoliodropdown = document.getElementById("portfolio-dropdown");

downiconelement.addEventListener('click', function(event) {
  downiconelement.classList.add("d-none");
  rightaboutUsicon.classList.remove("d-none");
  aboutsUsdropdown.classList.remove("d-none");
  portfoliodropdown.classList.add("d-none");
  rightPortfolioicon.classList.add("d-none");
  downPortfolioicon.classList.remove("d-none");
})
rightaboutUsicon.addEventListener('click', function(event) {
  downiconelement.classList.remove("d-none");
  rightaboutUsicon.classList.add("d-none");
  aboutsUsdropdown.classList.add("d-none");
  portfoliodropdown.classList.add("d-none");
  rightPortfolioicon.classList.add("d-none");
  downPortfolioicon.classList.remove("d-none");
})
downPortfolioicon.addEventListener('click', function(event) {
  downPortfolioicon.classList.add("d-none");
  rightPortfolioicon.classList.remove("d-none");
  portfoliodropdown.classList.remove("d-none");
  aboutsUsdropdown.classList.add("d-none");
  rightaboutUsicon.classList.add("d-none");
  downiconelement.classList.remove("d-none")
})
rightPortfolioicon.addEventListener('click', function(event) {
  downPortfolioicon.classList.remove("d-none");
  rightPortfolioicon.classList.add("d-none");
  portfoliodropdown.classList.add("d-none");
  aboutsUsdropdown.classList.add("d-none");
  rightaboutUsicon.classList.add("d-none");
  downiconelement.classList.remove("d-none")
})
let image1 = document.getElementById("image-1");
let image2 = document.getElementById("image-2");
let image3 = document.getElementById("image-3");
image2.addEventListener('click', function(event) {
  image1src = image1.src;
  image2src = image2.src;
  image1.src = image2src;
  image2.src = image1src;
})
image3.addEventListener('click', function(event) {
  image1src = image1.src;
  image3src = image3.src;
  image1.src = image3src;
  image3.src = image1src;

})

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
  document.getElementById("containerdiv").style.width = "100vw";
  document.getElementById("containerdiv").style.height = "100vh";
  document.getElementById("toggle-div").classList.remove("d-none");
}

function openNav() {
  document.getElementById("mySidepanel").style.width = "60vw";
  document.getElementById("containerdiv").style.width = "100vw";
  document.getElementById("containerdiv").style.height = "100vh";
  document.getElementById("toggle-div").classList.add("d-none");
}
