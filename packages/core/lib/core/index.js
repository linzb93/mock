const use = require("./use");

use("cname", require("../random/name/cname"));

module.exports = (template) => {
  return Object.keys(template).reduce((obj, key) => {
    const match = template[key].match(/^@(\w+)\((\S+)\)/);
    if (match) {
      const args = match[2].split(",");
      return {
        ...obj,
        [key]: use.database[match[1]](...args),
      };
    }
    return obj;
  }, {});
};
