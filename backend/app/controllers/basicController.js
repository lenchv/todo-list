const normalizeResponse = (data, meta = {}) => ({
    data, meta
});

const successResponse = (response, data) => {
    return response.status(200).json(normalizeResponse(data));
};

const errorResponse = (response, error) => {
    return response.status(error.status || 403).json(normalizeResponse({
        error: error.message
    }));
};

module.exports = {
    successResponse,
    errorResponse,
};
