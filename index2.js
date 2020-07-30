

const { nextISSTimesForMyLocation } = require('./iss_promised');


const printPassTimes = function(flyoverTimes) {

  for (let time of flyoverTimes) {

    const duration = time.duration;

    const date = new Date(0);
    date.setUTCSeconds(time.risetime);

    console.log(`Next pass at ${date} for ${duration} seconds!`);
  }

}

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log('it did not work, ', error.message);
  })