function authenticateUser(req, res) {
  logger.info(`authenticatedUser :: Req User :: ${JSON.stringify(req.user)}`);
  return res.json({
    success: true,
    data: req.user,
  });
}

module.exports = authenticateUser;