const api = require('../api');
const path = require('path');

module.exports = app => {

    app.route('/user')
        .post(api.insert)
        .get(api.findAll);

    app.route('/user/:_id')
        .delete(api.remove)
        .get(api.findOne)
        .put(api.update);

    app.all('/*', (req, res) => {
        res.sendFile(path.join(app.get('clientPath'), 'index.html'));
    });
};