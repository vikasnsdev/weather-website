const request = require('request');

forecast = (lattitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/2e31e737c52c9ecf0f5b35ae6496bcf4/${longitude},${lattitude}`;
    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to fetch weather info', undefined);
        } else if (body.error){
            callback('unable to find', undefined);
        }else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. The high today is ${body.daily.data[0].temperatureHigh} with a low of ${body.daily.data[0].temperatureLow}. There is ${body.currently.precipProbability}% chance of rain.` );
        }
    })
}

module.exports = forecast;