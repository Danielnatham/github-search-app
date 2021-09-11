import TopBar from "./TopBar";
import User from "./User";
import Repos from "./Repos";
import Actions from "./Actions";

import { Container } from "@material-ui/core";
import React from "react";

const AppContainer = ({ repos, starred }) => {
  return (
    <Container className="container" maxWidth={"sm"}>
      <TopBar />
      <User />
      <Actions />
      <div className="repo-container">
        <Repos className="repos" name="Repositorios" repos={repos} />
        <Repos className="starrred" name="Favoritos" repos={starred} />
      </div>
    </Container>
  );
};

export default AppContainer;
