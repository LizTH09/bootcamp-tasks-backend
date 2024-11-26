const errorHandler = (err, _, res, _) => {
    if (err instanceof Error) {
        const statusCode = err.statusCode || 500;
        const message = err.message || 'Internal Server Error';
        
        res.status(statusCode).json({
            error: {
                name: err.name,
                message: message,
                statusCode: statusCode,
            },
        });
    } else {
        res.status(500).json({
            error: {
                name: 'UnknownError',
                message: 'An unexpected error occurred',
                statusCode: 500,
            },
        });
    }
};

module.exports = errorHandler;