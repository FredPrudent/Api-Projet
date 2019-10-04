FICHIER index.js =>

Ligne 1 à 5 : Import des dépendances et stockage de express dans une constante qui nous servira à créer les routes de l'API => 
     ligne 12   app.use('/api/tests', tests)
                             ^          ^
                        Clé = route, valeur = méthode appelée en fonction de cette route
                        


Ligne 7 à 9 : Connexion à la BDD => .then signifie "ce qu'il se passe APRES avoir réussi a se connecter
                                    .catch pour "attraper" les erreurs en cas d'échec
                                    
                                    

Ligne 16 et 17 :  J'ai pas trop compris à quoi ça servait mais apparemment c'est pour indiquer sur quel port il va écouter 
                  ( Pas compris l'intéret mais apparemment il faut le mettre )


Ligne 11 : Pour renvoyer les infos en format Json je crois





FICHIER Tests.js =>

Ligne 1 à 4 : Dépendance, dont Joi pour la validation des infos ( pouvoir mettre des conditions a nos éléments de la BDD, comme 
              une longueur minimal, maximal, etc
              

Ligne 7 à 19 : On utilise mongoose pour créer un objet se basant sur un Schéma ( Architecture type du type d'élément )
               const Test = mongoose.model('Test', new mongoose.Schema 
                      ^1             ^2     ^3                   ^4  
^1 : Test = Classe grâce a|^2:model = on utilise mongoose| ^3 : "Test" = Nom au singulier       |^4:Schema définit l'architecture type 
laquelle on pourra créer  |  pour créer un objet unique  |        de notre collection MongoDB   | de l'objet qu'on va créer ( name: String,
une nouvelle instance     |                              |                                      | date: Date, etc )
(test = new Test)         |                              |                                      |                   



Les routes  : On définit les urls appelé avec l'api, par exemple la première :  router.get ('/', async (req, res) => {
                                                                                const tests = await Test.find();
                                                                                res.send(tests)
Est une fonction asynchrone, qui ne sera donc exécuté qu'une fois qu'il aura obtenu une réponse ( principe de promesses)
le ('/')  indique la home de l'api, ce sera donc la page qu'on sera censé obtenir en appelant la méthode, ici par exemple ('/api/tests')
Avec la même logique, ('/:id') renverra donc vers ('/api/tests/:id)
Tout le reste n'est donc qu'une énumération de routes avec des traitements différent ( ajouter, supprimer, récupérer, modifier l'élément ciblé )



function validateTest : Fonction utilisant le package joi pour vérifier et valider ce qu'on transmet à notre BDD

Enfin, on exporte sous forme de module le fichier afin d'utiliser ces routes via index.js
module.exports = router;
const tests = require ('./tests');
puis l'import du Router d'express dans index.js afin d'utiliser le module tests : const router = express.Router();
