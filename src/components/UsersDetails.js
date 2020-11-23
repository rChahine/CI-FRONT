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
        <p>test</p>
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
