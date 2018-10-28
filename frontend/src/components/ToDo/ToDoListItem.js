import React from 'react';
import classNames from '../../helpers/commons/classNames';
import ToDoEdit from './ToDoEdit';

export default class ToDoListItem extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            edit: false,
        };

        this.onComplete = this.onComplete.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onStartEdit = this.onStartEdit.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    onComplete() {
        this.props.onComplete(this.props.id);
    }

    onDelete() {
        this.props.onDelete(this.props.id);
    }

    onStartEdit() {
        this.setState({
            edit: true,
        });
    }

    onEdit(text) {
        this.props.onEdit(this.props.id, text);

        this.setState({
            edit: false,
        });
    }

    onCancel() {
        this.setState({
            edit: false,
        });
    }

    render() {
        const className = classNames({
            'todo-list__item': true,
            'todo-list__item--crossed': this.props.isCompleted
        });

        return (
            <div className={className}>
                {
                    (!this.state.edit) ? (
                        <div>
                            <span onClick={this.onComplete}>{this.props.text}</span>
                            <button onClick={this.onStartEdit}>edit</button>
                            <button onClick={this.onDelete}>delete</button>
                        </div>
                    ) : (
                        <div>
                            <ToDoEdit onEdit={this.onEdit} text={this.props.text} />
                            <button onClick={this.onCancel}>cancel</button>
                        </div>                        
                    )
                }
            </div>
        );
    }
}
