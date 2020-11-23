/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

class ChatRoomResume extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">Actives Chatrooms</div>
        <p className="card-text">
          There is {this.props.data.length} actives chatrooms.
          <br />
          http://127.0.0.1:4567/
        </p>
      </div>
    );
  }
}

ChatRoomResume.propTypes = {
  data: PropTypes.arrayOf(Object),
};

ChatRoomResume.defaultProps = {
  data: [],
};

export default ChatRoomResume;
