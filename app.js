// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
const synth = window.speechSynthesis;
const randomButton = document.getElementById('randomButton');
const resetButton = document.getElementById('resetButton');
let textToSpeak = ''; // Initializing the textToSpeak variable as an empty string
let storyOutput = document.getElementById('storyOutput');

// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
const speakButton = document.querySelector('button');
let textToSpeak0 = nouns = ['The Turkey', 'Mom', 'Dad', 'The Dog', 'My Teacher', 'The Elephant', 'The Cat'];
let textToSpeak1 = verbs = ['sat on', 'ate', 'danced with', 'saw', 'doesnt like', 'kissed'];
let textToSpeak2 = adjectives = ['a funny', ' a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
let textToSpeak3 = nouns2 = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
let textToSpeak4 = places = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	const utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
	utterThis.onend = () => {
		// Enable buttons after speech ends
		toggleButtons(true);
	};
}

function generateRandomStory() {  // for generating a random story 
    textToSpeak = '';
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun2 = nouns2[Math.floor(Math.random() * nouns2.length)];
    const randomPlace = places[Math.floor(Math.random() * places.length)];

    textToSpeak = `${randomNoun} ${randomVerb} ${randomAdjective} ${randomNoun2} ${randomPlace}`;
    speakNow(textToSpeak);
	storyOutput.textContent = textToSpeak; // story in text format
}

function toggleButtons(enabled) {
	const buttons = document.querySelectorAll('button');
	buttons.forEach(button => {
		button.disabled = !enabled;
	});
}
 // Add interactive elements to the story
 const storyWords = textToSpeak.split(' ');
 storyWords.forEach((word) => {
   const span = document.createElement('span');
   span.textContent = word + ' ';
   span.classList.add('interactive-word');
   span.addEventListener('click', handleInteractiveWordClick);
   storyOutput.appendChild(span);
 });


function handleInteractiveWordClick(event) {
 const clickedWord = event.target.textContent.trim();

 // Play sound effect or trigger animation based on the clicked word
 switch (clickedWord) {
   case 'The Turkey':
	 // Play turkey sound effect
	 playSoundEffect('sound/turkey.mp3');
	 break;
   case 'Mom':
	 // Trigger animation for mom
	 triggerAnimation('momAnimation');
	 break;
   // Add more cases for other words and corresponding actions
 }
}

function playSoundEffect(soundUrl) {
 const audio = new Audio(soundUrl);
 audio.play();
}

function triggerAnimation(animationId) {
 const element = document.getElementById(animationId);
 if (element) {
   element.classList.add('animate');
   setTimeout(() => {
	 element.classList.remove('animate');
   }, 1000); // Set animation duration
 }
}


/* Event Listeners
-------------------------------------------------- */
// The click event handler for the button that speaks the text contained in the above var textToSpeak
speakButton.addEventListener('click', function () {
	speakNow(textToSpeak);// Calling 'speakNow' function with 'textToSpeak'
	toggleButtons(false);
});



document.getElementById('Button1').addEventListener('click', function () {
	const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];  // for selecting random noun from the array
	textToSpeak += randomNoun + ' ';  // Append the random noun to 'textToSpeak'
	speakNow(textToSpeak0); 
  });
  
  document.getElementById('Button2').addEventListener('click', function () {
	const randomVerb = verbs[Math.floor(Math.random() * verbs.length)]; // for selecting random verb from the array
	textToSpeak += randomVerb + ' ';  // Append the random verb to 'textToSpeak'
	speakNow(textToSpeak1);
  });
  
  document.getElementById('Button3').addEventListener('click', function () {
	const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)]; // for selecting random adjective from the array
	textToSpeak += randomAdjective + ' ';  // Append the random adjective to 'textToSpeak'
	speakNow(textToSpeak2);
  });
  
  document.getElementById('Button4').addEventListener('click', function () {
	const randomNoun2 = nouns2[Math.floor(Math.random() * nouns2.length)]; // for selecting random noun from the array
	textToSpeak += randomNoun2 + ' ';  // Append the random noun to 'textToSpeak'
	speakNow(textToSpeak3);
  });
  
  document.getElementById('Button5').addEventListener('click', function () {
	const randomPlace = places[Math.floor(Math.random() * places.length)]; // for selecting random place from the array
	textToSpeak += randomPlace + '';  // Append the random place to 'textToSpeak'
	speakNow(textToSpeak4);
  });

  speakButton.addEventListener('click', function () { // Event listener for speakButton
    speakNow(textToSpeak);
	toggleButtons(false);
});

randomButton.addEventListener('click', function () {  // Event listener for randomButton
    generateRandomStory();
});

resetButton.addEventListener('click', function () {   // Event listener for resetButton
    textToSpeak = '';
	storyOutput.textContent = ''; // to clear the text content 
	
}); 
