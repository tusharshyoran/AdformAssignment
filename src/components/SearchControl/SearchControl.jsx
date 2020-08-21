import React from 'react';
import PropTypes from 'prop-types';

import './SearchControl.css';
function SearchControl({ handleSearch, searchText }) {
  return (
    <div className="search-right">
      <input
        type="text"
        value={searchText}
        placeholder="Search by name"
        onChange={handleSearch}
      ></input>
    </div>
  );
}
SearchControl.propTypes = {
  handleSearch: PropTypes.func,
  searchText: PropTypes.string,
};
export default SearchControl;
