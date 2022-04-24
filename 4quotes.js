const quotes = [
    {
        quote: "It's really late when you think you're late.",
        author: "DJ Park",
    },
    {
        quote: "When you see, may be fake.",
        author: "DJ Park",
    },
    {
        quote: "Don't talk behind someone, unless you can do it in front.",
        author: "DJ Park",
    },
    {
        quote: "When the going gets tough...quit.",
        author: "DJ Park",
    },
    {
        quote: "beginning is just a beginning.",
        author: "DJ Park",
    },
    {
        quote: "It's hundred percent zero calorie, when hit chicken & beer at midnight.",
        author: "DJ Park",
    }
    ];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;

author.innerText = todaysQuote.author;