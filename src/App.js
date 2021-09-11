import AppContainer from "./components/AppContainer";
import "./css/app.css";

import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
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

    return <AppContainer repos={mockRepos} starred={mockStarred} />;
  }
}

export default App;
