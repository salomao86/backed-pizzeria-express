const usuario = require("../models/usuario.model");
const jwt = require("jsonwebtoken");

const loginService = (email) => usuario.findOne({email});

const generateToken =  (usuarioId) =>  jwt.sign({ id: usuarioId }, process.env.SECRET, { expiresIn: 86400 });

module.exports = {loginService, generateToken};