import instance from './customAPI'


const options = {
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: {
        q: '10.8046135,106.6173531'
    },
    headers: {
        'X-RapidAPI-Key': 'daf6dbeaedmsh26a0f4ee4d599a6p15635ejsnab3bd23a5ff9',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

function getWeather(lat, long) {
    return instance.get(`https://weatherapi-com.p.rapidapi.com/current.json`, {
        params: {
            q: `${lat},${long}`
        },
        headers: {
            'X-RapidAPI-Key': 'daf6dbeaedmsh26a0f4ee4d599a6p15635ejsnab3bd23a5ff9',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    })
}

export { getWeather }