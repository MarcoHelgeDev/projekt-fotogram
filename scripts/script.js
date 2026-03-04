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

const myImgAlt = [
  "cocker-spaniel",
  "beach-falcke-stone",
  "colorful-heart-shape-balloons",
  "penguins",
  "gaming-computer",
  "salami-pizza",
  "forest",
  "skate-board",
  "car-back-to-the-future",
  "dinosaur-skeleton",
  "sushi",
  "aida",
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
  const myGalleryContent = document.querySelector(".js-gallery-wrapper");
  const htmlContent = renderTemplateGallery();
  myGalleryContent.innerHTML = htmlContent;
};

const renderTemplateGallery = () => {
  let htmlContent = "";
  for (let i = 0; i < myImgUrl.length; i++) {
    htmlContent += /*html*/ `
      <button
        aria-haspopup="dialog"
        aria-controls="gallery-dialog"
        type="button"
        class="js-img-btn btn-as-img"
        onclick="openDialog(${i})"
        aria-label="Bild ${i + 1} öffnen"
      >
        <img src="${myImgUrl[i]}" alt="${myImgAlt[i]}" />
      </button>
    `;
  }
  return htmlContent;
};

function openDialog(id) {
  imgId = id;
  dialogRef.showModal();
  updateImgDialog(imgId);
  updateDialogFooter(imgId);
  updateHeaderDialog(imgId);
  dialogRef.focus();
  dialogRef.classList.add("opened");
}

const updateHeaderDialog = (id) => {
  imgName = myImg[id].slice(0, -4);
  dialogHeaderTemplate(imgName);
};

const dialogHeaderTemplate = (imgName) => {
  const HeaderDialog = document.querySelector(".js-dialog-header");
  HeaderDialog.innerHTML = /*html*/ `
      <h2 id="picture-name">${imgName}</h2>
      <button aria-label="close-dialog" class="js-close-icon dialog-x-btn" onclick="closeDialog()"></button>
    `;
};

const updateImgDialog = (id) => {
  dialogImgTemplate(id);
};

const dialogImgTemplate = (id) => {
  const imgDialog = document.querySelector(".js-dialog-section");
  imgDialog.innerHTML = /*html*/ `
         <img src="${myImgUrl[id]}" alt="${myImgAlt[id]}"/>
    `;
};

const updateDialogFooter = (id) => {
  dialogFooterTemplate(id);
};

const dialogFooterTemplate = (id) => {
  const footerDialog = document.querySelector(".js-dialog-footer");
  footerDialog.innerHTML = /*html*/ `
      <button aria-label="previous-picture" class="js-button-left dialog-btn dialog-btn-left" onclick="prevImg(${id - 1})"></button>
        <span>${id + 1} / ${myImgUrl.length}</span>
      <button aria-label="next-picture" class="js-button-right dialog-btn dialog-btn-right" onclick="nextImg(${id + 1})"></button>
    `;
};

const nextImg = (id) => {
  if (id < myImgUrl.length) {
    openDialog(id);
  } else {
    id = 0;
    openDialog(id);
  }
};

const prevImg = (id) => {
  if (id >= 0) {
    openDialog(id);
  } else {
    id = myImgUrl.length;
    openDialog(id - 1);
  }
};

const closeDialog = () => {
  dialogRef.close();
  dialogRef.classList.remove("opened");
};

const setFocusOnTop = () => {
  const headlineRef = document.querySelector(".js-headline");
  headlineRef.focus();
};

const nextWithArrowKey = () => {
  dialogRef.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "ArrowLeft":
        prevImg(imgId - 1);
        break;
      case "ArrowRight":
        nextImg(imgId + 1);
        break;
      default:
        return;
    }
  });
};

const dialogEventListener = () => {
  dialogRef.addEventListener("cancel", (event) => {
    closeDialog();
    setFocusOnTop();
    document.activeElement.blur();
  });
};

const documentEventListener = () => {
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;

    if (dialogRef.open) {
      closeDialog();
      setFocusOnTop();

      document.activeElement.blur();
    } else {
      setFocusOnTop();
      document.activeElement.blur();
    }
  });
};

const init = () => {
  dialogEventListener();
  documentEventListener();
  fillMyImgUrl();
  nextWithArrowKey();
};

init();
