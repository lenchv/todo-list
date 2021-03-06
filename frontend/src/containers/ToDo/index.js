import React from 'react';
import ToDoAdd from '../../components/ToDo/ToDoAdd';
import ToDoList from '../../components/ToDo/ToDoList';

import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';

class ToDo extends React.PureComponent {
    constructor() {
        super();

        this.onAddItem = this.onAddItem.bind(this);
        this.onComplete = this.onComplete.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);

        this.onUndo = this.onUndo.bind(this);
        this.onRedo = this.onRedo.bind(this);
        this.onTakeSnapshot = this.onTakeSnapshot.bind(this);
    }

    onAddItem(text) {
        this.props.addItem(text);
    }

    onComplete(id) {
        this.props.completeItem(id);
    }

    onDelete(id) {
        this.props.deleteItem(id);
    }

    onEdit(id, text) {
        this.props.editItem(id, text);
    }

    onUndo() {
        this.props.undoTodo();
    }

    onRedo() {
        this.props.redoTodo();
    }

    onTakeSnapshot() {
        this.props.takeSnapshot();
    }

    componentDidMount() {
        this.props.loadTodoItems();
    }

    render() {
        return (
            <div className='todo'>
                <ToDoAdd
                    onAdd={this.onAddItem}
                />
                <ToDoList 
                    todos={this.props.todos}
                    onComplete={this.onComplete}
                    onDelete={this.onDelete}
                    onEdit={this.onEdit}
                />
                <button disabled={!this.props.hasUndo} onClick={this.onUndo}>undo</button>
                <button disabled={!this.props.hasUndo && !this.props.hasRedo} onClick={this.onTakeSnapshot}>snapshot</button>
                <button disabled={!this.props.hasRedo} onClick={this.onRedo}>redo</button>
            </div>
        );
    }
}

const withConnect = connect((state) => ({
    todos: state.todo.todos,
    hasRedo: state.todo.hasRedo,
    hasUndo: state.todo.hasUndo,
}), Object.assign({}, actions));

const withReducer = injectReducer('todo', reducer);
const withSaga = injectSaga('todo', saga);

export default compose(
    withReducer,
    withSaga,
    withConnect
)(ToDo);
