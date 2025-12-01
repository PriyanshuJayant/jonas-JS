'use strict';

// https://countries-api-836d.onrender.com/countries/

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  // prettier-ignore
  const html = `
        <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = -1;
};

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////

// const getCountryData = function (country){
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${country}`);
// request.send();

// request.addEventListener('load', function () {
//   const [data] = JSON.parse(this.responseText);

//   // prettier-ignore
//   const html = `
//         <article class="country">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//           </div>
//         </article>
//   `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// });
// }
// getCountryData('portugal');

// const getCountryAndNeighbor = function (country) {
//   // AJAX Call County One
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);

//     // Render Country One
//     renderCountry(data);

//     // Get Neighbor Country (2)
//     const [neighbor] = data.borders;
//     if (!neighbor) return;

//     // AJAX Call County 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`);
//     request2.send();

//     request2.addEventListener('load', function(){
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbor');

//     })
//   });
// };
// // getCountryAndNeighbor('portugal');
// getCountryAndNeighbor('bhu');

// ? Old Method

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${country}`);
// request.send();

// ?New Method

// const request = fetch('https://restcountries.com/v2/name/portugal');
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0])
//     });
// };
// getCountryData('portugal');

// ? AJAX single country

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => response.json())
//     .then(data =>  renderCountry(data[0]));
// };
// getCountryData('portugal');

// ? AJAX Neighbouring countrys

// const getCountryData = function (country) {
//   // Country One
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response);
//       if (!response.ok)
//         throw new Error(`Country Not Found (${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) return;

//       console.log(...data);

//       // Country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country Not Found (${response.status})`);
//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something Went Wrong ${err.message}. Try Again! `);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

const getJSON = function (url, errorMessage = 'Something went Wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMessage} (${response.status})`);
    return response.json();
  });
};

const getCountryData = function (country) {
  // Country One
  getJSON(`https://restcountries.com/v2/name/${country}`, `Country not found`)
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      console.log(neighbour);

      // const neighbour = 'dwakjgdwauk'

      if (!neighbour) throw new Error(', No neighbour found');

      console.log(...data);

      // Country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        `Country not found`
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something Went Wrong ${err.message}. Try Again! `);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });
// console.log('Hello');

// getCountryData('australia');



// ----------- Asynchronous Behavior of JavaScript------------------//

// console.log("Test Start");
// setTimeout(() => console.log("0 Sec Timer"), 0); 
// Promise.resolve("Resolved Promise 1").then(res => console.log(res));

// Promise.resolve("Resolved Promise 2").then(res => {
//   for(let i = 0; i < 10000000000; i++){}
//   console.log(res);
// })

// console.log("Test End");

// const lotteryPromise = new Promise(function (resolve, reject) {

//   console.log('Lottery Draw is Happening 🔮');

//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You Win 😭');
//     } else {
//       reject(new Error('You Loose 😂'));
//     }
//   }, 2000)
// })

// lotteryPromise.then(res => console.log(res)).catch(err => console.log(err.message));

// Promisify SetTimeout()

// const wait = function(seconds){
//   return new Promise(function(resolve){
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const wait = (seconds) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, seconds * 1000);
//   });
// };


// wait(1)
//   .then(() => {
//     console.log('I waited for 1 Seconds')
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited for 2 Seconds')
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited for 3 Seconds')
//     return wait(1);
//   })
//   .then(() => console.log('I waited for 4 Seconds'));
// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error ('Promise!')).catch(x => console.error(x.message));


// const getPosition = () => {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(position => resolve(position), err => reject(err));
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   })
// }
// getPosition().then(pos => console.log(pos));

// const whereAmI = function (lat, lng) {
//   getPosition().then(pos => {
//     const { latitude: lat,longitude: lng } = pos.coords;

//     return fetch(
//       `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
//     )
//   })
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with Geocoding ${res.status}`);
//       // console.log(res);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.countryName}`);
//       return fetch(`https://restcountries.com/v2/name/${data.countryName}`)
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Country not Found (${response.status})`)
//       }
//       return response.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.log(`${err.message} 💣`));
// };
// btn.addEventListener('click', whereAmI());

// fetch(`https://restcountries.com/v2/name/${country}`).then((res) => console.log(res))

const getPosition = function () {

  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function (country) {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    const resGeo = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
    )
    if (!resGeo.ok) throw new Error('Problem Getting location data');

    const dataGeo = await resGeo.json();

    const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.countryName}`);
    if (!res.ok) throw new Error('Problem Getting location data');
    const data = await res.json();
    // console.log(data);
    renderCountry(data[1])
    // console.log(dataGeo);

    return `You are in ${dataGeo.city}, ${dataGeo.countryName}`
  }
  catch (err) {
    console.log(err);
    renderError(`Something Went Wrong ${err.message}`);

    // Reject Promise returned from async function
    throw err;
  }
}
console.log('1. Will get Location');
// const city = whereAmI();
// const response = city.then(res => console.log(res))
// console.log(response);

// whereAmI()
//   .then(city => console.log("2: ",city))
//   .catch(err => console.error("2: ", err.message))
//   .finally(() => console.log(`3: Finished Getting Data`))

(async () => {
  try {
    const city = await whereAmI();
    // console.log("2: ", city)
  } catch (error) {
    console.error("2: ", err.message);
  }
  // console.log(`3: Finished Getting Data`)
})()

// Self testing //
// async function call(countryName) {
//   try {
//     const cntData = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
//     const dataJSON = await cntData.json();
//     return dataJSON;
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// console.log(`Country : `);
// // (async () => {
// //   try {
// //     const data20 = await call('australia');
// //     console.log(data20[0]);
// //   } catch (error) {
// //     console.log(error.message);
// //   }
// // })();
// // call('india').then(res => console.log(res[1]), err => console.log(err.message));

// const call2 = async function multiple(c1, c2) {
//     const data1 = call(c1);
//     const data2 = call(c2);
//   return [data1, data2];
//     // call(c3).then(res => console.log(res[0]), err => console.log(err.message));
// }

// (async() => {
//   const [c1, c2] = await call2('germany', 'france');
//   console.log(c1[0]);
//   console.log(c2[0]);
// })();

const get3Countries = async function (c1, c2, c3) {
  try {
    const results = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`).catch(err => console.log(err.message, 'From ', c1, ' Please Enter Correct Country Name')),
      getJSON(`https://restcountries.com/v2/name/${c2}`).catch(err => console.log(err.message, 'From ', c2, ' Please Enter Correct Country Name')),
      getJSON(`https://restcountries.com/v2/name/${c3}`).catch(err => console.log(err.message, 'From ', c3, ' Please Enter Correct Country Name'))
    ]);

    const countries = [c1, c2, c3];
    console.log(results.map(d => `${d[0].name}'s Capital : ${d[0].capital}`));
    // console.log(countries);


  } catch (error) {
    console.log(error.message);
  }
}
get3Countries('portugal', 'canada', 'india');


// Promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/italy`),
    getJSON(`https://restcountries.com/v2/name/egypt`),
    getJSON(`https://restcountries.com/v2/name/mexico`)
  ]);
  console.log(res[0].name);
})()

const timeout = function (sec){
  return new Promise(function(_, reject){
    setTimeout(function(){
      reject(new Error('Request took too long!'));
    }, sec * 1000)
  })
}
Promise.reject([
  getJSON(`https://restcountries.com/v2/name/tanzania`), timeout(1)
]).then(res => console.log(res[0])).catch(err => console.error(err));