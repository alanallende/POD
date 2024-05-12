let colorFondo
let picker
let picker2
let colorLetra
let slider
let selector
let eleccion
let checkbox
let checkbox2
let rectangulos = [];
let rectangulos2 = [];
let totalRectangulos;
let rectangulosGenerados = 0;
let timer = 1;
let tiempo = 5;
let mostrarAbecedario = true;
let x
let y
let s 
let sH = 0.8
let texto = ""
let myInput
let anchoLetra = 85; // Valor inicial para el ancho de cada letra
let espacioEntreLetras = 10; // Espacio entre las letras
const RECTANGLE_WIDTH = 10;//ancho rectangulos
const RECTANGLE_HEIGHT = 40;//altor rectangulos
let italica 
let italica2 
function setup() {
  // Código inicial. Se ejecuta una sola vez
createCanvas(2200, 2200)
angleMode(DEGREES)
fill(100)
myInput = createInput("")
myInput.position(800, 550)
myInput.addClass('myInput')
noStroke()

//Cajitas de color
checkbox = createCheckbox();
checkbox.position(1500,200)
checkbox2 = createCheckbox();
checkbox2.position(1500,250)

//SELECTOR DE COLOR FONDO
picker = createColorPicker("#00384C")
picker.position(50,130)

//SELECTOR DE COLOR LETRA
picker2 = createColorPicker("#59FFDE")
picker2.position(50,250)


//SLIDER
slider = createSlider(0,1500,0)
slider.position(40,380)
}

