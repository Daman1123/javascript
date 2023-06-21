/* Variables */
const synth = window.speechSynthesis;
const playButton = document.getElementById('textToSpeak');
const RandomStory = document.getElementById('Random');
const resetButton = document.getElementById('reset');
const generatedWords = document.getElementById('generatedWords');
let textToSpeak = '';

/* Arrays to contain words */
const Array1 = ["The Turkey", "Mom", "Dad", "The Dog"];
const Array2 = ["sat on", "ate", "danced with", "saw"];
const Array3 = ["a funny", "a scary", "a goofy", "a slimmy"];
const Array4 = ["goat", "monkey", "fish", "cow"];
const Array5 = ["on the moon", "on the chair", "in my soup", "on the grass"];

/* Functions */
function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function speakNow(string) {
  const utterThis = new SpeechSynthesisUtterance(string);
  synth.speak(utterThis);
}

function updateTextToSpeak(word) {
  textToSpeak += word;
  generatedWords.textContent = textToSpeak;
}

function clearTextToSpeak() {
  textToSpeak = '';
  generatedWords.textContent = '';
}

/* This piece of code reset the color of buttons 1 to 5 after every use. */
function resetBackgroundColors() {
  btn1.style.backgroundColor = '';
  btn2.style.backgroundColor = '';
  btn3.style.backgroundColor = '';
  btn4.style.backgroundColor = '';
  btn5.style.backgroundColor = '';
}

/* Event Listeners */

// these keep track of Arrays 1 - 5 words and random story sentences.
let story = 5;
let array1Index = 0; 
let array2Index = 0;
let array3Index = 0;
let array4Index = 0;
let array5Index = 0;

/* This piece of code makes a random story upto 5 sentences.  */
RandomStory.addEventListener('click', function () {

 for(let i = 0; i < story; i++){
  const randomStory1 = randomValueFromArray(Array1);
  const randomStory2 = randomValueFromArray(Array2);
  const randomStory3 = randomValueFromArray(Array3);
  const randomStory4 = randomValueFromArray(Array4);
  const randomStory5 = randomValueFromArray(Array5);
 
  const story = `${randomStory1} ${randomStory2} ${randomStory3} ${randomStory4} ${randomStory5}. `
  speakNow(story);
  updateTextToSpeak(story + '');
  textToSpeak += '';
  ///clearTextToSpeak();

 }
});

/* This piece of code concatenate all 5 arrays and make up a sentence . */
playButton.addEventListener('click', function () {

  const randomWord1 = randomValueFromArray(Array1);
  const randomWord2 = randomValueFromArray(Array2);
  const randomWord3 = randomValueFromArray(Array3);
  const randomWord4 = randomValueFromArray(Array4);
  const randomWord5 = randomValueFromArray(Array5);

  const sentence = `${randomWord1} ${randomWord2} ${randomWord3} ${randomWord4} ${randomWord5}`;

  speakNow(sentence);
  updateTextToSpeak(sentence);
  textToSpeak = '';


});

/* This piece of code clear the text on the screen. */
resetButton.addEventListener('click', function () {
  clearTextToSpeak();
  synth.cancel();
});


/* This piece of code select and display a random word from Array1. At the same time, it clears the text . */
btn1.addEventListener('click', function () {
  const word = Array1[array1Index];
  speakNow(word);
  updateTextToSpeak(word + ' ' );
  resetBackgroundColors();
  btn1.style.backgroundColor = RandomColor();
  textToSpeak = '';
  // Increment the index and loop back to 0 if it exceeds the array length
  array1Index++;
  if (array1Index >= Array1.length) {
    array1Index = 0;
  }
});

/* This piece of code select and display a random word from Array2. At the same time, it clears the text . */
btn2.addEventListener('click', function () {
  const word = Array2[array2Index];
  speakNow(word);
  updateTextToSpeak(word + ' ');
  resetBackgroundColors();
  btn2.style.backgroundColor = RandomColor();
  textToSpeak = '';
    // Increment the index and loop back to 0 if it exceeds the array length
  array2Index++;
  if (array2Index >= Array2.length) {
    array2Index = 0;
  }
});

/* This piece of code select and display a random word from Array3. At the same time, it clears the text . */
btn3.addEventListener('click', function () {
  const word = Array3[array3Index];
  speakNow(word);
  updateTextToSpeak(word + ' ');
  resetBackgroundColors();
  btn3.style.backgroundColor = RandomColor();
  textToSpeak = '';
    // Increment the index and loop back to 0 if it exceeds the array length
  array3Index++;
  if (array3Index >= Array3.length) {
    array3Index = 0;
  }
});

/* This piece of code select and display a random word from Array4. At the same time, it clears the text . */
btn4.addEventListener('click', function () {
  const word = Array4[array4Index];
  speakNow(word);
  updateTextToSpeak(word + ' ');
  resetBackgroundColors();
  btn4.style.backgroundColor = RandomColor();
  textToSpeak = '';
    // Increment the index and loop back to 0 if it exceeds the array length
  array4Index++;
  if (array4Index >= Array4.length) {
    array4Index = 0;
  }
});

/* This piece of code select and display a random word from Array5. At the same time, it clears the text . */
btn5.addEventListener('click', function () {
  const word =  Array5[array5Index];
  speakNow(word);
  updateTextToSpeak(word + ' ');
  resetBackgroundColors();
  btn5.style.backgroundColor = RandomColor();
  textToSpeak = '';
    // Increment the index and loop back to 0 if it exceeds the array length
  array5Index++;
  if (array5Index >= Array5.length) {
    array5Index = 0;
  }
});
 
/* This piece of code make a random color for buttons 1 to 5. */
function RandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

