var d = new Date();
var h = d.getHours();
if (h >= 16) {
  document.body.className = "darkmode";
  let images = document.getElementsByClassName("blogImgContainer");
  for (let i = 0; i < images.length; i++) {
    images[i].classList.add("darkBlogImgContainer");
  }
}
