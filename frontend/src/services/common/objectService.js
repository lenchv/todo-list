export default {
    insert(obj, key, item) {
        return Object.assign(
            {},
            obj,
            { [key]: item }
        );
    },

    remove(obj, key) {
        const newObj = Object.assign({}, obj);
        delete newObj[key];

        return newObj;
    }
};
