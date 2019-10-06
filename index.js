const mongoose = require('mongoose');
const express = require ('express');
const app = express();

const clients = require ('./routes/clients');
const collaborators = require ('./routes/collaborators');
const equipments = require ('./routes/equipments');
const pictures = require ('./routes/pictures');
const posts = require ('./routes/posts');
const professional_datas = require ('./routes/professional_datas');

//Connexion BDD
mongoose.connect('mongodb+srv://oclockteam:oclock2019;@borisdoyeproject-yznva.mongodb.net/admin?retryWrites=true&w=majority')
    .then(() => console.log ('Connecté à MongoDB'))
    .catch(err=> console.error ("Connexion échouée à MongoDB...", err));

app.use(express.json());
app.use('/api/clients', clients);
app.use('/api/collaborators', collaborators);
app.use('/api/equipments', equipments);
app.use('/api/pictures', pictures);
app.use('/api/posts', posts);
app.use('/api/professional_datas', professional_datas);


//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Ecoute sur le port ${port}...`));

