import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      // Returns an error alert for each error message
      for (var errorKey in error.msg) {
        if (error.msg.hasOwnProperty(errorKey)) {
        }
        alert.error(`${errorKey}: ${error.msg[errorKey]}`);
      }
    }
    if (message !== prevProps.message) {
      if (message.awsAccountDeleted) alert.success(message.awsAccountDeleted);
      if (message.awsAccountCreated) alert.success(message.awsAccountCreated);
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
