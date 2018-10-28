import normalizeService from '../common/normalizeService';
import idService from '../common/idService';

export default {
    getItem({ text }) {
        return {
            id: idService.getId(),
            isCompleted: false,
            text,
        };
    },

    getItemById(todos, id) {
        return normalizeService.getById(todos, id);
    }
};
