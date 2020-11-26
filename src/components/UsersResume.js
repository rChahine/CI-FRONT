/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import PropTypes from 'prop-types';

class UsersResume extends React.Component {
  constructor(props) {
    super(props);

    this.state = { nb: 0, servers: [] };
    this.data = props.data;
  }

  componentDidMount() {
    let nb = 0;

    this.data.forEach((elem) => {
      nb += elem.chatrooms.length;
      this.state.servers.push(elem.server);
    });

    this.setState({ nb });
  }

  render() {
    return (
      <div className="card DTdiv">
        <div className="card-body">Actives Users</div>
        <p className="card-text">
          There is {this.state.nb} actives users.
          <br />
          <small>On servers : </small>
          {this.state.nb > 0 ? this.state.servers.map((value) => <p>{value}</p>) : <div />}
        </p>
      </div>
    );
  }
}

UsersResume.propTypes = {
  data: PropTypes.arrayOf(Object),
};

UsersResume.defaultProps = {
  data: [],
};

export default UsersResume;
