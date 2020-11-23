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
      <div className="col">
        <h2>List of actives Chatrooms</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <td>Server</td>
              <td>Chatrooms name</td>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((value) => {
              return (
                <tr>
                  <td>http://127.0.0.1:4567/</td>
                  <td>{value.name}</td>
                </tr>
              );
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
