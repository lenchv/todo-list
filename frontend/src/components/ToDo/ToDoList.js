import React from 'react';
import ToDoListItem from './ToDoListItem';

export default class ToDoList extends React.PureComponent {
    render() {
        const todos = this.props.todos;

        return (
            <div className='todo-list'>
                {todos.ids.map((id, i) => (
                    <ToDoListItem
                        id={id}
                        key={i}
                        text={todos.byId[id].text}
                        isCompleted={todos.byId[id].isCompleted}
                        onDelete={this.props.onDelete}
                        onComplete={this.props.onComplete}
                        onEdit={this.props.onEdit}
                    />
                ))}
            </div>
        );
    }
}
