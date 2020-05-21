import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addAwsAccount } from "../../actions/awsaccounts";

export class Form extends Component {
  state = {
    name: "",
    email: "",
    accountid: "",
    account_name: "",
    message: "",
  };

  static propTypes = {
    addAwsAccount: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { name, email, accountid, account_name, message } = this.state;
    const awsaccounts = { name, email, accountid, account_name, message };
    this.props.addAwsAccount(awsaccounts);
    this.setState({
      name: "",
      email: "",
      accountid: "",
      account_name: "",
      message: "",
    });
  };

  render() {
    const { name, email, accountid, account_name, message } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add AWS Account</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Account ID</label>
            <input
              className="form-control"
              type="text"
              name="accountid"
              onChange={this.onChange}
              value={accountid}
            />
          </div>
          <div className="form-group">
            <label>Account Name</label>
            <input
              className="form-control"
              type="text"
              name="account_name"
              onChange={this.onChange}
              value={account_name}
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              className="form-control"
              type="text"
              name="message"
              onChange={this.onChange}
              value={message}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addAwsAccount })(Form);
