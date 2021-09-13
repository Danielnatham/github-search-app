import TopBar from "./TopBar";
import User from "./User";
import Repos from "./Repos";
import Homepage from "./Homepage";
import Actions from "./Actions";

import { Container } from "@material-ui/core";
import React from "react";

const AppContainer = ({ repos, starred, userinfo, handleSearch }) => {
  return (
    <Container className="container" maxWidth={"sm"}>
      <TopBar handleSearch={handleSearch} />
      {!!userinfo && <User userinfo={userinfo} />}
      {!!userinfo && <Actions />}
      {!!repos.length && (
        <Repos className="repos" name="Repositorios" repos={repos} />
      )}
      {!!starred.length && (
        <Repos className="starrred" name="Favoritos" repos={starred} />
      )}
      {!starred.length && !userinfo && <Homepage />}
    </Container>
  );
};

export default AppContainer;
