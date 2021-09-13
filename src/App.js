import AppContainer from "./components/AppContainer";
import "./css/app.css";

import ajax from "@fdaciuk/ajax";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
    };
  }

  handleSearch(e) {
    const user = e.target.value;
    const key = e.keyCode || e.which;
    const ENTER = 13;
    if (key === ENTER) {
      ajax()
        .get(`https://api.github.com/users/${user}`)
        .then((result) => {
          this.setState({
            userinfo: {
              username: result.name,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following,
            },
          });
        });
    }
  }

  getRepos(type) {
    return (e) => {
      ajax()
        .get(
          `https://api.github.com/users/${this.state.userinfo.login}/${type}`
        )
        .then((res) => {
          this.setState({
            [type]: res.map((repo) => {
              return {
                name: repo.name,
                html_url: repo.html_url,
              };
            }),
          });
        });
    };
  }

  render() {
    return (
      <AppContainer
        repos={this.state.repos}
        starred={this.state.starred}
        userinfo={this.state.userinfo}
        handleSearch={(e) => this.handleSearch(e)}
        getRepos={this.getRepos("repos")}
        getStarred={this.getRepos("starred")}
      />
    );
  }
}

export default App;
