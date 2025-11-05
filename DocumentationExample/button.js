/* ============================================
   Color Changer App Script
   Author: Danny Morton
   Description: Changes the color of the box to a random color
   ============================================ */

// Get references to DOM elements
const colorBox = document.getElementById('colorBox');
const changeColorBtn = document.getElementById('changeColorBtn');

/**
 * Generate a random hex color
 * @returns {string} A random hex color like "#A1B2C3"
 */
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

/**
 * Change the background color of the colorBox
 */
function changeColor() {
  const newColor = getRandomColor();
  colorBox.style.backgroundColor = newColor;
  console.log(`Color changed to: ${newColor}`);
}

// Add event listener to button
changeColorBtn.addEventListener('click', changeColor);
