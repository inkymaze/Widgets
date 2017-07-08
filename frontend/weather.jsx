import React from "react";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let lat = 0;
    let lon = 0;
    function apiRequest() {
      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            console.log(xhr.responseText);
          }
        } else {
          console.log('Error: ' + xhr.status);
        }
      };
      xhr.open('GET', `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=15ac4b06bca468b75a8fee9e1afd8262`, true);

      xhr.send();
    }
    function geoFindMe() {
      let output = document.getElementById("weather-widget");

      if (!navigator.geolocation){
        output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
        return;
      }

      function success(position) {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        apiRequest();
      }

      function error() {
        output.innerHTML = "Unable to retrieve your location";
      }

      output.innerHTML = "<p>Locating…</p>";

      navigator.geolocation.getCurrentPosition(success, error);
    }
    geoFindMe();
}

  render() {
    return (
      <div id="weather-widget">
        <h1> Weatherman</h1>
      </div>
    );
  }
}

export default Weather;
