const gestionError = (err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Oupsi, vous êtes con" });
};

module.exports = gestionError;
