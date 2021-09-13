import "../css/user.css";

import React from "react";
import PropTypes from "prop-types";

const User = ({ userinfo }) => {
  return (
    <div className="user-container">
      <img className="user-avatar" src={userinfo.photo} alt="Foto de perfil" />

      <div className="user-card">
        <div className="user-name">
          <h4>
            <a href={`http://github.com/${userinfo.login}`}>
              {userinfo.username}
            </a>
          </h4>
        </div>

        <div className="user-atributes">
          <ul>
            <li>Seguidores: {userinfo.followers}</li>
            <li>Seguindo: {userinfo.following}</li>
            <li>Repositorios: {userinfo.repos}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

User.propTypes = {
  userinfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
  }),
};

export default User;
