"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var routes = express_1.Router();
var data = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "email": "Sincere@april.biz",
        "username": "Bret",
        "senha": 1
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "email": "Shanna@melissa.tv",
        "username": "Antonette",
        "senha": 2
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "email": "Nathan@yesenia.net",
        "username": "Samantha",
        "senha": 3
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "email": "Julianne.OConner@kory.org",
        "username": "Karianne",
        "senha": 4
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "email": "Lucio_Hettinger@annie.ca",
        "username": "Kamren",
        "senha": 5
    }
];
routes.get('/', function (req, res) {
    return res.json(data);
});
routes.get('/user/:id', function (req, res) {
    var id = req.params.id;
    var client = data[parseInt(id)];
    return res.json(client);
});
routes.post('/addUser', function (req, res) {
    var body = req.body;
    if (!body) {
        return res.status(400).end();
    }
    data.push(body);
    return res.json(body);
});
routes.delete('/delete/:id', function (req, res) {
    var id = req.params.id;
    data.splice(parseInt(id), 1);
    return res.send(data);
});
exports.default = routes;
