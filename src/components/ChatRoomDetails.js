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
      <div className="row">
        {this.props.data.map((value) => {
          return <div key={value.id}>{value.name}</div>;
        })}
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
