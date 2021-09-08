var ff1El = document.querySelector('#FF1')
var ff2El = document.querySelector('#FF2')
var testButton = document.querySelector('#testButton')


var priceInfoAnytime = function(data){
<<<<<<< HEAD

    // Get flight information
    fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SLC-sky/JFK-sky/anytime?inboundpartialdate=anytime", {
=======
    var toEl = document.querySelector('#to').value
    var fromEl = document.querySelector('#from').value
    
    // Get flight information
    fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/" + fromEl + "-sky/" + toEl + "-sky/anytime?inboundpartialdate=anytime", {
>>>>>>> abbb9c335eb858a21a5496172ad24e79ac9b0322
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
        if (data === data.errors) 
        {
            console.log('error')
        }
        console.log(data)
        testFlightEL = document.createElement('div')
        testFlightEL.textContent = "This Test Flight is going from " + fromEL + " to " + toEl
        ff1El.appendChild(testFlightEL)
        for (i = 0; i < data.Quotes.length; i++){
            console.log(data.Quotes[i].MinPrice)
            var priceEl = document.createElement('div')
            priceEl.setAttribute('id', 'price' + i)
            priceEl.setAttribute('class', '#')
            priceEl.textContent = 'Flight ' + (i+1) + '= $' + data.Quotes[i].MinPrice
            ff2El.appendChild(priceEl)
        }
        testButton.remove()
        return data
    })
    .catch(err => {
        console.error(err);
    });
}

var mySearch = function(){
    var data = priceInfoAnytime(data)

    // console.log(data)
    // for (i = 0; i > data.Quotes.length; i++){
    // console.log(data.Quotes[i].MinPrice)}
}

var events = {
    fetchEvents: function(city) {
        fetch(
            "https://api.seatgeek.com/2/venues?city=austin&client_id=MjMxMzI4MDd8MTYzMTA2NzEwMy45NTIzMjE4"
        )

        .then((response) => response.json())
        .then((data) => 
        console.log(data.venues[0].city));

    },
    displayEvents: function(data) {
        const { title } = data[0];
        const { city } = data[0].venue;
        console.log(title, city)
    }
};