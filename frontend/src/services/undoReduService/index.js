const play = (snapshot, events) => events.reduce((result, event) => event(result), snapshot);

const undoReduService = initialSnapshot => {
    let snapshot = initialSnapshot;
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
        },
        takeSnapshot() {
            snapshot = play(snapshot, events.slice(0, pos + 1));
            events = [];
            pos = -1;

            return snapshot;
        }
    };
};

export default undoReduService;
