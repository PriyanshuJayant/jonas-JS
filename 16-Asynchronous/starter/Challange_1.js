// -------------Challenge #1---------- //

//  https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

const lat = 28.629713;
const lng = 77.276239;
const request = fetch(
  `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
);
console.log(request);

const whereAmI = function (lat, lng) {
  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
  )
    .then(res => {
      if(!res.ok) throw new Error(`Problem with Geocoding ${res.status}`);
      console.log(res);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.countryName}`);
      return fetch(`https://restcountries.com/v2/name/${data.countryName}`)
    })
    .then(response => {
      if(!response.ok){
        throw new Error(`Country not Found (${response.status})`)
      }
      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.log(`${err.message} 💣`));
};
whereAmI(28.629713, 77.276239);

