const cityName = document.getElementById('search')

const searchButton = document.getElementsByClassName('button')
const temp = document.querySelector('text');

function getWeather(cityVal) {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '2b25d06e6emshcb4ac8beef2c3c1p11a361jsnc877ab34f55d',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};
     return fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityVal}`, options)
		.then(response => response.json())
		.then(response => response)
		.catch(err => console.error(err));
		
}
const searchData = async ()=> {
	const cityVal = document.getElementById('search').value
	const data = await getWeather(cityVal)
	showData(data)
}
function showData(weatherdata) {
	document.getElementById('city').innerHTML = document.getElementById('search').value
	document.querySelector('.temp').innerHTML = `Temp -- ${weatherdata.temp}℃`
	document.querySelector('.max_temp').innerHTML = `Max Temp -- ${weatherdata.max_temp}℃`
	document.querySelector('.min_temp').innerHTML = `Min Temp -- ${weatherdata.min_temp}℃`
	document.querySelector('.humidity').innerHTML = `Humidity -- ${weatherdata.humidity}%`
	document.querySelector('.wind').innerHTML = `Wind Speed -- ${weatherdata.wind_speed}km/h`
}

Array.from(searchButton).forEach((searchButton) => {
	searchButton.addEventListener('click', searchData)
});
