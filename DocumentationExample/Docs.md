
## How It Works
1. **HTML** creates a color box and button.
2. **CSS** styles the layout and box.
3. **JavaScript** listens for a button click and changes the color randomly.

## How to Run
1. Open `index.html` in your browser.
2. Click the “Change Color” button.
3. Watch the box change to a random color.

## Code Overview
- `getRandomColor()` → generates a random hex color.
- `changeColor()` → applies that color to the box.
- Event listener binds the function to the button.

## Author
Danny Morton  
Created as an example of documenting HTML, CSS, and JS projects.


# example for Props


```javascript
/**
 * Calculates a movie's score based on user ratings.
 *
 * @param {Object} props - Movie rating properties.
 * @param {number[]} props.ratings - List of rating numbers (0–10).
 * @param {boolean} [props.includeZeros=false] - Optional flag to include zeros in the average.
 * @returns {number} The average rating rounded to one decimal place.
 */
function getAverageRating({ ratings, includeZeros = false }) {
  const validRatings = includeZeros ? ratings : ratings.filter(r => r > 0);
  const avg = validRatings.reduce((a, b) => a + b, 0) / validRatings.length;
  return Math.round(avg * 10) / 10;
}
```

--- 

### Usage examples 

getAverageRatingDoc.md

### Example 1 — Basic Usage (ignoring zeros)

```javascript
const movieRatings = [8, 9, 7, 0, 10]; // user ratings, includes a zero

const average = getAverageRating({ ratings: movieRatings });

console.log(average); // Output: 8.5
// Explanation: The zero is ignored by default. Average of [8, 9, 7, 10] = 34 / 4 = 8.5
```

### Example 2 — Include Zeros in Calculation

```javascript
const movieRatings = [8, 9, 7, 0, 10];

const averageWithZeros = getAverageRating({ ratings: movieRatings, includeZeros: true });

console.log(averageWithZeros); // Output: 6.8
// Explanation: Includes the zero. Average of [8, 9, 7, 0, 10] = 34 / 5 = 6.8
```

### Example 3 — Using in a Movie Object

```javascript
const movie = {
  title: "Inception",
  ratings: [9, 10, 8, 0, 9]
};

const score = getAverageRating({ ratings: movie.ratings });
console.log(`Average score for ${movie.title}: ${score}`);
// Output: Average score for Inception: 9
```

### Example 4 — Guarding Against Empty Ratings
```javascript
const noRatings = [];

const score = getAverageRating({ ratings: noRatings }); 
console.log(score); // Output: NaN
// Could optionally handle this in your app: show "No ratings yet" if NaN
```