
// const { fetchMyIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log('It didn\'t work!', error);
//     return
//   }

//   console.log('It worked! Returned IP:', ip);
// });


// const { fetchCoordsByIP } = require('./iss');


// fetchCoordsByIP('66.222.228.134', (error, data) => {

//   console.log(error);
//   console.log(data);

// });


// const { fetchISSFlyOverTimes } = require('./iss');

// fetchISSFlyOverTimes({ latitude: '51.06210', longitude: '-114.11590' }, (error, coords) => {

//   console.log(error);
//   console.log(coords);

// })


const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {

  if (error) {
    return console.log('It didn\'t work!', error);
  }

  for (let time of passTimes) {

    const duration = time.duration;

    const date = new Date(0);
    date.setUTCSeconds(time.risetime);

    console.log(`Next pass at ${date} for ${duration} seconds!`);



  }

});