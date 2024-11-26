class HttpError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

// 2xx: Success
class Ok extends HttpError {
    constructor(message = 'OK') {
        super(message, 200);
    }
}

class Created extends HttpError {
    constructor(message = 'Created') {
        super(message, 201);
    }
}

class Accepted extends HttpError {
    constructor(message = 'Accepted') {
        super(message, 202);
    }
}

class NoContent extends HttpError {
    constructor(message = 'No Content') {
        super(message, 204);
    }
}

// 3xx: Redirection
class MovedPermanently extends HttpError {
    constructor(message = 'Moved Permanently') {
        super(message, 301);
    }
}

class Found extends HttpError {
    constructor(message = 'Found') {
        super(message, 302);
    }
}

class NotModified extends HttpError {
    constructor(message = 'Not Modified') {
        super(message, 304);
    }
}

// 4xx: Client Errors
class BadRequest extends HttpError {
    constructor(message = 'Bad Request') {
        super(message, 400);
    }
}

class Unauthorized extends HttpError {
    constructor(message = 'Unauthorized') {
        super(message, 401);
    }
}

class PaymentRequired extends HttpError {
    constructor(message = 'Payment Required') {
        super(message, 402);
    }
}

class Forbidden extends HttpError {
    constructor(message = 'Forbidden') {
        super(message, 403);
    }
}

class NotFound extends HttpError {
    constructor(message = 'Not Found') {
        super(message, 404);
    }
}

class MethodNotAllowed extends HttpError {
    constructor(message = 'Method Not Allowed') {
        super(message, 405);
    }
}

class Conflict extends HttpError {
    constructor(message = 'Conflict') {
        super(message, 409);
    }
}

class Gone extends HttpError {
    constructor(message = 'Gone') {
        super(message, 410);
    }
}

class UnprocessableEntity extends HttpError {
    constructor(message = 'Unprocessable Entity') {
        super(message, 422);
    }
}

// 5xx: Server Errors
class InternalServerError extends HttpError {
    constructor(message = 'Internal Server Error') {
        super(message, 500);
    }
}

class NotImplemented extends HttpError {
    constructor(message = 'Not Implemented') {
        super(message, 501);
    }
}

class BadGateway extends HttpError {
    constructor(message = 'Bad Gateway') {
        super(message, 502);
    }
}

class ServiceUnavailable extends HttpError {
    constructor(message = 'Service Unavailable') {
        super(message, 503);
    }
}

class GatewayTimeout extends HttpError {
    constructor(message = 'Gateway Timeout') {
        super(message, 504);
    }
}

// Exportamos todas las clases
module.exports = {
    HttpError,

    // 2xx
    Ok,
    Created,
    Accepted,
    NoContent,

    // 3xx
    MovedPermanently,
    Found,
    NotModified,

    // 4xx
    BadRequest,
    Unauthorized,
    PaymentRequired,
    Forbidden,
    NotFound,
    MethodNotAllowed,
    Conflict,
    Gone,
    UnprocessableEntity,

    // 5xx
    InternalServerError,
    NotImplemented,
    BadGateway,
    ServiceUnavailable,
    GatewayTimeout,
};