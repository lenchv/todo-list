
const localStorage = window.localStorage;

export default {
    setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },

    getItem(key, defaultValue) {
        const data = localStorage.getItem(key);
    
        try {
            return JSON.parse(data);
        } catch (e) {
            return defaultValue;
        }
    }
};
