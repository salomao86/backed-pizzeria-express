const { body, validationResult } = require('express-validator');

exports.validationBodyRules = [
    body('nome', 'nome é obrigatório').notEmpty(),
    body('sabor', 'sabor é obrigatório').notEmpty(),
    body('ingredientes', 'ingredientes é obrigatório').notEmpty(),
    body('valorUnitario', 'valorUnitario é obrigatório').isNumeric()
];

exports.checkRules = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};