import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FaPlus } from 'react-icons/fa';

import { addTodo } from '../../actions';
import { Form } from './styles';

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
      <Form onSubmit={this.handleSubmit}>
        <input type="text" value={newTodo} onChange={this.handleChange} />
        <button type="submit" disabled={!newTodo}>
          <FaPlus />
        </button>
      </Form>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);
