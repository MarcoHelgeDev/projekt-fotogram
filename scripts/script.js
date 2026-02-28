const myImg = [
  "botondodler-cocker-spaniel.jpg",
  "fotoart-treu-falcke-stone.jpg",
  "gratzwolfgang-colorful-balloons.jpg",
  "michael_luenen-penguins.jpg",
  "timrael-gaming-computer.jpg",
  "mariya_m-salami-pizza.jpg",
  "mxwegele-forest.jpg",
  "tornanddrawn_sydney-skate-board.jpg",
  "magocarlosyo-back-to-the-future.jpg",
  "heimseiten_webdesignkoeln-dinosaur.jpg",
  "designdrawartes-sushi.jpg",
  "beba-aida.jpg",
];

const myImgUrl = [];
const dialogRef = document.querySelector(".js-dialog-gallery");

const fillMyImgUrl = () => {
  let imgUrl = "./assets/img/gallery/";
  for (let i = 0; i < myImg.length; i++) {
    myImgUrl[i] = imgUrl + myImg[i];
  }
};

const renderImgGallery = () => {
  let htmlContent = "";
  const myGalleryContent = document.querySelector(".js-gallery-wrapper");
  for (let i = 0; i < myImgUrl.length; i++) {
    htmlContent += /*html*/ `
      <button class="js-img-btn btn-as-img">
        <img onclick="openDialog()" src="${myImgUrl[i]}"/>
      </button>
    `;
  }
  myGalleryContent.innerHTML = htmlContent;
};


function openDialog() {
  dialogRef.showModal();
  dialogRef.classList.add("opened");
}

function closeDialog() {
  dialogRef.close();
  dialogRef.classList.remove("opened");
}

fillMyImgUrl();
