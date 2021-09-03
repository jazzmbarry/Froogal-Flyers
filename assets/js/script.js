var ff2El = document.querySelector('#FF2')


var priceInfoAnytime = function(data){

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
        for (i = 0; i < data.Quotes.length; i++){
            console.log(data.Quotes[i].MinPrice)
            var priceEl = document.createElement('div')
            priceEl.setAttribute('id', 'price' + i)
            priceEl.textContent = 'Flight ' + (i+1) + '= $' + data.Quotes[i].MinPrice
            ff2El.appendChild(priceEl)
        }
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

