/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

class UsersDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props.data);
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
            {this.props.data.map((value) => {
              return (
                <tr>
                  <th scope="row">https://127.0.0.1</th>
                  <td>{value.account.id}</td>
                  <td>{value.account.username}</td>
                  <td>{value.currentStatus}</td>
                </tr>
              );
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
