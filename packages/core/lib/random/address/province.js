const addrData = require("./address_ch.json");
module.exports = () => {
  const provinceCodes = Object.keys(addrData).filter((code) =>
    code.endsWith("0000")
  );
  const provinceList = Object.keys(provinceCodes).reduce(
    (list, code) => list.concat(addrData[code]),
    []
  );
  return provinceList[parseInt(Math.random() * provinceList.length)];
};
