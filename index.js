const express = require("express");
const app = express();


app.use(express.urlencoded({extended: false}));
app.use(express.json());

const moviesRoutes = require("./routes/movies");
app.use('/movies', moviesRoutes);


app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});

