import React, { useEffect, useState } from 'react'
import { getWeather } from '../API/WeatherAPI';

const Weather = () => {

    const [location, setLocation] = useState(null);
    const [dataWeather, setDataWeather] = useState();
    const [lat, setLat] = useState(null)
    const [long, setLong] = useState(null)


    const handleWatchLocation = async () => {
        if (navigator.geolocation) {
            navigator.permissions.query({ name: 'geolocation' }).then(permissionStatus => {
                if (permissionStatus.state === 'denied') {
                    alert('Please allow location access.');
                    window.location.href = "app-settings:location";
                } else {
                    navigator.geolocation.watchPosition((position) => {
                        setLocation(position);
                        localStorage.setItem("latitude", position.coords.latitude)
                        localStorage.setItem("longitude", position.coords.longitude)
                        setLat(position.coords.latitude)
                        setLong(position.coords.longitude)
                        getData(position.coords.latitude, position.coords.longitude)
                    }, (error) => {
                        console.log(error);
                    });
                }
            });
        } else {
            alert('Geolocation is not supported in your browser.');
        }
    }


    useEffect(() => {
        handleWatchLocation()
    }, []);
    useEffect(() => {
        if (localStorage.getItem("latitude")) {
            getData(localStorage.getItem("latitude"), localStorage.getItem("longitude"))
        }
    })


    const getData = async (lat, long) => {
        if (lat) {
            let res = await getWeather(lat, long)
            if (res) {
                setDataWeather(res)
            }
        }

    }

    return (
        <div className='card p-3'>
            <h3>Weather</h3>

            <div className='card p-3'>
                <div className='card-title'>
                    <h2><em>{ dataWeather && dataWeather.location.country }</em></h2>
                    <h3><em>{ dataWeather && dataWeather.location.name }</em></h3>
                    <div className='d-flex justify-content-between'>
                        <small>Latitude is?{ lat }</small>
                        <small>Longitude is? { long }</small>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex justify-content-around gap-3'>
                            <img className='w-100' src={ dataWeather && dataWeather.current.condition.icon }></img>
                            <div className='d-flex mt-4 p-2'>
                                <h4 className='text-center'>{ dataWeather && dataWeather.current.feelslike_c }</h4>
                                <i className="fa-solid fa-c mx-1"></i>
                            </div>

                        </div>
                        <div >
                            <h2 className='mt-3'>{ dataWeather && dataWeather.current.condition.text }</h2>
                            <small>{ dataWeather && dataWeather.current.last_updated }</small>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Weather