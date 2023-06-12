const gestionError = (err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Oupsi, vous vous êtes perdu" });
};

module.exports = gestionError;
