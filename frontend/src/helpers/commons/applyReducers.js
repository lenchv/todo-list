
export default (reducers, state, action) => {
    return Object.keys(reducers).reduce((state, key) => {
        const reducer = reducers[key];

        return Object.assign(
            {},
            state,
            { [key]: reducer(state[key], action) }
        );
    }, state);
};
