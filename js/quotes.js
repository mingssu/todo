const quotes = [
    { quote: "eat kimchi", author: "nico" },
    { quote: "Whatever you’re thinking, think bigger.", author: "Tony Hsieh" },
    {
      quote: "The way to get started is to quit talking and start doing.",
      author: "Walt Disney",
    },
    { quote: "Ideas are easy. Implementation is hard.", author: "Guy Kawasaki" },
    {
      quote: "It’s hard to beat a person who never gives up.",
      author: "Babe Ruth",
    },
    { quote: "Always deliver more than expected.", author: "Larry Page" },
    {
      quote: "High expectations are the key to everything.",
      author: "Sam Walton",
    },
    { quote: "Without a goal, you can’t score.", author: "CASEY NEiSTAT" },
    { quote: "Buy the ticket, Take the ride", author: "Hunter S. Thompson" },
    {
      quote:
        "And, in the end, it’s not the years in your life that count. It’s the life in your years.",
      author: "Abraham Lincoln",
    },
    { quote: "Action Express Priorities", author: "Gandhi" },
  ];
  
  const todayQuote = document.querySelector(".quotes .quote");
  const todayAuthor = document.querySelector(".quotes .author");
  
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  todayQuote.innerText = todaysQuote.quote;
  todayAuthor.innerText = todaysQuote.author;
