import normalizeService from "../common/normalizeService";
import toDoService from "./toDoService";

export const addItem = item => state => {
    return normalizeService.add(state, item);
};

export const completeItem = id => state => {
    const item = toDoService.getItemById(state, id);
    item.isCompleted = !item.isCompleted;
    
    return normalizeService.setById(state, id, item);
};

export const deleteItem = id => state => {
    return normalizeService.deleteById(state, id);
};

export const editItem = (id, text) => state => {
    const item = toDoService.getItemById(state, id);

    item.text = text;

    return normalizeService.setById(state, id, item);
};
