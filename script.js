let imageThumbs = document.getElementById("image-thumbs");
let currentImage = document.getElementById("current-image");

for (let i = 1; i <= 13; i++) {
  let thumb = document.createElement("img");
  thumb.src = "accets/image" + i + ".jpg";
  thumb.alt = "Image " + i;
  thumb.classList.add("thumb");
  imageThumbs.appendChild(thumb);
  thumb.addEventListener(
    "click", function() {
      currentImage.src = this.src;
    }
  );
}