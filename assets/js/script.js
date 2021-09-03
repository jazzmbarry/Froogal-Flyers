var ff2El = document.querySelector('#FF2')

var buttonEl = document.createElement('button')
buttonEl.setAttribute('onclick', mySearch())
ff2El.appendChild(buttonEl)

var priceInfoAnytime = function(){

    // Get flight information
    fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SLC-sky/JFK-sky/anytime?inboundpartialdate=anytime", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
            "x-rapidapi-key": "28dfb6149emshb14acf8eab1f92fp1b43e6jsna8cc07143db7"
        }
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data)
    })
    .catch(err => {
        console.error(err);
    });
    return data
}

var mySearch = function(){
    var data = priceInfoAnytime()
    for (i = 0; i > data.quotes.length; i++)
    console.log(data.quotes[i].MinPrice)
}

