// global variabes
const button = document.getElementById('search');
const cityName = document.getElementById('input');
const buttons = document.getElementById('list');
const listedCities = document.querySelector('names');

// main function that handles pi fetches and display
function main(event) {
    event.preventDefault();
    const input = cityName.value;
    const city = input.toLowerCase();
    getWeather();

    // function that fetches coordinates based on city name
    function getWeather() {
        fetch('https://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=3&appid=5877f230766a4bb2c1d817ba31e0ff20')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                // establishes coordinates of city
                let cities = data[0].name
                let longitude = data[0].lon;
                let latitude = data[0].lat;
                // stores coordinates to local storage with city as key
                let coordinates = latitude.toString() + " " + longitude.toString();
                localStorage.setItem(city, coordinates);
                // appends button to <ul> for weather recall
                buttonElement = document.createElement('button');
                buttonElement.setAttribute('id', cities);
                buttonElement.setAttribute('class', 'names');
                buttonElement.value = cities;
                buttonElement.textContent = cities;
                buttons.appendChild(buttonElement);

                // function that fetches the weather based on coordinates
                fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=5877f230766a4bb2c1d817ba31e0ff20&units=imperial')
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        console.log(data);

                        // displays city, date, and weather conditions of main card
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
                        windSpeed.textContent = 'Wind Speed: ' + data.list[0].wind.speed + " mph";

                        const mainIcon = document.getElementById('main-icon');
                        mainIcon.src = href = 'https://openweathermap.org/img/wn/' + data.list[0].weather[0].icon + '@2x.png';
                        const iconCard = document.getElementById('icon-card');
                        iconCard.classList.add("bg-color");
                        let mainWeather = document.getElementById('main-weather');
                        mainWeather.classList.add('border');

                        const iconDescription = document.getElementById('description');
                        iconDescription.textContent = data.list[0].weather[0].description;

                        const forecast = document.getElementById('fiveday');
                        forecast.textContent = "5-Day Forecast";

                        // establishes dates of five-day forecast cards
                        const dayOne = date.add(1, 'day');
                        const dayTwo = date.add(2, 'day');
                        const dayThree = date.add(3, 'day');
                        const dayFour = date.add(4, 'day');
                        const dayFive = date.add(5, 'day');

                        // displays dates of five-day forecast
                        const dateOne = document.getElementById('day-one');
                        dateOne.textContent = dayOne.format('MM/DD/YYYY');
                        const dateTwo = document.getElementById('day-two');
                        dateTwo.textContent = dayTwo.format('MM/DD/YYYY');
                        const dateThree = document.getElementById('day-three');
                        dateThree.textContent = dayThree.format('MM/DD/YYYY');
                        const dateFour = document.getElementById('day-four');
                        dateFour.textContent = dayFour.format('MM/DD/YYYY');
                        const dateFive = document.getElementById('day-five');
                        dateFive.textContent = dayFive.format('MM/DD/YYYY');


                        // displays weather icon for five-day forecast
                        const iconOne = document.getElementById('img1');
                        iconOne.src = href = 'https://openweathermap.org/img/wn/' + data.list[5].weather[0].icon + '@2x.png';
                        iconOne.classList.add("bg-color");
                        const iconTwo = document.getElementById('img2');
                        iconTwo.src = href = 'https://openweathermap.org/img/wn/' + data.list[13].weather[0].icon + '@2x.png';
                        iconTwo.classList.add("bg-color");
                        const iconThree = document.getElementById('img3');
                        iconThree.src = href = 'https://openweathermap.org/img/wn/' + data.list[21].weather[0].icon + '@2x.png';
                        iconThree.classList.add("bg-color");
                        const iconFour = document.getElementById('img4');
                        iconFour.src = href = 'https://openweathermap.org/img/wn/' + data.list[29].weather[0].icon + '@2x.png';
                        iconFour.classList.add("bg-color");
                        const iconFive = document.getElementById('img5');
                        iconFive.src = href = 'https://openweathermap.org/img/wn/' + data.list[37].weather[0].icon + '@2x.png';
                        iconFive.classList.add("bg-color");

                        // displays temperatures for five-day forecast
                        const temp1 = document.getElementById('temp1');
                        temp1.textContent = 'Temperature: ' + data.list[5].main.temp + "°F";
                        const temp2 = document.getElementById('temp2');
                        temp2.textContent = 'Temperature: ' + data.list[13].main.temp + "°F";
                        const temp3 = document.getElementById('temp3');
                        temp3.textContent = 'Temperature: ' + data.list[21].main.temp + "°F";
                        const temp4 = document.getElementById('temp4');
                        temp4.textContent = 'Temperature: ' + data.list[29].main.temp + "°F";
                        const temp5 = document.getElementById('temp5');
                        temp5.textContent = 'Temperature: ' + data.list[37].main.temp + "°F";

                        // displays humidity for five-day forecast
                        const hum1 = document.getElementById('hum1');
                        hum1.textContent = 'Humidity: ' + data.list[5].main.humidity + "%";
                        const hum2 = document.getElementById('hum2');
                        hum2.textContent = 'Humidity: ' + data.list[13].main.humidity + "%";
                        const hum3 = document.getElementById('hum3');
                        hum3.textContent = 'Humidity: ' + data.list[21].main.humidity + "%";
                        const hum4 = document.getElementById('hum4');
                        hum4.textContent = 'Humidity: ' + data.list[29].main.humidity + "%";
                        const hum5 = document.getElementById('hum5');
                        hum5.textContent = 'Humidity: ' + data.list[37].main.humidity + "%";

                        // displays wind speed for five-day forecast
                        const ws1 = document.getElementById('ws1');
                        ws1.textContent = 'Wind Speed: ' + data.list[5].wind.speed + " mph";
                        const ws2 = document.getElementById('ws2');
                        ws2.textContent = 'Wind Speed: ' + data.list[13].wind.speed + " mph";
                        const ws3 = document.getElementById('ws3');
                        ws3.textContent = 'Wind Speed: ' + data.list[21].wind.speed + " mph";
                        const ws4 = document.getElementById('ws4');
                        ws4.textContent = 'Wind Speed: ' + data.list[29].wind.speed + " mph";
                        const ws5 = document.getElementById('ws5');
                        ws5.textContent = 'Wind Speed: ' + data.list[37].wind.speed + " mph";

                    })
            })
        // resets text entry
        form.reset();
    }
}

