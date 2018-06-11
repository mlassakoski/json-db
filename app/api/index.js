const db = require('../../config/database');

const api = {}

api.insert = (req, res) => {
    const doc = req.body;
    db.insert(doc, (err, newDoc) => {
        if (err) return console.log(err);
        res.json(newDoc._id);
    });
};

api.findOne = (req, res) => {
    db.findOne({
        _id: req.params._id
    }, (err, doc) => {
        if (err) return console.log(err);
        res.json(doc);
    });
};

api.update = (req, res) => {
    db.update({
        _id: req.params._id
    }, req.body, (err, numReplaced) => {
        if (err) return console.log(err);
        if (numReplaced) res.status(200).end();
        res.status(500).end();
        res.status(200).end();
    });
};

api.findAll = (req, res) => {
    db.find({}).sort({
        name: 1
    }).exec((err, doc) => {
        if (err) return console.log(err);
        res.json(doc);
    });
};

api.remove = (req, res) => {
    db.remove({
        _id: req.params._id
    }, {}, (err, numRemoved) => {
        if (err) return console.log(err);
        if (numRemoved) res.status(200).end();
        res.status(500).end();
    });
};

module.exports = api;