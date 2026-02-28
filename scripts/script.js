const myImgs = ['artisticoperations-giraffe.jpg',
  'botondodler-cocker-spaniel.jpg',
  'fotoart-treu-falcke-stone.jpg',
  'gratzwolfgang-colorful-balloons.jpg',
  'michael_luenen-penguins.jpg',
  'timrael-gaming-computer.jpg',
  'mariya_m-salami-pizza.jpg',
  'mwitt1337-ghost-busters.jpg',
  'mxwegele-forest.jpg',
  'tornanddrawn_sydney-skate-board.jpg',
  'magocarlosyo-back-to-the-future.jpg',
  'heimseiten_webdesignkoeln-dinosaur.jpg',
  'jonathanvalencia5-street-food-barbecue.jpg',
  'designdrawartes-sushi.jpg',
  'beba-aida.jpg',
];

const myImgsLinks = [];

const dialogRef = document.querySelector('.js-dialog-gallery');

function openDialog() {
  dialogRef.showModal();
  dialogRef.classList.add("opened");
}

function closeDialog() {
  dialogRef.close();
  dialogRef.classList.remove("opened");
}
