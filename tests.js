const mongoose = require ('mongoose');
const express = require ('express');
const Joi = require ('@hapi/joi');
const router = express.Router();


const Test = mongoose.model('Test', new mongoose.Schema ({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    tags: [String],
    date: {
        type: Date, 
        default: Date.now
    }
}));

router.get ('/', async (req, res) => {
    const tests = await Test.find();
    res.send(tests)
    console.log (tests);
});

router.post ('/', async (req, res) => {
    const {error} = validateTest(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let test = new Test ({ name: req.body.name});
    test = await test.save();

    res.send(test);
});

router.put ('/:id', async (req, res) => {
    const {error} = validateTest(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const test = await Test.findByIdAndUpdate(req.params.id, { name: req.body.name}, {
       new: true 
    });

    if (!test) return res.status(400).send('Pas de test avec l\'id donné...');

    res.send(test);
});

router.delete ('/:id', async (req, res) => {
    const test = await Test.findByIdAndRemove(req.params.id);
    
    if (!test) return res.status(404).send('Le test avec l\'id donné n\'existe pas, suppression impossible...');

    res.send(test);
});

router.get('/:id', async (req, res) => {
    const test = await Test.findById(req.params.id);
    
    if (!test) return res.status(404).send('Le test avec l\'id donné n\'existe pas...');

    res.send(test);
});

function validateTest(test) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(test, schema);
}

module.exports = router;