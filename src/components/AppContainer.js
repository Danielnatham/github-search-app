import TopBar from "./TopBar";
import User from "./User";
import Repos from "./Repos";
import Homepage from "./Homepage";
import Actions from "./Actions";

import { Container } from "@material-ui/core";
import React from "react";

const AppContainer = ({
  repos,
  starred,
  userinfo,
  handleSearch,
  getRepos,
  getStarred,
}) => {
  return (
    <Container className="container" maxWidth={"sm"}>
      {!starred.length && !userinfo && <Homepage />}
      <TopBar handleSearch={handleSearch} />
      {!!userinfo && <User userinfo={userinfo} />}
      {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}
      <div className="repos-container">
        {!!repos.length && (
          <Repos className="repos" name="Repositorios" repos={repos} />
        )}
        {!!starred.length && (
          <Repos className="starrred" name="Favoritos" repos={starred} />
        )}
      </div>
    </Container>
  );
};

export default AppContainer;
