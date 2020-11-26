/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

class ChatRoomResume extends React.Component {
  constructor(props) {
    super(props);

    this.state = { nb: 0, servers: [] };
  }

  componentDidMount() {
    let nb = 0;

    this.props.data.forEach((elem) => {
      nb += elem.chatrooms.length;
      this.state.servers.push(elem.server);
    });

    this.setState({ nb });
  }

  render() {
    return (
      <div className="card DTdiv">
        <div className="card-body">Actives Chatrooms</div>
        <p className="card-text">
          There is {this.state.nb} actives chatrooms.
          <br />
          <small>On servers : </small>
          {this.state.nb > 0 ? this.state.servers.map((value) => <p>{value}</p>) : <div />}
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
