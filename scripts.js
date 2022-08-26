// HTML elements
const rgbText = document.querySelector('.rgb-text');
const colorPicker = document.querySelector('.wheel');
const enter = document.querySelector('.enter');
const points = document.querySelector('.points');
const newColor = document.querySelector('.new-color');
const cpHTML = document.querySelector('#cpHTML');

// Preset functions
function randomNum(b) {
  return Math.floor(Math.random() * b) + 1;
}

// Computer random color
function randomRGB() {
  let red = randomNum(255);
  let green = randomNum(255);
  let blue = randomNum(255);
  return [red, green, blue];
}

let currentColor = randomRGB();
rgbText.textContent = `rgb(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]})`;

// Find distance in x,y,z form
function findDistance(points1, points2) {
  let x1 = points1[0]; 
  let y1 = points1[1];
  let z1 = points1[2];
  let x2 = points2[0];
  let y2 = points2[1];
  let z2 = points2[2];
  return parseInt(Math.sqrt((x2-x1)**2+(y2-y1)**2+(z2-z1)**2));
}

// Pressing enter button
enter.addEventListener('click', () => {
  let colorEntered = [colorWheel.color.rgb.r, colorWheel.color.rgb.g, colorWheel.color.rgb.b];
  let firstPartPhrase = `${findDistance(colorEntered, currentColor)} points away from the real color, `;
  let phrase;
  if (findDistance(colorEntered, currentColor) == 0) {
    phrase = 'PERFECT';
    points.textContent = `${firstPartPhrase}${phrase}`;
  } else if (findDistance(colorEntered, currentColor) <= 25) {
    phrase = 'excellent!';
    points.textContent = `${firstPartPhrase}${phrase}`;
  } else if (findDistance(colorEntered, currentColor) <= 50) {
    phrase = 'very good';
    points.textContent = `${firstPartPhrase}${phrase}`;
  } else if (findDistance(colorEntered, currentColor) <= 75) {
    phrase = 'nice';
    points.textContent = `${firstPartPhrase}${phrase}`;
  } else if (findDistance(colorEntered, currentColor) <= 100) {
    phrase = 'meh';
    points.textContent = `${firstPartPhrase}${phrase}`;
  } else if (findDistance(colorEntered, currentColor) <= 150) {
    phrase = 'you could do better';
    points.textContent = `${firstPartPhrase}${phrase}`;
  } else {
    phrase = 'gaming isn\'t for everyone';
    points.textContent = `${firstPartPhrase}${phrase}`;
  }
})

// Reset
newColor.addEventListener('click', () => {
  window.location.reload();
})

// Color wheel
var colorWheel = new iro.ColorPicker('#colorWheelDemo', {
  width: 200
});