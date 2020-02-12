import React, { Component } from "react";
import "./App.css";
import UserCard from "./Components/UserCard";
import FollowersCard from "./Components/Followers";
import axios from "axios";

class App extends Component {

  constructor() {
    super();
    this.state = {
      user: "",
      followers: []
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/mastaryan")
      .then(res => {
        // console.log(res);
        this.setState({
          user: res.data
        });
        // console.log(this.state.user)
      })
      .catch(err => console.log(err));

    axios
      .get("https://api.github.com/users/mastaryan/followers")
      .then(res => {
        // console.log(res);
        this.setState({
          followers: res.data
        });
        // console.log(this.state.followers);
      })
      .catch(err => console.log(err));
  }

    render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Github Users</h1>
        </header>
        <div class="container">
          <UserCard user={this.state.user} />
          <FollowersCard followers={this.state.followers} />
        </div>
      </div>
    );
  }
}

export default App;