// function that handles the call to and display from local storage from button list event listener
function recallCity(event) {
    // matches value of clicked button to local storage key and sets array
    let savedCities = event.target.value;
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).toLowerCase() === savedCities.toLowerCase()) {
            let savedCoordinates = localStorage.getItem(savedCities.toLowerCase());
            let coordinateArray = savedCoordinates.split(" ");
            let latitude = coordinateArray[0];
            let longitude = coordinateArray[1];

            // fetches weather from coordinates established in above array and displays - see comments from function main()
            fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=5877f230766a4bb2c1d817ba31e0ff20&units=imperial')
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data);

                    // displays city, date, and weather conditions of main card
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
                    windSpeed.textContent = 'Wind Speed: ' + data.list[0].wind.speed + " mph";

                    const mainIcon = document.getElementById('main-icon');
                    mainIcon.src = href = 'https://openweathermap.org/img/wn/' + data.list[0].weather[0].icon + '@2x.png';
                    const iconCard = document.getElementById('icon-card');
                    iconCard.classList.add("bg-color");
                    let mainWeather = document.getElementById('main-weather');
                    mainWeather.classList.add('border');

                    const iconDescription = document.getElementById('description');
                    iconDescription.textContent = data.list[0].weather[0].description;

                    const forecast = document.getElementById('fiveday');
                    forecast.textContent = "5-Day Forecast";

                    // establishes dates of five-day forecast cards
                    const dayOne = date.add(1, 'day');
                    const dayTwo = date.add(2, 'day');
                    const dayThree = date.add(3, 'day');
                    const dayFour = date.add(4, 'day');
                    const dayFive = date.add(5, 'day');

                    // displays dates of five-day forecast
                    const dateOne = document.getElementById('day-one');
                    dateOne.textContent = dayOne.format('MM/DD/YYYY');
                    const dateTwo = document.getElementById('day-two');
                    dateTwo.textContent = dayTwo.format('MM/DD/YYYY');
                    const dateThree = document.getElementById('day-three');
                    dateThree.textContent = dayThree.format('MM/DD/YYYY');
                    const dateFour = document.getElementById('day-four');
                    dateFour.textContent = dayFour.format('MM/DD/YYYY');
                    const dateFive = document.getElementById('day-five');
                    dateFive.textContent = dayFive.format('MM/DD/YYYY');


                    // displays weather icon for five-day forecast
                    const iconOne = document.getElementById('img1');
                    iconOne.src = href = 'https://openweathermap.org/img/wn/' + data.list[5].weather[0].icon + '@2x.png';
                    iconOne.classList.add("bg-color");
                    const iconTwo = document.getElementById('img2');
                    iconTwo.src = href = 'https://openweathermap.org/img/wn/' + data.list[13].weather[0].icon + '@2x.png';
                    iconTwo.classList.add("bg-color");
                    const iconThree = document.getElementById('img3');
                    iconThree.src = href = 'https://openweathermap.org/img/wn/' + data.list[21].weather[0].icon + '@2x.png';
                    iconThree.classList.add("bg-color");
                    const iconFour = document.getElementById('img4');
                    iconFour.src = href = 'https://openweathermap.org/img/wn/' + data.list[29].weather[0].icon + '@2x.png';
                    iconFour.classList.add("bg-color");
                    const iconFive = document.getElementById('img5');
                    iconFive.src = href = 'https://openweathermap.org/img/wn/' + data.list[37].weather[0].icon + '@2x.png';
                    iconFive.classList.add("bg-color");

                    // displays temperatures for five-day forecast
                    const temp1 = document.getElementById('temp1');
                    temp1.textContent = 'Temperature: ' + data.list[5].main.temp + "°F";
                    const temp2 = document.getElementById('temp2');
                    temp2.textContent = 'Temperature: ' + data.list[13].main.temp + "°F";
                    const temp3 = document.getElementById('temp3');
                    temp3.textContent = 'Temperature: ' + data.list[21].main.temp + "°F";
                    const temp4 = document.getElementById('temp4');
                    temp4.textContent = 'Temperature: ' + data.list[29].main.temp + "°F";
                    const temp5 = document.getElementById('temp5');
                    temp5.textContent = 'Temperature: ' + data.list[37].main.temp + "°F";

                    // displays humidity for five-day forecast
                    const hum1 = document.getElementById('hum1');
                    hum1.textContent = 'Humidity: ' + data.list[5].main.humidity + "%";
                    const hum2 = document.getElementById('hum2');
                    hum2.textContent = 'Humidity: ' + data.list[13].main.humidity + "%";
                    const hum3 = document.getElementById('hum3');
                    hum3.textContent = 'Humidity: ' + data.list[21].main.humidity + "%";
                    const hum4 = document.getElementById('hum4');
                    hum4.textContent = 'Humidity: ' + data.list[29].main.humidity + "%";
                    const hum5 = document.getElementById('hum5');
                    hum5.textContent = 'Humidity: ' + data.list[37].main.humidity + "%";

                    // displays wind speed for five-day forecast
                    const ws1 = document.getElementById('ws1');
                    ws1.textContent = 'Wind Speed: ' + data.list[5].wind.speed + " mph";
                    const ws2 = document.getElementById('ws2');
                    ws2.textContent = 'Wind Speed: ' + data.list[13].wind.speed + " mph";
                    const ws3 = document.getElementById('ws3');
                    ws3.textContent = 'Wind Speed: ' + data.list[21].wind.speed + " mph";
                    const ws4 = document.getElementById('ws4');
                    ws4.textContent = 'Wind Speed: ' + data.list[29].wind.speed + " mph";
                    const ws5 = document.getElementById('ws5');
                    ws5.textContent = 'Wind Speed: ' + data.list[37].wind.speed + " mph";

                })
        }
    }
}

// event listener from the city search button
button.addEventListener('click', main);
// event listener from the city history buttons
buttons.addEventListener('click', recallCity);
