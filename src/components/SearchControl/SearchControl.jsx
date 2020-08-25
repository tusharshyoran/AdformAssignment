import React from "react";
import PropTypes from "prop-types";

import "./SearchControl.css";
const SearchControl = ({ handleSearch, searchText }) => {
  return (
    <div className="search-right">
      <input
        type="text"
        value={searchText}
        placeholder="Search"
        onChange={handleSearch}
      ></input>
    </div>
  );
};
SearchControl.propTypes = {
  handleSearch: PropTypes.func,
  searchText: PropTypes.string,
};
export default SearchControl;
