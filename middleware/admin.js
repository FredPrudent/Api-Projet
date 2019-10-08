const config = require("config");

module.exports = function(req, res, next) {
  // 403 = Interdit
  if (!config.get("requiresAuth")) return next();

  if (!req.user.isAdmin) return res.status(403).send("Accès refusé.");

  next();
};
