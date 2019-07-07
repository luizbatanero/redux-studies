import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaPlus } from 'react-icons/fa';

import { addTodo } from '../../actions';
import { Form } from './styles';

const AddTodo = () => {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => setNewTodo(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTodo(newTodo));
    setNewTodo('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button type="submit" disabled={!newTodo}>
        <FaPlus />
      </button>
    </Form>
  );
};

export default AddTodo;
