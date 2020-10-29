/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ChatRoomDetails from './components/ChatRoomDetails';
import UsersDetails from './components/UsersDetails';
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
        <ChatRoomDetails data={this.state.chatrooms} />
        <UsersDetails data={this.state.users} />
      </div>
    );
  }
}

export default App;
