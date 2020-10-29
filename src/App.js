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
      <div className="App">
        <h1>CI-FRONT</h1>

        <div className="row">
          <div className="col">
            <ChatRoomResume />
          </div>
          <div className="col">
            <UsersResume />
          </div>
        </div>

        <div className="row">
          <div className="col" />
          <div className="col" />
        </div>
        <ChatRoomDetails data={this.state.chatrooms} />
        <UsersDetails data={this.state.users} />
      </div>
    );
  }
}

export default App;
