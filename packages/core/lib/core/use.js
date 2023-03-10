const database = {};
module.exports = (name, plugin) => {
  database[name] = plugin;
};

module.exports.database = database;
