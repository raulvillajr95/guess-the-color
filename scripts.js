// HTML elements
const rgbText = document.querySelector('.rgb-text');
const colorPicker = document.querySelector('.wheel');
const enter = document.querySelector('.enter');
const points = document.querySelector('.points');
const newColor = document.querySelector('.new-color')

const cpHTML = document.querySelector('#cpHTML')

// Preset functions
function randomNum(b) {
  return Math.floor(Math.random() * b) + 1;
}

// Computer random color
function randomRGB() {
  let red = randomNum(255);
  let green = randomNum(255);
  let blue = randomNum(255);

  return [red, green, blue]
}

let currentColor = randomRGB()
rgbText.textContent = `rgb(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]})`

function findDistance(points1, points2) {
  let x1 = points1[0]; 
  let y1 = points1[1];
  let z1 = points1[2];
  let x2 = points2[0];
  let y2 = points2[1];
  let z2 = points2[2];
  return parseInt(Math.sqrt((x2-x1)**2+(y2-y1)**2+(z2-z1)**2))
}
console.log(findDistance([-3,4,2],[-3,4,2]))

// Pressing enter button
enter.addEventListener('click', () => {
  let colorEntered = [colorWheel.color.rgb.r, colorWheel.color.rgb.g, colorWheel.color.rgb.b]
  

  if (findDistance(colorEntered, currentColor) == 0) {
    console.log('PERFECT')
  } else if (findDistance(colorEntered, currentColor) <= 25) {
    console.log('Excellent!!')
  } else if (findDistance(colorEntered, currentColor) <= 50) {
    console.log('Very good')
  } else if (findDistance(colorEntered, currentColor) <= 75) {
    console.log('Nice')
  } else if (findDistance(colorEntered, currentColor) <= 100) {
    console.log('Meh')
  } else if (findDistance(colorEntered, currentColor) <= 150) {
    console.log('You could do better')
  } else if (findDistance(colorEntered, currentColor) <= 200) {
    console.log('Gaming isn\'t for everyone')
  }

  //console.log(findDistance(colorEntered, someColor))

  // console.log(colorEntered == [255, 255, 255])
  // console.log(typeof colorEntered, typeof [255, 255, 255])
  // see wassup with colorEntered and current color
  // they should be equal

  // use distance formula, maybe a 3 point distance formula

  // console.log(colorEntered)
  // console.log(currentColor)
})

// Reset
newColor.addEventListener('click', () => {
  window.location.reload();
})

// Color wheel
var colorWheel = new iro.ColorPicker('#colorWheelDemo', {
  width: 200
});