var quotes = [
  "“Be yourself; everyone else is already taken.”",
  "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle.”",
  "“So many books, so little time.”",
  "“A room without books is like a body without a soul.”",
];
var writers = [
  "― Oscar Wilde",
  "― Marilyn Monroe",
  "― Frank Zappa",
  "― Marcus Tullius Cicero",
];

var usedQuotes = [];

function generateQuotes() {
  if (usedQuotes.length === quotes.length) {
    usedQuotes = [];
  }

  var random;
  do {
    random = Math.floor(Math.random() * quotes.length);
  } while (usedQuotes.includes(random));

  document.getElementById("quotes").innerText = quotes[random];
  document.getElementById("writer").innerText = writers[random];

  usedQuotes.push(random);
}
