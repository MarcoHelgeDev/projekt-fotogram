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
let imgId = 0;


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
        <img onclick="openDialog(${i})" src="${myImgUrl[i]}"/>
      </button>
    `;
  }
  myGalleryContent.innerHTML = htmlContent;
};

const renderDialogContent = () => {

}

function openDialog(id) {
  imgId = id;  
  dialogRef.showModal();
  updateImgDialog(imgId)
  updateDialogFooter(imgId)

  dialogRef.classList.add("opened");
}

const updateImgDialog = (id) => {
  const imgDialog = document.querySelector('.js-dialog-section');
  imgDialog.innerHTML = /*html*/ `
         <img src="${myImgUrl[id]}"/>
    `;
}

const updateDialogFooter = (id) => {
   const footerDialog = document.querySelector('.js-dialog-footer');
    footerDialog.innerHTML = /*html*/ `
      <button class="dialog-btn dialog-btn-left" onclick="prevImg(${id-1})"></button>
        <span>${id+1} / ${myImgUrl.length}</span>
      <button class="dialog-btn dialog-btn-right" onclick="nextImg(${id+1})"></button>
    `;
}

const nextImg = (id) => {
  if(id < myImgUrl.length){
    openDialog(id)
  } else {
    id = 0;
    openDialog(id)
  }
}

const prevImg = (id) => {
  if(id >= 0){
    openDialog(id)
  } else {
    id = myImgUrl.length;
    openDialog(id-1)
  }
}

function closeDialog() {
  dialogRef.close();
  dialogRef.classList.remove("opened");
}

fillMyImgUrl();
