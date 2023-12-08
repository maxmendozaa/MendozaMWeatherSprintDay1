
 async function curTemp(){
    // this function is grabbing data from this url/api which is weather long and lat
    let promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.9577&lon=121.2908&appid=d899f449b82cfcc448b390ab82b924e7`)
    //this line creates new data and the await is tells the data to wait while the promise holds the api data. the json is trying the promise into a object
    let data = await promise.json();
    let curTemp = data.main.temp_max + `F` + `/` + data.main.temp_min + `F`
    console.log(data.main.temp);
    document.getElementById(`curTemp`).innerText = curTemp;
};

curTemp();

async function currentWeather(){
    let promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.9577&lon=121.2908&appid=d899f449b82cfcc448b390ab82b924e7`)
    let data = await promise.json();
    let currentWeather = data.main.temp + `F°`
    console.log(data.main.temp);
    document.getElementById(`currentWeather`).innerText = currentWeather;
}

currentWeather();

// async function currentTime(){
//     const d = new Date();
//     let time = d.getTime();
//     document.getElementById("currentTime").innerHTML = currentTime;
// };

// currentTime();