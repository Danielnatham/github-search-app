import React from "react";
import "../css/topbar.css";
import ajax from "@fdaciuk/ajax";

const TopBar = () => {
  return (
    <div className="topbar-container">
      <h2 className="topbar-title">GitHub App</h2>
      <input
        type="search"
        placeholder="Pesquise um usuario"
        className="search-input"
        onKeyUp={(e) => {
          const user = e.target.value;
          const key = e.keyCode || e.which;
          const ENTER = 13;
          if (key == ENTER) {
            ajax()
              .get(`https://api.github.com/users/${user}`)
              .then((result) => {
                console.log(result);
              });
          }
        }}
      />
    </div>
  );
};

export default TopBar;
