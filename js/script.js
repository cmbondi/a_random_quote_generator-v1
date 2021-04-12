/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// NOTE - I am going for Exceeds Expectations for this project

/*** 
 * `quotes` array  - Six quote objects inside the quotes array - extra credit property = subject
***/
const quotes = [
 {
   quote: "Logic is the beginning of wisdom, not the end.",
   source: "Spock",
   citation: "https://everydaypower.com/star-trek-quotes/",
   subject: "Sci Fi"
 },
 {
  quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
  source: "Steve Jobs",
  citation: "Stanford University Commencement Address",
  year: "2005",
  subject: "tech"
},
{
  quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
  source: "Helen Keller",
  citation: "https://quoteinvestigator.com/2012/07/18/best-not-seen/",
  year: "1891"
},
{
  quote: "You will face many defeats in life, but never let yourself be defeated.",
  source: "Maya Angelou",
  subject: "Life"
},
{
  quote: "I have learned over the years that when one’s mind is made up, this diminishes fear; knowing what must be done does away with fear.",
  source: "Rosa Parks",
  citation: "from “Quiet Strength: the Faith, the Hope, and the Heart of a Woman Who Changed a Nation” (2000) by Rosa Parks with Gregory J. Reed ",
  year: "2000"
},
{
  quote: "We are not human beings having a spiritual experience. We are spiritual beings having a human experience.",
  source: "Pierre Teilhard de Chardin",
  citation: "https://www.brainyquote.com/quotes/pierre_teilhard_de_chardi_160888",
  subject: "Spiritual"
}
];

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let ranNum = Math.floor(Math.random() * quotes.length);
  return quotes[ranNum];
}

/***
 * Extra Credit - function to change to random background color, returns random rgb value
 * 
 ***/

function changeBackGroundColor() {
  let randomColor = () => Math.floor(Math.random() * 255);
  let newColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
  return document.body.style.backgroundColor = newColor;
}

/***
 * `printQuote` function - prints quotes and checks for all optional properties as well as changing background color
***/

function printQuote() {
  let randomQuote = getRandomQuote();
  let htmlString = `<p class="quote">${randomQuote.quote}</p><p class="source">${randomQuote.source}`;
  // If Statements for optional properties (including subject which is for extra credit)
  if ( randomQuote.citation ) {
    htmlString += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if ( randomQuote.year ) {
    htmlString += `<span class="year">${randomQuote.year}</span>`;
  }
  if ( randomQuote.subject ) {
    htmlString += `<span> - Subject: ${randomQuote.subject}</span>`;
  }
  htmlString += `</p>`;
  changeBackGroundColor();
  return document.getElementById('quote-box').innerHTML = htmlString;
}

/***
 * Extra Credit - use setInterval() to refresh page every 10 seconds
***/

window.setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);