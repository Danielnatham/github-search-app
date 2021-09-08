import React from "react";
import "../css/topbar.css";

const TopBar = () => {
  return (
    <div className="topbar-container">
      <h2 className="topbar-title">GitHub App</h2>
      <input
        type="search"
        placeholder="Pesquise um usuario"
        className="search-input"
      />
    </div>
  );
};

export default TopBar;
