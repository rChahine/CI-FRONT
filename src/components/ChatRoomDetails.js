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
      <div className="col DTdiv card">
        <h2>Chatrooms</h2>
        <table className="table table-striped DTdiv">
          <thead>
            <tr>
              <td>Server</td>
              <td>Chatrooms name</td>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((server) => {
              return server.chatrooms.map((chatroom) => {
                return (
                  <tr key={Math.ceil(Math.floor(Math.random() * Math.floor(15)))}>
                    <td>{server.server}</td>
                    <td>{chatroom}</td>
                  </tr>
                );
              });
            })}
          </tbody>
        </table>
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
