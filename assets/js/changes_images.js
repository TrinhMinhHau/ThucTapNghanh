var big_images = document.getElementById("big_images");
var small_images = document.getElementsByClassName("small-img");

small_images[0].onclick = function () {
  big_images.src = small_images[0].src;
};
small_images[1].onclick = function () {
  big_images.src = small_images[1].src;
};
small_images[2].onclick = function () {
  big_images.src = small_images[2].src;
};
