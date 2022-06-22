const express = require('express')
const app = express()
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

app.use(express.json());

const Users = require("./models/Users");
const port = 3030
const JWTsecret = "teste123";

app.get('/', (req, res) => {
    res.send('Aqui e a API da Loja')
})