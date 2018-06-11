const http = require('http');
const app = require('./config/express');
const db = require('./config/database');

http.createServer(app).listen(3000, () => {
    console.log('Server running on port 3000');
});

