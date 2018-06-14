$(document).ready(function() {
    //Get API key
    var APIKey = "166a433c57516f51dfab1f7edaed8413";

    //get today's date
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    today = mm + '/' + dd + '/' + yyyy;
    
    // chicago ajax call

    
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=Tokyo&units=imperial&appid=" + APIKey,
            method: "GET"
            // We store all of the retrieved data inside of an object called "response"
        }).done(function(response) {
            
            $(".city").html("<h4 class='date'>" + today + "</h4>")
             $(".city").append("<h2 class='city-name' style='text-align: center;'>" + response.name   + ", " + response.sys.country + "</h2>" +
                 "<h3 class='temperature' style='text-align: center;'>" + response.main.temp + "°F" + "</h3>" );

            if (response.weather[0].main === "Clear") {
                console.log(response);
                $(".city").append("<img src='./assets/imgs/clear.svg' style='height: 50px; width: 50px; float: left'><p class='status' style='text-align:center;'>" + response.weather[0].main + "</p>" + "<div class='pa4'><div class='overflow-auto'><table class='f6 w-100 mw8' cellspacing='0><tbody class='lh-copy'><tr class='stripe-dark'><td class='pa3'> Wind </td><td class='pa3'>" +
                response.wind.speed + " m/s</td></tr><tr class='stripe-dark'><td class='pa3'> Humidity </td><td class='pa3'> " + response.main.humidity + " % </td></tr><tr class='stripe-dark'><td class='pa3'> Sunrise </td><td class='pa3'> " +
                response.sys.sunrise + "</td></tr><tr class='stripe-dark'><td class='pa3'> Sunset </td><td class='pa3'> " + response.sys.sunset + "</td></tr></thead>");

            }
            else if (response.weather[0].main === "Clouds") {
                 $(".city").append("<img src='./assets/imgs/cloud.svg' style='height: 50px; width: 50px;'><p class='status' style='text-align:center;'>" + response.weather[0].main + "</p>" + "<div class='pa4'><div class='overflow-auto'><table class='f6 w-100 mw8' cellspacing='0><tbody class='lh-copy'><tr class='stripe-dark'><td class='pa3'> Wind </td><td class='pa3'>" +
                response.wind.speed + " m/s</td></tr><tr class='stripe-dark'><td class='pa3'> Humidity </td><td class='pa3'> " + response.main.humidity + " % </td></tr><tr class='stripe-dark'><td class='pa3'> Sunrise </td><td class='pa3'> " +
                response.sys.sunrise + "</td></tr><tr class='stripe-dark'><td class='pa3'> Sunset </td><td class='pa3'> " + response.sys.sunset + "</td></tr></thead>");
            }
            else if (response.weather[0].main === "Mist") {
                 $(".city").append("<img src='./assets/imgs/mist.svg' style='height: 50px; width: 50px;'><p class='status' style='text-align:center;'>" + response.weather[0].main + "</p>" + "<div class='pa4'><div class='overflow-auto'><table class='f6 w-100 mw8' cellspacing='0><tbody class='lh-copy'><tr class='stripe-dark'><td class='pa3'> Wind </td><td class='pa3'>" +
                response.wind.speed + " m/s</td></tr><tr class='stripe-dark'><td class='pa3'> Humidity </td><td class='pa3'> " + response.main.humidity + " % </td></tr><tr class='stripe-dark'><td class='pa3'> Sunrise </td><td class='pa3'> " +
                response.sys.sunrise + "</td></tr><tr class='stripe-dark'><td class='pa3'> Sunset </td><td class='pa3'> " + response.sys.sunset + "</td></tr></thead>");

            }
            else if (response.weather[0].main === "Rain") {
                 $(".city").append("<img src='./assets/imgs/rain.svg' style='height: 50px; width: 50px;'><p class='status' style='text-align:center;'>" + response.weather[0].main + "</p>" + "<div class='pa4'><div class='overflow-auto'><table class='f6 w-100 mw8' cellspacing='0><tbody class='lh-copy'><tr class='stripe-dark'><td class='pa3'> Wind </td><td class='pa3'>" +
                response.wind.speed + " m/s</td></tr><tr class='stripe-dark'><td class='pa3'> Humidity </td><td class='pa3'> " + response.main.humidity + " % </td></tr><tr class='stripe-dark'><td class='pa3'> Sunrise </td><td class='pa3'> " +
                response.sys.sunrise + "</td></tr><tr class='stripe-dark'><td class='pa3'> Sunset </td><td class='pa3'> " + response.sys.sunset + "</td></tr></thead>");
            }

    });
});

