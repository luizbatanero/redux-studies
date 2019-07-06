import React from 'react';
import { connect } from 'react-redux';

import filters from '../../filters';
import { setFilter } from '../../actions';

const Filters = ({ filter, setFilter }) => (
  <div>
    {Object.keys(filters).map(key => (
      <button
        type="button"
        key={key}
        active={filter === filters[key] ? 1 : 0}
        onClick={() => setFilter(filters[key])}
      >
        {filters[key]}
      </button>
    ))}
  </div>
);

const mapStateToProps = ({ filter }) => ({
  filter,
});

export default connect(
  mapStateToProps,
  { setFilter }
)(Filters);
