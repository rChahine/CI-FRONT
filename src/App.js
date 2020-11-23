/* eslint-disable react/destructuring-assignment */
import React from 'react';

import ChatRoomDetails from './components/ChatRoomDetails';
import UsersDetails from './components/UsersDetails';
import UsersResume from './components/UsersResume';
import ChatRoomResume from './components/ChatRoomResume';

import { USERS, CHATROOMS } from './mock';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      chatrooms: [],
    };
  }

  componentDidMount() {
    this.setState({
      users: USERS,
      chatrooms: CHATROOMS,
    });
  }

  render() {
    return (
      <div className="App container">
        <h1 className="my-3">CI-FRONT</h1>

        <div className="row my-3">
          <div className="col-4">
            <ChatRoomResume data={this.state.chatrooms} />
          </div>
          <div className="col-4">
            <UsersResume />
          </div>
        </div>

        <div className="row">
          <ChatRoomDetails data={this.state.chatrooms} />
        </div>

        <div className="row">
          <UsersDetails data={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
