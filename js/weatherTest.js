$(document).ready(function() {
    const apiKey = 'e14969755fb0473496593147241208';
    const units = 'imperial';
    const temperatureSymbol = units === "imperial" ? "F" : "C";

    async function fetchWeather() {
        try {
            $('#weather').empty();
            $('#error').empty();

            const cityInputtedByUser = $('#cityInput').val();
            const apiURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${encodeURIComponent(cityInputtedByUser)}&days=1&aqi=no&alerts=no`;

            const response = await fetch(apiURL);
            const data = await response.json();
            console.log(data);

            if (response.status !== 200 || !data.current) {
                $('#error').text("Invalid city or an error occurred. Please input another city.");
                return;
            }

            $('#city').text(`${data.location.name} weather today`);

            // Loop through the hourly data and create descriptions
            data.forecast.forecastday[0].hour.forEach(hour => {
                const hourlyWeatherDescription = createWeatherDescription(hour);
                $('#weather').append(hourlyWeatherDescription);
            });

        } catch (err) {
            console.log(err);
            $('#error').text("An error occurred while fetching the weather data.");
        }
    }

    function convertToLocalTime(dt) {
        const date = new Date(dt * 1000);

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours() % 12 || 12).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        const period = date.getHours() >= 12 ? 'PM' : 'AM';

        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds} ${period}`;
    }

    function createWeatherDescription(hour) {
        const { temp_f, temp_c, condition, time_epoch } = hour;
        const convertedDateAndTime = convertToLocalTime(time_epoch);

        return `
            <div class="weather_description">
                Temperature: ${units === 'imperial' ? temp_f : temp_c}°${temperatureSymbol}<br>
                Condition: ${condition.text}<br>
                Time: ${convertedDateAndTime}
            </div>`;
    }

    // Attach the fetchWeather function to the button click event
    $('#submitButton').click(fetchWeather);
});
