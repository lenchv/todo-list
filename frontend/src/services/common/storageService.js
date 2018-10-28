
const localStorage = window.localStorage;

export default {
    setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },

    getItem(key, defaultValue) {
        const data = localStorage.getItem(key);
    
        try {
            const json = JSON.parse(data);
        
            if (json === null || json === undefined) {
                return defaultValue;
            }

            return json;
        } catch (e) {
            return defaultValue;
        }
    }
};
