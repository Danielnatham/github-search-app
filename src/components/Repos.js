const Repos = () => {
  return (
    <div className="repo-container">
      <h4>Repositorios: </h4>
      <ul className="repos">
        <li>
          <a href="#">Lista de Repositorios</a>
        </li>
      </ul>

      <h4>Favoritos: </h4>
      <ul className="starrred">
        <li>
          <a href="#">Lista de Favoritos</a>
        </li>
      </ul>
    </div>
  );
};

export default Repos;
