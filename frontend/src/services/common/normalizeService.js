import objectService from './objectService';
import arrayService from './arrayService';

export default {
    add(state, item) {
        return {
            byId: objectService.insert(state.byId, item.id, item),
            ids: arrayService.insert(state.ids, 0, item.id)
        };
    },

    getById(state, id) {
        return Object.assign({}, state.byId[id]);
    },

    setById(state, id, item) {
        return {
            byId: {
                ...state.byId,
                [id]: item
            },
            ids: [...state.ids]
        };
    },

    deleteById(state, id) {
        const i = state.ids.indexOf(id);

        return {
            byId: objectService.remove(state.byId, id),
            ids: arrayService.remove(state.ids, i),
        };
    },

    getState() {
        return {
            byId: {},
            ids: []
        };
    }
};
