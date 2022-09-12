// Image
const mainImg =document.getElementById("mainImg")
const mainImgbig =document.getElementById("mainImgbig")
const thumb1 =document.getElementById("thumb1")
const thumb1Src =document.getElementById("thumb1").src
const thumb2 =document.getElementById("thumb2")
const thumb2Src =document.getElementById("thumb2").src
const thumb3 =document.getElementById("thumb3")
const thumb3Src =document.getElementById("thumb3").src
const thumb4 =document.getElementById("thumb4")
const thumb4Src =document.getElementById("thumb4").src

thumb1.addEventListener("click",function(){
    mainImg.src=thumb1Src;
    mainImgbig.src=mainImg.src;
    thumb1.style.border="1px solid #FFB600"
})
thumb2.addEventListener("click",function(){
    mainImg.src=thumb2Src;
    mainImgbig.src=mainImg.src;
    thumb2.style.border="1px solid #FFB600"
})
thumb3.addEventListener("click",function(){
    mainImg.src=thumb3Src;
    mainImgbig.src=mainImg.src;
    thumb3.style.border="1px solid #FFB600"
})
thumb4.addEventListener("click",function(){
    mainImg.src=thumb4Src;
    mainImgbig.src=mainImg.src;
    thumb4.style.border="1px solid #FFB600"
})

// star
const ratingStars = [...document.getElementsByClassName("rating__star")];

function executeRating(stars) {
  const starClassActive = "rating__star fas fa-star";
  const starClassInactive = "rating__star far fa-star";
  const starsLength = stars.length;
  let i;
  stars.map((star) => {
    star.onclick = () => {
      i = stars.indexOf(star);

      if (star.className===starClassInactive) {
        for (i; i >= 0; --i) stars[i].className = starClassActive;
      } else {
        for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
      }
    };
  });
}
executeRating(ratingStars);


// counter
const min =document.querySelector(".min")
const max =document.querySelector(".max")
const num =document.querySelector(".num")
let a = 1;
max.addEventListener('click',()=>{
    a++;
    num.innerText = a;
    console.log(a);
})
min.addEventListener('click',()=>{
    a--;
    a = (a > 0 ) ? num.innerText = a : a = 0;
    console.log(a);
})

//preload
const preload = document.querySelector(".preloder")
window.addEventListener("load",function(){
    preload.style.display="none";
})

//pack_button
var header= document.getElementById("packBtn")
var btns = header.getElementsByClassName("btnP");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

//pack_button
var worhead= document.getElementById("wor_cont")
var warBtn = worhead.getElementsByClassName("worr_btn");
for (var i = 0; i < warBtn.length; i++) {
  warBtn[i].addEventListener("click", function() {
  var current2 = document.getElementsByClassName("worActive");
  current2[0].className = current2[0].className.replace(" worActive", "");
  this.className += " worActive";
  });
}