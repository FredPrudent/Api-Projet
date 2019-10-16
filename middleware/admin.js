const config = require("config");

module.exports = function(req, res, next) {
  
  if (!config.get("requiresAuth")) return next();
    // 403 = Interdit
  if (!req.user.isAdmin) return res.status(403).send("Accès refusé.");

  next();
};
