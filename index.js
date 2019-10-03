const mongoose = require('mongoose');
const tests = require ('./tests');
const express = require ('express');
const app = express();

//Connexion BDD
mongoose.connect('mongodb://localhost/BorisDoye')
    .then(() => console.log ('Connecté à MongoDB'))
    .catch(err=> console.error ("Connexion échouée à MongoDB...", err));

app.use(express.json());
app.use('/api/tests', tests);


//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Ecoute sur le port ${port}...`));

