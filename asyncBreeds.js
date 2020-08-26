// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, funcToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');

  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    funcToRunWhenThingsAreDone(data);
  });

  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

// we try to get the return value
//const bombay = breedDetailsFromFile('Bombay');

//this is my callback function, a.k.a funcToRunWhenThingsAreDone
/*
const printOutCatBreed = breed => {
  console.log('Return Value: ', breed);
}; 

breedDetailsFromFile('Bombay', printOutCatBreed);
*/

module.exports = breedDetailsFromFile;