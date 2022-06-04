const canvas = document.getElementById("canvas1");
const ctx1 = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;
const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas.getContext("2d");
canvas2.width = 600;
canvas2.height = 600;

const canvas3 = document.getElementById("canvas3");
const ctx3 = canvas.getContext("2d");
canvas3.width = 600;
canvas3.height = 600;

const canvas4 = document.getElementById("canvas4");
const ctx4 = canvas.getContext("2d");
canvas4.width = 600;
canvas4.height = 600;

const canvas5 = document.getElementById("canvas5");
const ctx5 = canvas.getContext("2d");
canvas5.width = 600;
canvas5.height = 600;

//global variable
const grid = 80;
let keys = [];
let score = 0;
let collisionsCount = 0;
let frame = 0;
let gameSpeed = 1;

const particlesArray =[];
const maxParticles = 300;
const carsArray = [];

//images
const backgroundImage = new Image();
backgroundImage.src ='bg.png';



const collisions = new Image();
collisions.src = 'collisions.png';

const car = new Image();
car.src = 'carz.png';
let numberOfCars = 3;

const dodoSprite = new Image();
dodoSprite.src = 'dodo.png';

const scoreSound = new Audio();
scoreSound.src = "scream.mp3";

let movingSound = new Audio();
movingSound.src = "foot.mp3";