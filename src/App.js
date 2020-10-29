/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ChatRoomDetails from './components/ChatRoomDetails';
import UsersDetails from './components/UsersDetails';
import { USERS, CHATROOMS } from './mock';
import Chatroom from '../objects/Chatroom';
import User from '../objects/User';

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
      users: this.formatData(USERS, User),
      chatrooms: this.formatData(CHATROOMS, Chatroom),
    });
  }

  render() {
    return (
      <div className="App">
        <h1>CI-FRONT</h1>
        <ChatRoomDetails data={this.state.chatrooms} />
        <UsersDetails data={this.state.users} />
      </div>
    );
  }
}

export default App;
