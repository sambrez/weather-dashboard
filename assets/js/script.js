// api key: 5877f230766a4bb2c1d817ba31e0ff20

// url for weather
// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=5877f230766a4bb2c1d817ba31e0ff20

// url for city name to coordinate conversion
// http://api.openweathermap.org/geo/1.0/direct?q={city name}&limit={limit}&appid=5877f230766a4bb2c1d817ba31e0ff20


// const input = document.getElementById('input').value;
const button = document.getElementById('search');
const cityName = document.getElementById('input');


function getWeather(event) {
    event.preventDefault();
    const city = cityName.value;
    // console.log(city);

    fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=3&appid=5877f230766a4bb2c1d817ba31e0ff20')
      .then(function (response) {
            return response.json();
      })
      .then(function (data) {
        // console.log(data)
        let cities = data[0].name
        // console.log(cities);
        let longitude = data[0].lon;
        let latitude = data[0].lat;
        localStorage.setItem('longitude', longitude);
        localStorage.setItem('latitude', latitude);
        listElement = document.createElement('li');
        listElement.textContent = cities;
        const list = document.getElementById('list');
        list.appendChild(listElement);
        
        fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=5877f230766a4bb2c1d817ba31e0ff20&units=imperial')
            .then(function (response) {
            return response.json();
        })
            .then(function (data) {
            console.log(data);

            let date = dayjs()
            const displayCity = document.getElementById('city-name');
            displayCity.textContent = data.city.name;
            const displayDate = document.getElementById('date-main');
            displayDate.textContent = date.format('dddd, MMMM D, YYYY');

            const temperature = document.getElementById('temperature');
            temperature.textContent = 'Temperature: ' + data.list[0].main.temp + "°F";

            const humidity = document.getElementById('humidity');
            humidity.textContent = 'Humidity: ' + data.list[0].main.humidity + "%";

            const windSpeed = document.getElementById('wind-speed');
            windSpeed.textContent = 'Wind Speed: ' + data.list[0].wind.speed + "mph";

            const mainIcon = document.getElementById('main-icon');
            mainIcon.src = href='https://openweathermap.org/img/wn/' + data.list[0].weather[0].icon + '@2x.png';
            
            const iconDescription = document.getElementById('description');
            iconDescription.textContent = data.list[0].weather[0].description;
        })
      }) 
}

button.addEventListener('click', getWeather);
