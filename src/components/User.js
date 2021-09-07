import {
  Button,
  Card,
  CardContent,
  Avatar,
  CardActions,
  Paper,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  button: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  title: {
    fontSize: 14,
  },
  content: {
    display: "flex",
    flexDirection: "collum",
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: 10,
  },
  paper: {
    margin: theme.spacing(1),
  },
}));

const User = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Avatar
        className={classes.large}
        src="https://avatars.githubusercontent.com/u/1?v=4"
        alt="Foto de perfil"
      />

      <CardContent className={classes.content}>
        <div className={classes.paper}>
          <h3>
            <a href="http://github.com/mojombo">Tom Preston-Werner</a>
          </h3>
        </div>
        <Paper className={classes.paper}>
          <ul className={classes.paper}>
            <li>Seguidores: 100</li>
            <li>Seguindo: 100</li>
            <li>Repositorios: 15</li>
          </ul>
        </Paper>
      </CardContent>

      <CardActions className={classes.button}>
        <Button variant="contained" color="primary">
          Ver Repositorios
        </Button>
        <Button variant="contained" color="primary">
          Ver Favorios
        </Button>
      </CardActions>
    </Card>
  );
};

export default User;
