const axios = require("axios");
const weather = async (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=65ed4a551e6818814101a7f3ada27311&query=${latitude},${longitude}`;
  try {
    const result = await axios.get(url);
    console.log(result.data.current.feelslike);
    if (result.length === 0) {
      callback("location not found,Please Try another location!", undefined);
    }
    callback(
      undefined,
      `The current weather temperature is ${result.data.current.temperature} but it feels like ${result.data.current.feelslike} `,
      result.current
    );
  } catch (err) {
    callback("Enable To connect please check Your connection", undefined);
  }
};
module.exports = weather;
