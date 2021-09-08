const User = () => {
  return (
    <div className="user-container">
      <img
        className="user-avatar"
        src="https://avatars.githubusercontent.com/u/1?v=4"
        alt="Foto de perfil"
      />
      <div className="user-card">
        <div className="user-name">
          <h3>
            <a href="http://github.com/mojombo">Tom Preston-Werner</a>
          </h3>
        </div>
        <div className="user-atributes">
          <ul>
            <li>Seguidores: 100</li>
            <li>Seguindo: 100</li>
            <li>Repositorios: 15</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default User;
