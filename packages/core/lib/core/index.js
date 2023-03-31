const use = require("./use");

use("cname", require("../random/name/cname"));
use("province", require("../random/address/province"));
use("city", require("../random/address/city"));
use("county", require("../random/address/county"));

module.exports = (template) => {
  return Object.keys(template).reduce((obj, key) => {
    // if (key.includes('|') && Array.isArray(template[key])) {
    //   const index = key.indexOf('|');
    //   const length = Number(key.slice(index + 1));

    // }
    const matchWrap = template[key].slice(1);
    const match = matchWrap.match(/^(\w+)(\((\S+)\))?$/);
    if (match) {
      const args = match[3] ? match[3].split(",") : [];
      return {
        ...obj,
        [key]: use.database[match[1]](...getParams(args)),
      };
    }
    return {
      ...obj,
      [key]: use.database[match[1]](),
    };
  }, {});
};

function getParams(args) {
  return args.map((arg) => {
    if (arg === "true") {
      return true;
    }
    if (arg === "false") {
      return false;
    }
    if (parseInt(arg) === Number(arg)) {
      return Number(arg);
    }
    return arg;
  });
}
