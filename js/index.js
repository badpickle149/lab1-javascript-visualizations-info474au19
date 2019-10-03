/**
 * ANNOUNCEMENTS
 * - late hw policy
 * - office hours, 2-4 at CoLab on Fridays
 * - download live-server
 * - npm install -g live-server
 * - sudo npm install -g live-server 
 * - ask about js experience
 * - talk about Dubstech/terminal
 * 
 *      
 */

 /**
  * // find the min and max for each axis
  // returns an object with x and y axes min/max
  // we will need this data to decide what numbers to put on the ticks marks
  function findMinMax(data) {
    let greScores = data.map((row) => parseInt(row["GRE Score"]));
    let admissionRates = data.map((row) => parseFloat(row["Chance of Admit"]));

    // get x-axis min and max
    let xMax = Math.max.apply(Math, greScores);
    let xMin = Math.min.apply(Math, greScores);

    // round x-axis limits
    xMax = Math.round(xMax*10)/10;
    xMin = Math.round(xMin*10)/10;

    // get y-axis min and max
    let yMax = Math.max.apply(Math, admissionRates);
    let yMin = Math.min.apply(Math, admissionRates);

    // round y-axis limits to nearest 0.05
    yMax = Number((Math.ceil(yMax*20)/20).toFixed(2));
    yMin = Number((Math.ceil(yMin*20)/20).toFixed(2));

    // format axes limits and return it
    let allMaxsAndMins = {
      xMax : xMax,
      xMin : xMin,
      yMax : yMax,
      yMin : yMin
    }
    return allMaxsAndMins;

  }
  */