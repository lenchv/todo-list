import { START_CHANGE_VALUE } from './constants';

export const changeValue = (value) => {
    return {
        type: START_CHANGE_VALUE,
        value
    };
};

