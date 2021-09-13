import "../css/actions.css";

const Actions = ({ getRepos, getStarred }) => {
  return (
    <div className="action-container">
      <button onClick={getRepos}>Ver Repositorios</button>
      <button onClick={getStarred}>Ver Favorios</button>
    </div>
  );
};

export default Actions;
