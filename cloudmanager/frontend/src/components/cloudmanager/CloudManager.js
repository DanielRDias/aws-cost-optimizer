import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAwsAccounts, deleteAwsAccount } from "../../actions/awsaccounts";

export class CloudManager extends Component {
  static propTypes = {
    awsaccounts: PropTypes.array.isRequired,
    getAwsAccounts: PropTypes.func.isRequired,
    deleteAwsAccount: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getAwsAccounts();
  }

  render() {
    return (
      <Fragment>
        <h2>AWS Accounts</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.awsaccounts.map((awsaccounts) => (
              <tr key={awsaccounts.id}>
                <td>{awsaccounts.id}</td>
                <td>{awsaccounts.name}</td>
                <td>{awsaccounts.email}</td>
                <td>{awsaccounts.message}</td>
                <td>
                  <button
                    onClick={this.props.deleteAwsAccount.bind(
                      this,
                      awsaccounts.id
                    )}
                    className="btn btn-danger btn-nm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  awsaccounts: state.awsaccounts.awsaccounts,
});

export default connect(mapStateToProps, { getAwsAccounts, deleteAwsAccount })(
  CloudManager
);
