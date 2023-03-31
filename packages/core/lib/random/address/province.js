const addrData = require("./address_ch.json");
const { sample } = require("../../utils");
module.exports = () => {
  const provinceCodes = Object.keys(addrData).filter((code) =>
    code.endsWith("0000")
  );
  const provinceList = Object.keys(provinceCodes).reduce(
    (list, code) => list.concat(addrData[code]),
    []
  );
  return sample(provinceList);
};
