/* eslint-disable no-console */
/* eslint-disable react/no-is-mounted */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import PropTypes from 'prop-types';

class UsersResume extends React.Component {
  constructor(props) {
    super(props);

    this.state = { nb: 0, servers: [] };
  }

  componentDidMount() {
    this.props.data.forEach((elem) => {
      this.setState((previousState) => ({ nb: previousState.nb + elem.users.length }));
      this.state.servers.push(elem.server);
    });
  }

  render() {
    return (
      <div className="card DTdiv">
        <div className="card-body">Actives Users</div>
        <div className="card-text">
          There is {this.state.nb} actives users.
          <br />
          <small>On servers : </small>
          {this.state.nb > 0 ? (
            this.state.servers.map((value) => (
              <p key={Math.ceil(Math.floor(Math.random() * Math.floor(15)))}>{value}</p>
            ))
          ) : (
            <div />
          )}
        </div>
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
