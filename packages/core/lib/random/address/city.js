const addrData = require("./address_ch.json");
module.exports = (isFull) => {
  const cityCodes = Object.keys(addrData).filter(
    (code) => code.endsWith("00") && code.slice(2, 4) === "00"
  );
  const cityList = Object.keys(cityCodes).reduce(
    (list, code) => list.concat(addrData[code]),
    []
  );
  const matchCode = parseInt(Math.random() * cityList.length);
  const match = cityList[matchCode];
  if (isFull !== "true") {
    return match;
  }
  const provinceCode = matchCode.toString().replace(/\d{2}$/, "00");
  return `${addrData[provinceCode]}${match}`;
};
