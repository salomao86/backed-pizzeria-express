const { body, validationResult} = require('express-validator');

const DATE_REGEX = "[0-9]{2}[/][0-9]{2}[/][0-9]{4}$";

exports.validationBodyRules = [
    body('produtos', 'É obrigatório ter pelo menos um produto na lista de produtos').isArray({min: 1}),
    body('produtos.*._id', 'É obrigatório o _id do produto').isMongoId(),
    body('produtos.*.quantidade', 'É obrigatório a quantidade do produto').isNumeric(),
    body('precoTotal', 'precoTotal é obrigatório').notEmpty(),
    body('usuarioId', 'usuarioId é obrigatório').notEmpty(),   
];

exports.validationStatusRules = [
    body('status', 'status preenchido não é válido').isIn(['Em aberto', 'Em andamento', 'Aguardando Pagamento', 'Finalizado']), 
];

exports.checkRules = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};