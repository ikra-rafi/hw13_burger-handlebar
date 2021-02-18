// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

const burger = {
  all(cb) {
    orm.selectAll('burgers', (res) => cb(res));
    //could use orm.selectAll, etc etc... 
  },
  // The variables cols and vals are arrays.
  create(cols, vals, cb) {
    orm.insertOne('burgers', cols, vals, (res) => cb(res));
    // could also use orm.insertOne...
  },
  update(objColVals, condition, cb) {
    orm.updateOne('burgers', objColVals, condition, (res) => cb(res));
    // orm.updateOne...
  // },
  // delete(condition, cb) {
  //   orm.delete('burgers', condition, (res) => cb(res));
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
