import React from "react";
import propTypes from "prop-types";
import "../css/topbar.css";

const TopBar = ({ handleSearch }) => {
  return (
    <div className="topbar-container">
      <h2 className="topbar-title">GitHub App</h2>
      <input
        type="search"
        placeholder="Pesquise um usuario"
        className="search-input"
        onKeyUp={handleSearch}
      />
    </div>
  );
};

TopBar.prototype = {
  handleSearch: propTypes.func.isRequired,
};

export default TopBar;
