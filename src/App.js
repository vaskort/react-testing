import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "./actions/users";
import User from "./components/User";
import "./App.css";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <button
          className="loadButton"
          onClick={this.props.getUsers}
          disabled={this.props.users.loading}
        >
          Load Users
        </button>
        {this.props.users.users.length > 0 && (
          <ul>
            {this.props.users.users.map(user => {
              return <User user={user} key={user.id} />;
            })}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// export default App;
