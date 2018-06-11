

$(document).ready(function() {
    //Get API key
    var APIKey = "166a433c57516f51dfab1f7edaed8413";
    //sellect city: new york, honolulu, seattle, miami, san diego & set array
    var cityName = ["New York,US", "Tokyo", "London,GB", "Athens,GR", "Seoul,KR"];

    // Iterate cityName into new URL

    $.each(cityName, function(index, city) {
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey,
            method: "GET"
            // We store all of the retrieved data inside of an object called "response"
        }).done(function(response) {
            // Log the resulting object
            console.log(response);
            
            // Print out img and info to html
                if (response.name === "New York") {
                    $(".outline-0").append("<div id='newyork'><a href='newyork.html' class='link black dim db'><img src='./assets/imgs/newyork.png' style='height: 240px; width: 340px; '><h2>" + response.name + "</h2><p>" + response.main.temp + "°F" + "<br>" + response.weather[0].main + "</p><br></div>" )
                }
                else if (response.name === "Athens") {
                    $(".outline-0").append("<div id='athens'><a href='greece.html' class='link black dim db'><img src='./assets/imgs/athens.png' style='height: 240px; width: 340px; '><h2>" + response.name + "</h2><p>" + response.main.temp + "°F" + "<br>" + response.weather[0].main + "</p><br></div>")
                }
                else if (response.name === "Tokyo") {
                    $(".outline-0").append("<div id='tokyo'><a href='tokyo.html' class='link black dim db'><img src='./assets/imgs/tokyo.png' style='height: 240px; width: 340px; '><h2>" + response.name + "</h2><p>" + response.main.temp + "°F" + "<br>" + response.weather[0].main + "</p><br></div>") 
                }
                else if (response.name === "London") {
                    $(".outline-0").append("<div id='london'><a href='london.html' class='link black dim db'><img src='./assets/imgs/london.png' style='height: 240px; width: 340px; '><h2>" + response.name + "</h2><p>" + response.main.temp + "°F" + "<br>" + response.weather[0].main + "</p><br></div>")
                }
                else if (response.name === "Seoul") {
                    $(".outline-0").append("<div id='seoul'><a href='korea.html' class='link black dim db'><img src='./assets/imgs/korea.png' style='height: 240px; width: 340px; '><h2>" + response.name + "</h2><p>" + response.main.temp + "°F" + "<br>" + response.weather[0].main + "</p><br></div>" )
                 } 

            
                
        })

    })

});