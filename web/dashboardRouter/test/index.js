function helloWorld(req, res) {
  res.json({
    message: 'Hello Authenticated World',
    data: req.user,
  });
}

module.exports = (router) => {
  router.get('/helloWorld', helloWorld);
};