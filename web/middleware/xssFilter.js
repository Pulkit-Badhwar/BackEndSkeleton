const xss = require('xss');

const options = {
  whiteList: [],
  stripIgnoreTag: true,
  stripIgnoreTagBody: ['script'],
};

const xssObj = new xss.FilterXSS(options);

function xssFilter(app) {
  app.use((req, res, next) => {
    const arr = [];
    if (Object.keys(req.params).length > 0) arr.push(req.params);
    if (Object.keys(req.query).length > 0) arr.push(req.query);
    if (Object.keys(req.body).length > 0) arr.push(req.body);
    arr.forEach(obj => {
      Object.keys(obj).forEach(key => {
        obj[key] = typeof obj[key] === 'string' ? xssObj.process(obj[key]) : obj[key];
      });
    });
    next();
  });
}

module.exports = xssFilter;