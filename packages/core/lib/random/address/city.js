const addrData = require("./address_ch.json");
const { sample } = require("../../utils");
/**
 *
 * @param {Boolean | String} args 是否同时显示完整 | 指定省份下的城市
 * @returns string
 */
module.exports = (...args) => {
  const isFull =
    (args.length === 1 && args[0] === true) ||
    (args.length === 2 && args[1] === true);
  const prefix = typeof args[0] === "string" ? args[0] : "";
  if (prefix) {
    // 匹配省份
    const provinceCode = Object.keys(addrData).find(
      (code) => addrData[code] === prefix
    );
    if (!provinceCode) {
      // 无法匹配的就返回空字符串
      return "";
    }
    const cityList = Object.keys(addrData).filter(
      (code) =>
        code.slice(0, 2) === provinceCode.slice(0, 2) && !code.endsWith("00")
    );
    if (isFull) {
      return `${prefix}${sample(cityList)}`;
    }
    return sample(cityList);
  }
  const cityCodes = Object.keys(addrData).filter(
    (code) => code.endsWith("00") && code.slice(2, 4) !== "00"
  );
  const cityCode = sample(cityCodes);
  const cityName = addrData[cityCode];
  if (isFull) {
    const provinceCode = cityCode.toString().replace(/\d{2}/, "00");
    const provinceName = addrData[provinceCode];
    return `${provinceName}${cityName}`;
  }

  return cityName;
};
