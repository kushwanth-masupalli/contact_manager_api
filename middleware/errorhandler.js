const { constants } = require('../routes/constants.js');

const errorhandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: 'VALIDATION_ERROR',
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.UNAUTHORIZED:
            res.json({
                title: 'UNAUTHORIZED',
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.FORBIDDEN:
            res.json({
                title: 'FORBIDDEN',
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.NOT_FOUND:
            res.json({
                title: 'NOT_FOUND',
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.SERVER_ERROR:
        default:
            res.json({
                title: 'SERVER_ERROR',
                message: err.message,
                stackTrace: err.stack,
            });
            break;
    }
};

module.exports = errorhandler;