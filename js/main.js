console.log("👀")


fetch("https://api.kanye.rest/")
    .then(function(randomQuote){
        return randomQuote.json()
    })
    .then(function(jsonQuote){
        let quote = document.getElementById("quote")
        // console.log(jsonQuote.quote)
        quote.textContent = ` "${jsonQuote.quote}"`
    
        });
