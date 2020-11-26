/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */

import React from 'react';
import PropTypes from 'prop-types';

class UsersDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="col DTdiv card">
        <h2>Users</h2>
        <table className="table table-striped DTdiv">
          <thead>
            <tr>
              <td>Server</td>
              <td>User ID</td>
              <td>Username</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((value) => {
              return value.users.map((user) => {
                return (
                  <tr key={Math.ceil(Math.floor(Math.random() * Math.floor(15)))}>
                    <td>{value.server}</td>
                    <td>{user.account.id}</td>
                    <td>{user.account.username}</td>
                    <td>{user.currentStatus}</td>
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

UsersDetails.propTypes = {
  data: PropTypes.arrayOf(Object),
};

UsersDetails.defaultProps = {
  data: [],
};

export default UsersDetails;
