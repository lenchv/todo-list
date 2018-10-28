export default {
    remove(arr, i) {
        return [
            ...arr.slice(0, i),
            ...arr.slice(i + 1)
        ];
    },

    replace(arr, i, item) {
        return [
            ...arr.slice(0, i),
            item,
            ...arr.slice(i + 1)
        ];
    },

    insert(arr, i, item) {
        return [
            ...arr.slice(0, i),
            item,
            ...arr.slice(i)
        ];
    }
};
