import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Button } from './styles';
import filters from '../../filters';
import { setFilter } from '../../actions';

const Filters = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <Container>
      {Object.keys(filters).map(key => (
        <Button
          type="button"
          key={key}
          active={filter === filters[key] ? 1 : 0}
          onClick={() => dispatch(setFilter(filters[key]))}
        >
          {filters[key]}
        </Button>
      ))}
    </Container>
  );
};

export default Filters;
