import React from 'react';

export default class ToDoEdit extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            value: ''
        };

        this.onEdit = this.onEdit.bind(this);
        this.onFinishEdit = this.onFinishEdit.bind(this);
    }

    onEdit(e) {
        this.setState({
            value: e.target.value
        });
    }

    onFinishEdit(e) {
        if (e.key !== 'Enter') {
            return;
        }

        this.props.onEdit(this.state.value);

        this.setState({
            value: ''
        });
    }

    componentDidMount() {
        this.setState({
            value: this.props.text
        });
    }

    render() {
        return (
            <input type='text' value={this.state.value} onChange={this.onEdit} onKeyPress={this.onFinishEdit} />
        );
    }
}
