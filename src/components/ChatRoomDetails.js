/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import Chatroom from '../objects/Chatroom';

class ChatRoomDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div />;
  }
}

ChatRoomDetails.propTypes = {
  data: PropTypes.arrayOf(Chatroom),
};

ChatRoomDetails.defaultProps = {
  data: [],
};

export default ChatRoomDetails;
