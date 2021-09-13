import AppContainer from "./components/AppContainer";
import "./css/app.css";

import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userinfo: {
        username: "Carlos",
        photo: "https://avatars.githubusercontent.com/u/1?v=4",
        login: "danielnatham",
        repos: 122,
        followers: 100,
        following: 110,
      },
      repos: [{ name: "repo", link: "#" }],
      starred: [{ name: "repo", link: "#" }],
    };
  }

  render() {
    return (
      <AppContainer
        repos={this.state.repos}
        starred={this.state.starred}
        userinfo={this.state.userinfo}
      />
    );
  }
}

export default App;
