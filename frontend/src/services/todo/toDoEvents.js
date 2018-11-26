import normalizeService from "../common/normalizeService";
import toDoService from "./toDoService";

export const addItem = item => state => {
    return normalizeService.add(state, item);
};

export const deleteItem = id => state => {
    return normalizeService.deleteById(state, id);
};

export const editItem = (newItem) => state => {
    return normalizeService.setById(state, newItem.id, newItem);
};
