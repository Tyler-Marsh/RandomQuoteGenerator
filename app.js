// hook the form that is hidden
const displayQuote = document.getElementById("displayedQuote");
// hook the randomQuote button
const randomQuote = document.getElementById("getRandomQuote");
// hook the author, source, and date.

const author = document.getElementById("newAuthor");
const source = document.getElementById("newSource");
const date = document.getElementById("newDate");
// add an event listener for the random quote button
// instantiate two variables to be used to ensure the quote remains random
//push - adds to the end of the array


//pop - removes the last one

// create an array to hold previous quotes so users can go back in time
// to view quotes.
// push new Quotes into the previous quotes.
let prevQuotes = [];


let randomIndex = 0;
let newRandomIndex = 0;
randomQuote.addEventListener("click", () => {
  randomQuote.disabled = true;
  while(randomIndex === newRandomIndex){
    newRandomIndex = getRandomIndex();
  }
  randomIndex = newRandomIndex;
  randomQuote.disabled = false;
 displayQuote.innerText = quotes[randomIndex].Quote;
 source.innerText = quotes[randomIndex].Source;
 date.innerText = quotes[randomIndex].date
 author.innerText = quotes[randomIndex].Author
 prevQuotes.push(quotes[randomIndex])
})



const hide = document.getElementById("hide");
// hook button that will reveal the form

const add = document.getElementById("add");

// add an event listener
add.addEventListener("click", () => {
  handleAdd();
})



// function to hide or show the form.

function handleAdd() {
  if (hide.style.display === "none" || hide.style.display === '') {
  hide.style.display = "block"
  }
  else {
    hide.style.display = "none";
  }
}

// hook the "previous quote button"
const prevButton = document.getElementById("previousQuote");

prevButton.addEventListener("click", () => {
  if (prevQuotes.length === 0) {
    prevQuotes.push(quotes[0])
  }
  if (prevQuotes.length >= 2) {
    let previousQuote = prevQuotes.pop()
    if(previousQuote.Quote === displayQuote.innerText ) {
      previousQuote = prevQuotes.pop()
    }
  displayQuote.innerText = previousQuote.Quote;
   source.innerText = previousQuote.Source;
   date.innerText = previousQuote.date
   author.innerText = previousQuote.Author
    }
    else if (prevQuotes.length === 1 && prevQuotes[0].Quote !== displayQuote.innerText) {
      displayQuote.innerText = prevQuotes[0].Quote;
    source.innerText = prevQuotes[0].Source;
    date.innerText = prevQuotes[0].date
    author.innerText = prevQuotes[0].Author
    }
  
  else {
    showAlert("No more previous quotes to display.", "deleteMe");
  }
})



// initalize the quotes


quotes = [
  
{
  Quote:'"I love you like Kanye loves Kanye..."',
  Author: "-Kanye West",
  Source: "The Life of Pablo",
  date: 2016,
  },
  
  {
  Quote: '"When your only tool is a hammer, you tend to look at every problem as a nail."',
  Author: "-Abraham Maslow",
  Source: '' ,
  date: '',
  },
  {
    Quote: '"Sanity and happiness are an impossible combination."',
    Author:  "-Mark Twain",
    Source: '',
    date: '',
    },
    
    {
    Quote:'"Fear has its use but cowardice has none."',
    Author: "-Mahatma Gandhi",
    Source: '',
    date: '', 
     },
    
    {
    Quote: '"Anger as soon as fed is dead — tis starving makes it fat."',
    Author: "-Emily Dickinson",
    Source: '' ,
    date:'' ,
    },
    
    {
    Quote: '"Make no judgments where you have no compassion."',
    Author: "-Anne McCaffrey",
    Source: '',
    date: '',
    },
  
    {
    Quote: '"Discontent is the first necessity of progress."',
    Author: '-Thomas Edison',
    Source:'',
    date: '',
    },
    
    {
    Quote: '"The master understands that the universe is forever out of control."',
    Author: '-Lao Tzu',
    Source: '',
    date: '',
     },
  
    {
    Quote: '"Resentment is like taking poison and waiting for the other person to die."',
    Author: '-Malachy McCourt',
    Source: '',
    date: '',
    },
    
    {
    Quote: '"The master has failed more times than the beginner has even tried."',
    Author: '-Stephen McCranie',
    Source: '',
    date: '',
    },
]

// generate random number

function getRandomIndex() {
  return ( Math.floor( Math.random() * quotes.length))
}

// push the first Displaying Kanye quote into the prevQuotes so it can be displayed.
prevQuotes.push(quotes[0]);




function showAlert(message, className) {
  // clear remaining alerts
  this.clearAlert();
  const div = document.createElement('div');
  div.className = className;
  div.style.backgroundColor = "red";
  div.style.color = 'white';
  div.style.borderRadius = "5px";
  /// add classes
  div.appendChild(document.createTextNode(message));
  // Get parent
  const errorParent = document.getElementById("errorParent");
  const before = document.getElementById("before");

  errorParent.insertBefore(div, before)

  setTimeout(() => {
    this.clearAlert();
  }, 2800);

}


// create a function to delete error statements for the previous quote button
function clearAlert() {
  const currentAlert = document.querySelector('.deleteMe');

  if(currentAlert){
    currentAlert.remove();
  }
}



// hook the go button to add quotes to the list....
/*
let submitNewQuote = document.getElementById("go");

submitNewQuote.addEventListener("submit", (e) => {
  e.preventDefault();
  let authorNew = document.getElementById("formAuthor").value;
  let quoteNew = document.getElementById("formQuote").value;
  let dateNew = document.getElementById("formDate").value;
  let sourceNew = document.getElementById("formSource").value;

  let newQuoteObject = {Quote: `${quoteNew}`, Author: `${authorNew}`,
  Source: `${sourceNew}`, date: `${dateNew}`};
  quotes.push(newQuoteObject);
  document.getElementById('formQuote').value = '';
  document.getElementById('formAuthor').value = '';
  document.getElementById('formDate').value = '';
  document.getElementById('formSource').value = '';
})*/

function submitNewQuote(e) {
  e.preventDefault();
  let authorNew = document.getElementById("formAuthor").value;
  let quoteNew = document.getElementById("formQuote").value;
  let dateNew = document.getElementById("formDate").value;
  let sourceNew = document.getElementById("formSource").value;

  let newQuoteObject = {Quote: `${quoteNew}`, Author: `${authorNew}`,
  Source: `${sourceNew}`, date: `${dateNew}`};
  quotes.push(newQuoteObject);
  document.getElementById('formQuote').value = '';
  document.getElementById('formAuthor').value = '';
  document.getElementById('formDate').value = '';
  document.getElementById('formSource').value = '';
  handleAdd();

}