const { body, validationResult } = require('express-validator');

const DATE_REGEX = "[0-9]{2}[/][0-9]{2}[/][0-9]{4}$";

exports.validationBodyRules = [
    body('pedidoId', 'É obrigatório o id do pedido').isMongoId(),
    body('formaPagamento', 'formaPagamento preenchida não é válida').isIn(['Cartao', 'Dinheiro', 'Pix']),
    body('usuarioId', 'usuarioId é obrigatório').notEmpty()
];

exports.validationStatusRules = [
    body('status', 'status preenchido não é válido').isIn(['Pendente', 'Pago']),  
];

exports.checkRules = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};