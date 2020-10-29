/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

class ChatRoomDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>test</p>
      </div>
    );
  }
}

ChatRoomDetails.propTypes = {
  data: PropTypes.arrayOf(Object),
};

ChatRoomDetails.defaultProps = {
  data: [],
};

export default ChatRoomDetails;
