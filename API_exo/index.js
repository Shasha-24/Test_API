const http = require("http");

const express = require("express");

const bodyParser = require("body-parser");

const productsRoutes = require("./routes/product");

const postRoutes = require("./routes/post");

const mongoose = require("mongoose");

const errorHandler = require("./middlewares/gestionError");
const gestionError = require("./middlewares/gestionError");

const app = express();

//place un middleware permet de parser le
//contenu du body des re
app.use(bodyParser.json());

app.use("/", (req, res, next) => {
  console.log("je suis un mddleware ");
  req.test = "hello";
  //res.send("hola amigo como esta ?  bien y tu ?");
  next();
});

app.use((req, res, next) => {
  console.log(req.test);
  next();
});

app.use("/product", productsRoutes);

app.use("/blog", postRoutes);

app.use(gestionError);

/*donnez l'acces a l'application aux routes qui permettent de gerer les produits creez un fichieer route et un controller qui correspond*/

app.listen(3003, () => {
  console.log("App is listening on port 3003");
});

mongoose
  .connect("mongodb+srv://Shayma24:Shasha_24@cluster0.qkpcxiv.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connexion à la base de données réussie !");
  })
  .catch((error) => {
    console.error("Erreur lors de la connexion à la base de données :", error);
  });
  
