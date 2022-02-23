const createModule0Handler = require('./createModule0Handler');
const fetchModule0ByEmailHandler = require('./fetchByEmailModule0Handler');


module.exports = (router) => {
  router.post('/module0/create', createModule0Handler);
  router.get('/module0/fetchByEmail', fetchModule0ByEmailHandler);
};