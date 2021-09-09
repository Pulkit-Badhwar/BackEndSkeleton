function helloWorld(req, res) {
  res.json({
    message: 'Hello World',
  });
}

module.exports = (router) => {
  router.get('/helloWorld', helloWorld);
};