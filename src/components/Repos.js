import React from "react";
import "../css/repos.css";

const Repos = ({ className, name, repos }) => {
  return (
    <div className={className}>
      <h4>{name}</h4>
      <ul>
        {repos.map((repos, index) => {
          return (
            <li key={index}>
              <a href={repos.html_url}>{repos.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Repos;
