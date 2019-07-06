import React from 'react';
import { connect } from 'react-redux';

import { Container, Button } from './styles';
import filters from '../../filters';
import { setFilter } from '../../actions';

const Filters = ({ filter, setFilter }) => (
  <Container>
    {Object.keys(filters).map(key => (
      <Button
        type="button"
        key={key}
        active={filter === filters[key] ? 1 : 0}
        onClick={() => setFilter(filters[key])}
      >
        {filters[key]}
      </Button>
    ))}
  </Container>
);

const mapStateToProps = ({ filter }) => ({
  filter,
});

export default connect(
  mapStateToProps,
  { setFilter }
)(Filters);