function draw() {
  // Se ejecuta después de setup continuamente

  //Generar rectángulos al principio
totalRectangulos = 1500; // 
generarRectangulos(); //TODOS los rectangulos del principio

texto = myInput.value()
colorFondo = picker.value()
background(colorFondo)
colorLetra = picker2.value()

//Rectángulo random
push()
strokeWeight(40)
stroke(20)
noFill()
rect(200, 650, 1500, 700)
pop()

//Opciones con checkbox
if (checkbox.checked()){
  italica = -10
} else {
  italica = 0
}
if (checkbox2.checked()){
  italica2 = 10
} else {
  italica2 = 0
}
//Palabra GLITCH
palabraGlitch();
// Dibujar abecedario si mostrarAbecedario es true
if (mostrarAbecedario) {
abecedario();
} else
abecedario2();
  
//TEXTOS
push()
textFont('poppins');
fill("#59FFDE")
textSize(25)
text("Color de fondo", 50, 100)
text("Color tipografía", 50, 220)
text("Efecto Glitch", 50,350)
textStyle(BOLD);
text("Escriba su texto",860,530)
text("Itálica",1550,216)
text("Inclinado",1550,266)
pop()

//TEMPORIZADOR
if (frameCount % 60 == 0 && tiempo > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
  tiempo --;
} else if (tiempo == 0) {
// cuando el tiempo llega a cero, dejar de mostrar el abecedario
mostrarAbecedario = false;
}

//EL efecto
  efectoGlitch()
//GENERAR TEXTO 
printText(250, 700, 0.4, texto, italica, italica2)

//Animación del inicio
push()
animInicio()
mouseMoved() //Cursor moviendo
mousePressed() //Cursor click
pop()

}
function palabraGlitch(){
  push()
  translate(400,50)
  letraG(200,100,1,italica,italica2);
  letraL(400,100,1,italica,italica2);
  letraI(470,112,1,italica,italica2);
  letraT(540,110,1,italica,italica2);
  letraC(650,110,1,italica,italica2);
  letraH(830,130,1.8,italica,italica2);
  pop()
}
function abecedario(){
//DIBUJAR ABECEDARIO
push()
translate(170,770)
scale (0.8);
letraA(200,141,0.6, italica, italica2)
letraB(340,140,0.6,italica, italica2)
letraC(470,140,0.6,italica, italica2)
letraD(590,130,0.6,italica, italica2)
letraE(710,140,0.6,italica, italica2)
letraF(820,145,0.6,italica, italica2)
letraG(910,140,0.6,italica, italica2)
letraH(1040,158,1,italica, italica2); 
letraI(1155,142,0.6,italica, italica2)
letraJ(1200,140,0.6,italica, italica2)
letraK(1340,140,0.6,italica, italica2)
letraL(1450,135,0.6,italica, italica2)
letraM(1500,142,0.6,italica, italica2)
letraN(1665,142,0.6,italica, italica2)
letraO(240,342,0.6,italica, italica2)
letraP(360,342,0.6,italica, italica2)
letraQ(480,342,0.6,italica, italica2)
letraR(610,342,0.6,italica, italica2)
letraS(700,338,0.6,italica, italica2)
letraT(810,342,0.6,italica, italica2)
letraU(900,342,0.6,italica, italica2)
letraV(1020,345,0.6,italica, italica2)
letraW(1160,345,0.6,italica, italica2)
letraX(1320,342,0.6,italica, italica2)
letraY(1460,342,0.6,italica, italica2)
letraZ(1580,342,0.6,italica, italica2)
pop()
}
function abecedario2(){
  push()
scale(0.8)
translate(170,1700)
letraA(200,141,0.6, italica, italica2)
letraB(340,140,0.6,italica, italica2)
letraC(470,140,0.6,italica, italica2)
letraD(590,130,0.6,italica, italica2)
letraE(710,140,0.6,italica, italica2)
letraF(820,145,0.6,italica, italica2)
letraG(910,140,0.6,italica, italica2)
letraH(1040,158,1,italica, italica2); 
letraI(1155,142,0.6,italica, italica2)
letraJ(1200,140,0.6,italica, italica2)
letraK(1340,140,0.6,italica, italica2)
letraL(1450,135,0.6,italica, italica2)
letraM(1500,142,0.6,italica, italica2)
letraN(1665,142,0.6,italica, italica2)
letraO(240,342,0.6,italica, italica2)
letraP(360,342,0.6,italica, italica2)
letraQ(480,342,0.6,italica, italica2)
letraR(610,342,0.6,italica, italica2)
letraS(700,338,0.6,italica, italica2)
letraT(810,342,0.6,italica, italica2)
letraU(900,342,0.6,italica, italica2)
letraV(1020,345,0.6,italica, italica2)
letraW(1160,345,0.6,italica, italica2)
letraX(1320,342,0.6,italica, italica2)
letraY(1460,342,0.6,italica, italica2)
letraZ(1580,342,0.6,italica, italica2)
pop()
}
function printText(x,y,s,texto,italica,italica2){
  let interlineado = 150
  espacioEntreLetras = 10; // Restablece el espacio entre las letras
  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i].toUpperCase();
    let anchoActual = obtenerAnchoLetra(letra);
    let anchoReal = anchoActual * s;
    if (i > 0) {
      x += espacioEntreLetras; // Aplica el espacio entre letras después de la primera letra
    }
 // Verificar si la siguiente letra excede el ancho del lienzo
 if (x + anchoReal > 1680) {
  // Cambiar a la siguiente línea
  x = 250; // Volver al principio del lienzo en el eje x
  y += interlineado; // Incrementar la posición de y para la siguiente línea
}
    if (x < windowWidth && y < 1200) {
      if (letra == 'A') { 
        letraA(x, y, s, italica,italica2);
      } else if (letra == 'B') {
        letraB(x, y, s, italica,italica2);
      } else if (letra == 'C') {
        letraC(x, y, s, italica,italica2);
      } else if (letra == 'D') {
        letraD(x, y, s, italica,italica2);
      } else if (letra == 'E') {
        letraE(x, y, s, italica,italica2);
      } else if (letra == 'F') {
        letraF(x, y, s, italica,italica2);
      } else if (letra == 'G') {
        letraG(x, y, s, italica,italica2);
      } else if (letra == 'H') {
        letraH(x, y, sH, italica,italica2);
      } else if (letra == 'I') {
        letraI(x, y, s, italica,italica2);
      } else if (letra == 'J') {
        letraJ(x, y, s, italica,italica2);
      } else if (letra == 'K') {
        letraK(x, y, s, italica,italica2);
      } else if (letra == 'L') {
        letraL(x, y, s, italica,italica2);
      } else if (letra == 'M') {
        letraM(x, y, s, italica,italica2);
      } else if (letra == 'N') {
        letraN(x, y, s, italica,italica2);
      } else if (letra == 'O') {
        letraO(x, y, s, italica,italica2);
      } else if (letra == 'P') {
        letraP(x, y, s, italica,italica2);
      } else if (letra == 'Q') {
        letraQ(x, y, s, italica,italica2);
      } else if (letra == 'R') {
        letraR(x, y, s, italica,italica2);
      } else if (letra == 'S') {
        letraS(x, y, s, italica,italica2);
      } else if (letra == 'T') {
        letraT(x, y, s, italica,italica2);
      } else if (letra == 'U') {
        letraU(x, y, s, italica,italica2);
      } else if (letra == 'V') {
        letraV(x, y, s, italica,italica2);
      } else if (letra == 'W') {
        letraW(x, y, s, italica,italica2);
      } else if (letra == 'X') {
        letraX(x, y, s, italica,italica2);
      } else if (letra == 'Y') {
        letraY(x, y, s, italica,italica2);
      } else if (letra == 'Z') {
        letraZ(x, y, s, italica,italica2);
      } else if (letra == " "){ 
        x += anchoReal; // Avanza la posición para la próxima letra
      } else if (letra =="Ñ"){
        x += 0
      }
      x += anchoReal; // Avanza la posición para la próxima letra
    } else { 
      break; // Detener la iteración si se excede alguno de los límites
    }   
  }
}
function efectoGlitch(){
  push()
//Posición inicial de X e y
x= width / 2
y= height / 2

let glitch = slider.value(); // Obtener el valor del slider

  while (rectangulos.length < glitch) {
    let x = random(200, 1500);
    let y = random(50, 440);
    rectangulos.push({x: x, y: y});
  }
    
   while (rectangulos.length > glitch) {
    rectangulos.pop();
  }
  
     // Dibujar los rectángulos generados
  for ( i = 0; i < rectangulos.length; i++) {
    let rectData = rectangulos[i];
    fill(colorFondo); // Color del fondo
    rect(rectData.x, rectData.y, RECTANGLE_WIDTH, RECTANGLE_HEIGHT);    
  }
  pop()
}
function animInicio(){
  for (let i = 0; i < rectangulos2.length; i++) {
    stroke(0);
    fill("#00384C");
    rect(rectangulos2[i].x, rectangulos2[i].y, 100, 400);
  }
  if (frameCount % 60 == 0 && timer > 0) {
    timer --;
} else if (timer == 0){
// Determina cuántos rectángulos eliminar en cada iteración
let rectangulosAEliminar = min(rectangulos2.length, 15); // Puedes ajustar el número de rectángulos a eliminar aquí
  // Eliminar rectángulos
  for (let i = 0; i < rectangulosAEliminar; i++) {
    rectangulos2.pop();
  }
}
}
function mouseMoved() {
  for (let i = 0; i < 20; i++) {
    let x = mouseX + random(2900, 10); // Distribución más amplia
    let y = mouseY + random(2500, 10); // Distribución más amplia
    let colorIntensity = random(255); // Intensidad de color aleatoria
    colorSeleccionado = picker2.color(); // Obtener el color seleccionado
    fill(colorSeleccionado.levels[0], colorSeleccionado.levels[1], colorSeleccionado.levels[2], colorIntensity); // Usar el color seleccionado
    rect(x, y, 20, 60);
}
}
function mousePressed() {
  mouseMoved()
}
function obtenerAnchoLetra(letra) {
  if (letra === "A") {
    return 180;
} else if (letra === "B") {
    return 175;
} else if (letra === "C") {
    return 160;
} else if (letra === "D") {
    return 170;
} else if (letra === "E") {
    return 165;
} else if (letra === "F") {
    return 144;
} else if (letra === "G") {
    return 178;
} else if (letra === "H") {
    return 172;
} else if (letra === "I") {
    return 45;
} else if (letra === "J") {
    return 170;
} else if (letra === "K") {
    return 166;
} else if (letra === "L") {
    return 42.18; 
} else if (letra === "M") {
    return 230;
} else if (letra === "N") {
    return 180;
} else if (letra === "O") {
    return 160;
} else if (letra === "P") {
    return 162;
} else if (letra === "Q") {
    return 188;
} else if (letra === "R") {
    return 115;
} else if (letra === "S") {
    return 156;
} else if (letra === "T") {
    return 125;
} else if (letra === "U") {
    return 175;
} else if (letra === "V") {
    return 195;
} else if (letra === "W") {
    return 220;
} else if (letra === "X") {
    return 190;
} else if (letra === "Y") {
    return 154;
} else if (letra === "Z") {
    return 158;
} else if (letra === " "){
  return 50;
} else if (letra === "Ñ"){
  return 0;
}
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
function generarRectangulos() {
  while (rectangulosGenerados < totalRectangulos) {
    rectangulos2.push({
      x: random(-50,2500),
      y: random(-50,2500)
    });
    rectangulosGenerados++;
  }
}