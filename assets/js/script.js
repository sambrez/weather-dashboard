// api key: 5877f230766a4bb2c1d817ba31e0ff20

// url for weather
// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=5877f230766a4bb2c1d817ba31e0ff20

// url for city name to coordinate conversion
// http://api.openweathermap.org/geo/1.0/direct?q={city name}&limit={limit}&appid=5877f230766a4bb2c1d817ba31e0ff20


// const input = document.getElementById('input').value;
const button = document.getElementById('search');
const cityName = document.getElementById('input');


function setCoordinates(event) {
    event.preventDefault();
    const city = cityName.value;
    // console.log(city);

    fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=2&appid=5877f230766a4bb2c1d817ba31e0ff20')
      .then(function (response) {
            return response.json();
      })
      .then(function (data) {
        console.log(data);
        console.log(data[0].name + ", " + data[0].country);
        console.log(data[0].lat + ", " +  data[0].lon);
      }) 
}

button.addEventListener('click', setCoordinates);

