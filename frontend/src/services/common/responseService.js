
export const decode = (response) => {
    const payload = response.data || {};

    return {
        data: payload.data || {},
        meta: payload.meta || {}
    };
};

export const decodeError = (error) => {
    if (error instanceof Error) {
        return error;
    } else if (error.response) {
        return new Error(decode(error.response).data.error);
    } else {
        return new Error(error);
    }
};

export default {
    decode,
    decodeError
};
