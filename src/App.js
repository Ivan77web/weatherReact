import React, {useState, useEffect} from "react"
import Main from "./components/Main";
import './App.css';

function App() {
  
  //ТЕМПЕРАТУ ПО НАЗВАНИЮ
  // useEffect( () => { 

  //   let city = prompt("Введите название города", );

  //   let url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + ",ru&appid=741c7a2fcd48d51b1b0a4797571c59f9";
  
  //   function checkCoords(url){
  
  //     fetch(url)
  //       .then(response => response.json())
  //       .then(result => {
  //         console.log(result)
  //         document.body.querySelector(".city").innerHTML = city
  //         document.body.querySelector(".weather").innerHTML = Math.floor(result.main.temp - 273.15)
  //       })
  //       .catch(error => console.log("error", error));
  //   }

  //   checkCoords(url);
  // }, [])




  // ТЕМПЕРАТУРА ПО КООРДИНАТАМ
  // useEffect( () => {
  //   function checkCoords(){
  //     let url = "http://api.openweathermap.org/data/2.5/weather?lat=63.5895298&lon=53.9305546&appid=741c7a2fcd48d51b1b0a4797571c59f9";
  
  //     fetch(url)
  //       .then(response => response.json())
  //       .then(result => {
  //         console.log(result)
  //       })
  //       .catch(error => console.log("error", error));
  //   }

  //   checkCoords();
  // }, [])


  // НАЗВАНИЕ ПО КООРДИНАТАМ
  // useEffect( () => {
  //   function checkCoords(){
  //     let url = "http://api.openweathermap.org/geo/1.0/direct?q=Sosnogorsk&limit=5&appid=741c7a2fcd48d51b1b0a4797571c59f9";
  
  //     fetch(url)
  //       .then(response => response.json())
  //       .then(result => {
  //         console.log(result)
  //       })
  //       .catch(error => console.log("error", error));
  //   }

  //   checkCoords();
  // }, [])
  
  return (
    <div className="app">
      {/* <div className="city"></div>
      <div className="weather"></div> */}
      <Main/>
    </div>
  );
}
export default App;
