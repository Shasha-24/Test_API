const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/login", (req, res) => {
  // Ici, vous devez implémenter la logique de vérification des informations d'identification de l'utilisateur
  // Si les informations sont valides, vous pouvez générer un token JWT et le renvoyer dans la réponse

  const user = { id: 1, username: "John.Doe" };
  const token = jwt.sign({ user }, "secret_key");

  res.json({ token });
});

module.exports = router;
