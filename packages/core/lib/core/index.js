const use = require("./use");

use("cname", require("../random/name/cname"));

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
        [key]: use.database[match[1]](...args),
      };
    }
    return {
      ...obj,
      [key]: use.database[match[1]](),
    };
  }, {});
};
