// Slide hình sản phẩm
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//Hàm tính tiền sản phẩm
function tinhtien(){
  var x = document.getElementById('number').value;
  var tongtien = x*19500000;
  tongtien = tongtien.toLocaleString('en');
  document.getElementById("tongtien").innerHTML = tongtien+' đ'; 
  }

  //Hàm thanh toán
