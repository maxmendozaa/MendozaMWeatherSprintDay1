
 async function currentDate(){
    // this function is grabbing data from this url/api which is weather long and lat
    let promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.9577&lon=121.2908&appid=d899f449b82cfcc448b390ab82b924e7`)
    //this line creates new data and the await is tells the data to wait while the promise holds the api data. the json is trying the promise into a object
    let data = await promise.json();
    console.log(data);
};

currentDate();


// fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.9577&lon=121.2908&appid=d899f449b82cfcc448b390ab82b924e7`);