$(document).ready(function() {
    //Get API key
    var APIKey = "166a433c57516f51dfab1f7edaed8413";
    //sellect city: new york, honolulu, seattle, miami, san diego & set array
    var today = new Date();
    var currentDay = today.getDay();
    console.log(currentDay);
    // Iterate cityName into new URL

    
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/forecast?id=1850147&units=imperial&appid=" + APIKey,
            method: "GET"
            // We store all of the retrieved data inside of an object called "response"
        }).done(function(response) {
            // Log the resulting object
            console.log(response);

            if (currentDay === 0) {
                $(".dayOne").append("<h4>Today</h4>");
            }
            else if (currentDay === 1) {
                $(".dayOne").append("<h4>Today</h4>");
            }
            else if (currentDay === 2) {
                $(".dayOne").append("<h4>Today</h4>");
            }
            else if (currentDay === 3) {
                $(".dayOne").append("<h4>Today</h4>");
            }
            else if (currentDay === 4) {
                $(".dayOne").append("<h4>Today</h4>");
            }
            else if (currentDay === 5) {
                $(".dayOne").append("<h4>Today</h4>");
            }
            else if (currentDay === 6) {
                $(".dayOne").append("<h4>Today</h4>");
            }
           
            if (response.list[0].weather[0].main === "Clear") {
                console.log(response);
                $(".detailsOne").html("<img src='./assets/imgs/clear.svg' style='height: 50px; width: 50px;'><p>"  + 
                    "<br> High " + response.list[0].main.temp_max + " °F <br> Low " + 
                response.list[0].main.temp_min  + " °F</p>")
            } 
            
            else if (response.list[0].weather[0].main === "Clouds") {
                 $(".detailsOne").html("<img src='./assets/imgs/cloud.svg' style='height: 50px; width: 50px;'><p>"  + 
                    "<br> High " + response.list[0].main.temp_max + " °F <br> Low " + 
                response.list[0].main.temp_min  + " °F</p>")
            } 
            
            else if (response.list[0].weather[0].main === "Mist") {
                 $(".detailsOne").html("<img src='./assets/imgs/mist.svg' style='height: 50px; width: 50px;'><p>"  + 
                    "<br> High " + response.list[0].main.temp_max + " °F <br> Low " + 
                response.list[0].main.temp_min  + " °F</p>")
            } 
            
            else if (response.list[0].weather[0].main === "Rain") {
                 $(".detailsOne").html("<img src='./assets/imgs/rain.svg' style='height: 50px; width: 50px;'><p>"  + 
                    "<br> High " + response.list[0].main.temp_max + " °F <br> Low " + 
                response.list[0].main.temp_min  + " °F</p>")
            } 
            
            if (currentDay + 1 === 2) {
                $(".dayTwo").append("<h4>Tue</h4>");
            }
            else if (currentDay + 1 === 3) {
                $(".dayTwo").append("<h4>Wed</h4>");
            }
            else if (currentDay + 1 === 4) {
                $(".dayTwo").append("<h4>Thu</h4>");
            }
            else if (currentDay + 1 === 5) {
                $(".dayTwo").append("<h4>Fri</h4>");
            }
            else if (currentDay + 1 === 6) {
                $(".dayTwo").append("<h4>Sat</h4>");
            }
            else if (currentDay + 1 === 7 ) {
                $(".dayTwo").append("<h4>Sun</h4>");
            }
            else if (currentDay + 1 === 1) {
                $(".dayTwo").append("<h4>Mon</h4>");
            }

            if (response.list[8].weather[0].main === "Clear") {
                console.log(response);
                $(".detailsTwo").html("<img src='./assets/imgs/clear.svg' style='height: 50px; width: 50px;'><p>"   + 
                    "<br> High " + response.list[0].main.temp_max + " °F <br> Low " + 
                response.list[0].main.temp_min  + " °F</p>")
            } 
            
            else if (response.list[8].weather[0].main === "Clouds") {
                 $(".detailsTwo").html("<img src='./assets/imgs/cloud.svg' style='height: 50px; width: 50px;'><p>"  + 
                    "<br> High " + response.list[0].main.temp_max + " °F <br> Low " + 
                response.list[0].main.temp_min  + " °F</p>")
            } 
            
            else if (response.list[8].weather[0].main === "Mist") {
                 $(".detailsTwo").html("<img src='./assets/imgs/mist.svg' style='height: 50px; width: 50px;'><p>"  + 
                    "<br> High " + response.list[0].main.temp_max + " °F <br> Low " + 
                response.list[0].main.temp_min  + " °F</p>")
            } 
            
            else if (response.list[8].weather[0].main === "Rain") {
                 $(".detailsTwo").html("<img src='./assets/imgs/rain.svg' style='height: 50px; width: 50px;'><p>"  + 
                    "<br> High " + response.list[0].main.temp_max + " °F <br> Low " + 
                response.list[0].main.temp_min  + " °F</p>")
            } 

            if (currentDay + 2 === 3) {
                $(".dayThree").append("<h4>Wed</h4>");
            }
            else if (currentDay + 2 === 4) {
                $(".dayThree").append("<h4>Thu</h4>");
            }
            else if (currentDay + 2 === 5) {
                $(".dayThree").append("<h4>Fri</h4>");
            }
            else if (currentDay + 2 === 6) {
                $(".dayThree").append("<h4>Sat</h4>");
            }
            else if (currentDay + 2 === 7) {
                $(".dayThree").append("<h4>Sun</h4>");
            }
            else if (currentDay + 2 ===  8) {
                $(".dayThree").append("<h4>Mon</h4>");
            }
            else if (currentDay + 2 === 2) {
                $(".dayThree").append("<h4>Tue</h4>");
            }
            if (response.list[16].weather[0].main === "Clear") {
                console.log(response);
                $(".detailsThree").html("<img src='./assets/imgs/clear.svg' style='height: 50px; width: 50px;'><p>"   + 
                    "<br> High " + response.list[0].main.temp_max + " °F <br> Low " + 
                response.list[0].main.temp_min  + " °F</p>")
            } 
            
            else if (response.list[16].weather[0].main === "Clouds") {
                 $(".detailsThree").html("<img src='./assets/imgs/cloud.svg' style='height: 50px; width: 50px;'><p>"  + 
                    "<br> High " + response.list[0].main.temp_max + " °F <br> Low " + 
                response.list[0].main.temp_min  + " °F</p>")
            } 
            
            else if (response.list[16].weather[0].main === "Mist") {
                 $(".detailsThree").html("<img src='./assets/imgs/mist.svg' style='height: 50px; width: 50px;'><p>"  + 
                    "<br> High " + response.list[0].main.temp_max + " °F <br> Low " + 
                response.list[0].main.temp_min  + " °F</p>")
            } 
            
            else if (response.list[16].weather[0].main === "Rain") {
                 $(".detailsThree").html("<img src='./assets/imgs/rain.svg' style='height: 50px; width: 50px;'><p>"  + 
                    "<br> High " + response.list[0].main.temp_max + " °F <br> Low " + 
                response.list[0].main.temp_min  + " °F</p>")
            } 

           if (currentDay + 3 === 4) {
                $(".dayFour").append("<h4>Thu</h4>");
            }
            else if (currentDay + 3 === 5) {
                $(".dayFour").append("<h4>Fri</h4>");
            }
            else if (currentDay + 3 === 6) {
                $(".dayFour").append("<h4>Sat</h4>");
            }
            else if (currentDay + 3 === 7) {
                $(".dayFour").append("<h4>Sun</h4>");
            }
            else if (currentDay + 3 === 8) {
                $(".dayFour").append("<h4>Mon</h4>");
            }
            else if (currentDay + 3 ===  9) {
                $(".dayFour").append("<h4>Tue</h4>");
            }
            else if (currentDay + 3 === 3) {
                $(".dayFour").append("<h4>Wed</h4>");
            }

            if (response.list[24].weather[0].main === "Clear") {
                console.log(response);
                $(".detailsFour").html("<img src='./assets/imgs/clear.svg' style='height: 50px; width: 50px;'><p>"   + 
                    "<br> High " + response.list[0].main.temp_max + " °F <br> Low " + 
                response.list[0].main.temp_min  + " °F</p>")
            } 
            
            else if (response.list[24].weather[0].main === "Clouds") {
                 $(".detailsFour").html("<img src='./assets/imgs/cloud.svg' style='height: 50px; width: 50px;'><p>"  + 
                    "<br> High " + response.list[0].main.temp_max + " °F <br> Low " + 
                response.list[0].main.temp_min  + " °F</p>")
            } 
            
            else if (response.list[24].weather[0].main === "Mist") {
                 $(".detailsFour").html("<img src='./assets/imgs/mist.svg' style='height: 50px; width: 50px;'><p>"  + 
                    "<br> High " + response.list[0].main.temp_max + " °F <br> Low " + 
                response.list[0].main.temp_min  + " °F</p>")
            } 
            
            else if (response.list[24].weather[0].main === "Rain") {
                 $(".detailsFour").html("<img src='./assets/imgs/rain.svg' style='height: 50px; width: 50px;'><p>"  + 
                    "<br> High " + response.list[0].main.temp_max + " °F <br> Low " + 
                response.list[0].main.temp_min  + " °F</p>")
            } 

            if (currentDay + 4 === 5) {
                $(".dayFive").append("<h4>Fri</h4>");
            }
            else if (currentDay + 4 === 6) {
                $(".dayFive").append("<h4>Sat</h4>");
            }
            else if (currentDay + 4 === 7) {
                $(".dayFive").append("<h4>Sun</h4>");
            }
            else if (currentDay + 4 === 8) {
                $(".dayFive").append("<h4>Mon</h4>");
            }
            else if (currentDay + 4 === 9) {
                $(".dayFive").append("<h4>Tue</h4>");
            }
            else if (currentDay + 4 ===  10) {
                $(".dayFive").append("<h4>Wed</h4>");
            }
            else if (currentDay + 4 === 4) {
                $(".dayFive").append("<h4>Thu</h4>");
            }

            if (response.list[23].weather[0].main === "Clear") {
                console.log(response);
                $(".detailsFive").html("<img src='./assets/imgs/clear.svg' style='height: 50px; width: 50px;'><p>"   + 
                    "<br> High " + response.list[0].main.temp_max + " °F <br> Low " + 
                response.list[0].main.temp_min  + " °F</p>")
            } 
            
            else if (response.list[23].weather[0].main === "Clouds") {
                 $(".detailsFive").html("<img src='./assets/imgs/cloud.svg' style='height: 50px; width: 50px;'><p>"  + 
                    "<br> High " + response.list[0].main.temp_max + " °F <br> Low " + 
                response.list[0].main.temp_min  + " °F</p>")
            } 
            
            else if (response.list[23].weather[0].main === "Mist") {
                 $(".detailsFive").html("<img src='./assets/imgs/mist.svg' style='height: 50px; width: 50px;'><p>"  + 
                    "<br> High " + response.list[0].main.temp_max + " °F <br> Low " + 
                response.list[0].main.temp_min  + " °F</p>")
            } 
            
            else if (response.list[23].weather[0].main === "Rain") {
                 $(".detailsFive").html("<img src='./assets/imgs/rain.svg' style='height: 50px; width: 50px;'><p>"  + 
                    "<br> High " + response.list[0].main.temp_max + " °F <br> Low " + 
                response.list[0].main.temp_min  + " °F</p>")
            } 
                 // "<h3>" + response.main.temp + "°F" + "<br>" +  response.weather[0].main + "</h3>" +
                 // "<div class='pa4'><div class='overflow-auto'><table class='f6 w-100 mw8 center' cellspacing='0><tbody class='lh-copy'><tr class='stripe-dark'><td class='pa3'> Wind </td><td class='pa3'>" 
                 // + response.wind.speed +" m/s</td></tr><tr class='stripe-dark'><td class='pa3'> Humidity </td><td class='pa3'> " + response.main.humidity + " % </td></tr><tr class='stripe-dark'><td class='pa3'> Sunrise </td><td class='pa3'> " 
                 // + response.sys.sunrise + "</td></tr><tr class='stripe-dark'><td class='pa3'> Sunset </td><td class='pa3'> " + response.sys.sunset + "</td></tr></thead>");

        })

   

});