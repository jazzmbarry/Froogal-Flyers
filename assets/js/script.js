var ff1El = document.querySelector('#FF1')
var ff2El = document.querySelector('#FF2')
var ff3El = document.querySelector('#FF3')
var carrierIDEl = document.querySelector('#carrierIDs')
var testButton = document.querySelector('#testButton')
var city = []
var date = []


var priceInfoAnytime = function(){
    var toEl = document.querySelector('#to').value
    var fromEl = document.querySelector('#from').value
    var to = toEl.split(' ')
    var from = fromEl.split(' ')
    
    ff2El.innerHTML = ""
    carrierIDEl.innerHTML = ""
    
    // Get flight information
    fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/" + from[0] + "-sky/" + to[0] + "-sky/anytime?inboundpartialdate=anytime", {
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
            
        testFlightEL = document.createElement('div')
        testFlightEL.setAttribute('class', 'flightAnnouncement')
        testFlightEL.textContent = "This Flight is going from " + from[0] + " to " + to[0]
        ff2El.appendChild(testFlightEL) 
        city = []
        if (data.Quotes[0].OutboundLeg.DestinationId === data.Places[0].PlaceId) {
            city.push(data.Places[0].CityName)
        }
        else {
            city.push(data.Places[1].CityName)
        } 
        
        date = []
        for (i = 0; i < 5; i++){

            // Set up Price
            var priceEl = document.createElement('button')
            var departCut = (data.Quotes[i].OutboundLeg.DepartureDate).split("T")
            date.push(departCut[0])
            // $("#carrierIDs").textContent("CARRIER ID KEY")
            priceEl.setAttribute('id', 'price' + i)
            priceEl.setAttribute('class', 'priceBtns')
            priceEl.setAttribute('onclick', 'fetchEvents('+ "'"+city+"'" + "," + " '"+date[i]+"'" + ')')
            priceEl.textContent = 'Option ' + (i+1) + '  $' + data.Quotes[i].MinPrice + '   /   Departure Date ' + departCut[0] + '   /   Carriers ID   ' + data.Quotes[i].OutboundLeg.CarrierIds[0]
            ff2El.appendChild(priceEl)
            fetchEvents(city, date[0]);

            if (i === 0) {
            // Show carrier ID's Table
            for (j = 0; j < data.Carriers.length; j++){
                // console.log(data.Carriers[j])

                // Set ID Variable
                var IDEl = document.createElement('div')
                IDEl.setAttribute('id', 'ID' + j)
                IDEl.setAttribute('class', '#')

                // carrierEl.setAttribute('button', onclick(eventSearch()))
                IDEl.textContent = data.Carriers[j].CarrierId + '   =   ' + data.Carriers[j].Name
                carrierIDEl.appendChild(IDEl) 
                } 
            }
        }
    })
    .catch(err => {
        console.error(err);
    });
}
var mySearch = function(){
    var data = priceInfoAnytime(data)
}
    
var fetchEvents = (city, date) => {
        fetch(
            "https://api.seatgeek.com/2/events?venue.city="
            + city
            + "&datetime_utc.gt="
            + date
            + "&client_id=MjMxMzI4MDd8MTYzMTA2NzEwMy45NTIzMjE4"
        )

        .then((response) => response.json())
        .then((data) => displayEvents(data));

    };

var displayEvents = (data) => {
    $(".eventsDisplay").text("INTERESTED IN FINDING LOCAL EVENTS?")
    const title = data.events[0].title;
    const time = data.events[0].datetime_utc;
    const city = data.events[0].venue.city;
    const name = data.events[0].venue.name;
    var locale = new Date(time);
    $(".eventTitle").text("Event: " + title);
    $(".eventTime").text("Date: " + locale.toLocaleDateString('en-US'));
    $(".cityName").text("Location: " + city);
    $(".venueName").text("Venue: " + name);

    const title2 = data.events[2].title;
    const time2 = data.events[2].datetime_utc;
    const city2 = data.events[2].venue.city;
    const name2 = data.events[2].venue.name;
    var locale2 = new Date(time2);
    $(".eventTitle2").text("Event: " + title2);
    $(".eventTime2").text("Date: " + locale2.toLocaleDateString('en-US'));
    $(".cityName2").text("Location: " + city2);
    $(".venueName2").text("Venue: " + name2);

    const title3 = data.events[3].title;
    const time3 = data.events[3].datetime_utc;
    const city3 = data.events[3].venue.city;
    const name3 = data.events[3].venue.name;
    var locale3 = new Date(time3);
    $(".eventTitle3").text("Event: " + title3);
    $(".eventTime3").text("Date: " + locale3.toLocaleDateString('en-US'));
    $(".cityName3").text("Location: " + city3);
    $(".venueName3").text("Venue: " + name3);
}

const options = {
    fuse_options : {
        shouldSort: true,
        threshold: 0.4,
        maxPatternLength: 3,
        keys: [{
            name: "IATA",
            weight: 0.6
          }

        ]
      }
  };

AirportInput('to')
AirportInput('from')




