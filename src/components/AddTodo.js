import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

class AddTodo extends Component {
  state = {
    newTodo: '',
  };

  handleChange = e => {
    this.setState({
      newTodo: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { newTodo } = this.state;
    const { addTodo } = this.props;

    addTodo(newTodo);
    this.setState({ newTodo: '' });
  };

  render() {
    const { newTodo } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={newTodo} onChange={this.handleChange} />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);
