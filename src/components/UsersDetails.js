/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

class UsersDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Users</h1>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Server</th>
              <th scope="col">User ID</th>
              <th scope="col">Username</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">http://mescouilles</th>
              <td>{this.props.data.account.id}</td>
              <td>{this.props.data.currentStatus}</td>
              <td>{this.props.data.currentStatus}</td>
            </tr>
            <tr>
              <th scope="row">http://mescouilles</th>
              <td>0</td>
              <td>toto</td>
              <td>INACTIVE</td>
            </tr>
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
