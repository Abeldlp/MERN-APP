import React, { Component } from "react";
import axios from "axios";

export default class CreateCustomer extends Component {
  constructor(props) {
    super(props);

    this.onChangeUSername = this.onChangeUSername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
    };
  }

  onChangeUSername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
    };

    console.log(user);

    axios
      .post("http://localhost:5000/customers/add", user)
      .then((res) => console.log(res.data));

    this.setState({
      username: "",
    });
  }
  render() {
    return (
      <div>
        <h3>Create a new user</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label> Username: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUSername}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create user"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
