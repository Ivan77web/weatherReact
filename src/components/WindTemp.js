import React, {useState, useEffect} from "react";

export default function WindTemp(){

    const [city, setCity] = useState("Москва");

    const handleChange = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        checkCoords(url);
    };

    let url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=741c7a2fcd48d51b1b0a4797571c59f9";
  
    function checkCoords(url){

        fetch(url)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                document.body.querySelector(".city").innerHTML = city;
                document.body.querySelector(".weather").innerHTML = Math.floor(result.main.temp - 273.15) + "℃";
                document.body.querySelector(".feels_like").innerHTML = "По ощущениям: " + Math.floor(result.main.feels_like - 273.15) + "℃";

                document.body.querySelector(".wind_value").innerHTML = result.wind.speed + " м/с";
                document.body.querySelector(".clouds_value").innerHTML =result.clouds.all + "%";
                document.body.querySelector(".humidity_value").innerHTML =result.main.humidity + "%";
                document.body.querySelector(".pressure_value").innerHTML =result.main.pressure + " мм рт. ст.";
                document.body.querySelector(".coords").innerHTML ="Координаты: " + result.coord.lat + "д " + result.coord.lon + "ш";
            })
            .catch(error => console.log("error", error));
    }

    useEffect( () => {
        checkCoords("http://api.openweathermap.org/data/2.5/weather?q=Москва,ru&appid=741c7a2fcd48d51b1b0a4797571c59f9")
    }, [])

    

    return(
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <input className="inputCity" value={city} onChange={handleChange}/>
            </form>

            <div className="weatherWind">
                <div className="city"></div>
                <div className="weather"></div>
                <div className="feels_like"></div>
                <div className="add">
                    <div className="wind">
                        <div className="wind_txt">Скорость ветра: </div>
                        <div className="wind_value"></div>
                    </div>

                    <div className="clouds">
                        <div className="clouds_txt">Облачность: </div>
                        <div className="clouds_value"></div>
                    </div>
                    
                    <div className="humidity">
                        <div className="humidity_txt">Влажность: </div>
                        <div className="humidity_value"></div>
                    </div>

                    <div className="pressure">
                        <div className="pressure_txt">Давление: </div>
                        <div className="pressure_value"></div>
                    </div>
                
                    <div className="coords"></div>
                </div>
            </div>
        </div>
    )
}











    //ТЕМПЕРАТУ ПО НАЗВАНИЮ
    // useEffect( () => { 
    //     let url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + ",ru&appid=741c7a2fcd48d51b1b0a4797571c59f9";
  
    //     function checkCoords(url){
  
    //         fetch(url)
    //             .then(response => response.json())
    //             .then(result => {
    //                 console.log(result)
    //                 document.body.querySelector(".city").innerHTML = city
    //                 document.body.querySelector(".weather").innerHTML = Math.floor(result.main.temp - 273.15)
    //             })
    //             .catch(error => console.log("error", error));
    //     }

    //     // checkCoords(url);
    // }, [])