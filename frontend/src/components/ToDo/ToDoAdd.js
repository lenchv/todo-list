import React from 'react';
import ToDoInput from './ToDoInput';
import ToDoButton from './ToDoButton';

export default class ToDoAdd extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            value: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onAdd = this.onAdd.bind(this);
    }

    onChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    onAdd() {
        this.props.onAdd(this.state.value);

        this.setState({
            value: ''
        });
    }

    render() {
        return (
            <div className='todo-add'>
                <ToDoInput value={this.state.value} onChange={this.onChange} />
                <ToDoButton onClick={this.onAdd}>add</ToDoButton>
            </div>
        );
    }
}
