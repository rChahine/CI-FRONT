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
              return (
                <tr>
                  <td>https://127.0.0.1</td>
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
