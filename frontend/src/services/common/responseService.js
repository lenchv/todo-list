
export const decode = (response) => {
    const payload = response.data || {};

    return {
        data: payload.data || {},
        meta: payload.meta || {}
    };
};

export default {
    decode
};
