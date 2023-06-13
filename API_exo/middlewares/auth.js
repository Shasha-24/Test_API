const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ error: "Accès non autorisé" });
  }

  try {
    const decoded = jwt.verify(token, "secret_key");
    req.user = decoded.user;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Token invalide" });
  }
};

module.exports = authenticateToken;
