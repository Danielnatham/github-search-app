import TopBar from "./components/TopBar";
import User from "./components/User";
import Repos from "./components/Repos";
import Actions from "./components/Actions";

import "./css/app.css";

import { Container } from "@material-ui/core";
import { Component } from "react";

class App extends Component {
  render() {
    //mock repo
    const mockRepos = [
      {
        name: "Repositorio 1",
        link: "myrepolink.com",
      },
      {
        name: "Repositorio 2",
        link: "myrepolink2.com",
      },
      {
        name: "Repositorio 3",
        link: "myrepolink3.com",
      },
    ];

    //mock repo
    const mockStarred = [
      {
        name: "Repositorio 1",
        link: "myrepolink.com",
      },
      {
        name: "Repositorio 2",
        link: "myrepolink2.com",
      },
      {
        name: "Repositorio 3",
        link: "myrepolink3.com",
      },
    ];

    return (
      <Container className="container" maxWidth={"sm"}>
        <TopBar />
        <User />
        <Actions />
        <div className="repo-container">
          <Repos className="repos" name="Repositorios" repos={mockRepos} />
          <Repos className="starrred" name="Favoritos" repos={mockStarred} />
        </div>
      </Container>
    );
  }
}

export default App;
