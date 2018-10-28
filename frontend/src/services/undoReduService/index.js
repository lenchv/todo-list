const play = (snapshot, events) => events.reduce((result, event) => event(result), snapshot);

const undoReduService = snapshot => {
    let events = [];
    let pos = -1;

    return {
        add: (event) => {
            events = [...events.slice(0, ++pos), event];

            return play(snapshot, events);
        },
        undo() {
            if (this.canUndo()) {
                pos--;
            }

            return play(snapshot, events.slice(0, pos + 1));
        },
        redo() {
            if (this.canRedo()) {
                pos++;
            }

            return play(snapshot, events.slice(0, pos + 1));
        },
        canRedo() {
            return (pos + 1) < events.length;
        },
        canUndo() {
            return pos >= 0;
        }
    };
};

export default undoReduService;
