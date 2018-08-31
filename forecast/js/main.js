document.addEventListener("DOMContentLoaded", function () {
    serverData.getJSON();
});
let cel = '\xB0';
let apikey = "6dcea59a7ddd85bdbafa9bcf34b0ae64"

let serverData = {
        url: "https://api.darksky.net/forecast/" + apikey + "/45.5555,-75.5555?units=ca"
        , httpRequest: "GET"
        , getJSON: function () {
            let headers = new Headers();
            headers.append("Content-type", "text/plain");
            headers.append("Accept", "application/json; charset=utf-8");
            console.dir("headers: " + headers.get("Content-Type"));
            console.dir("headers: " + headers.get("Accept"));
            let options = {
                method: serverData.httpRequest
                , mode: "cors"
                , headers: Headers
            };
            let request = new Request(serverData.url, options);
            fetch(request).then(function (response) {
                return response.json();
            }).then(function (data) {
                let items = data.hourly.data;
                for (var i = 0; i < 24; i++) {
                    /************************************************************Creating divs on loop*********************/
                    let d1 = document.createElement("div");
                    let r = items[i];
                    /************************************************************SETTING THE TIME**************************/
                    let heur = r.time * 1000;
                    let d = new Date(heur);
                    let t = d.getHours();
//                    let myDate = d.getDate();
//                    let myDay = d.getDay();
//                    let myMonth = d.getMonth();
//                    let myYear = d.getYear();
                    
                    let amPM = (t > 11) ? "pm" : "am";
                    if (t > 12) {
                        t -= 12;
                    }
                    else if (t == 0) {
                        t = "12"
                    };
                    //let getHeur = heur.getHours();
                    /************************************************************Putting Hours into p1*********************/
                    let p1 = document.createElement("p");
                    p1.textContent =  t + " " + amPM;
                    /***********************************************************Putting TEMPERATURE into p2***************/
                    let celc = r.temperature;
                    let p2 = document.createElement("p");
                    /******************************************Round up the temperature*********************************/
                    let awesome = Math.round(celc);
                    p2.textContent = awesome + cel + "C";
                    /*******************************************Lets get some icons ************************************/
                    let symbol = r.icon;
                    let icons = document.createElement("i");
                    /************************************************And for fun lets grab a summary*****/
                      let sum = r.summary;
//                    let p3 = document.createElement("p");
//                    p3.textContent = sum;
                    /****************************************************append stuff************************************/
                    let boxes = document.getElementById("myWeather").appendChild(d1);
                    let weatherBox = document.createElement("div");
                    let boxMask = document.createElement("div");
                    weatherBox.classList.add("weatherBox");
                    d1.appendChild(p1);
                    d1.appendChild(p2);
                    d1.appendChild(weatherBox);
                    weatherBox.appendChild(icons).classList.add(symbol);
                    icons.classList.add("wi");
                    d1.classList.add(symbol);
                };
                
            });
        }
    }
    //function displayHourlyData(data) {
    //    console.log(data);
    //}
    //let ___ = document.createElement("i")
    //_____.classlist.add.("wi");
    //_____.classlist.add.(symbol);