const axios = require("axios");

const geoCode = async (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1Ijoic2F5ZWVkLW1haGRpIiwiYSI6ImNsNHFqa28yOTBreDEzanMybWlhNjlybXEifQ.GLcLV6P_GNfoIrJD9jlyuQ";
  try {
    const resp = await axios.get(url);
    if (resp.data.features.length === 0) {
      callback("location not found,Please Try another location!", undefined);
    }
    callback(undefined, {
      latitude: resp.data.features[0].center[0],
      longitude: resp.data.features[0].center[1],
      place_name: resp.data.features[0].place_name,
    });
  } catch (err) {
    // Handle Error Here
    if (err) {
      callback("Enable To connect please check Your connection", undefined);
    }
  }
};

module.exports = geoCode;
