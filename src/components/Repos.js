import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Repos = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
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
