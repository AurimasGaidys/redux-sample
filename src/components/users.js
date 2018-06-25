import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as cartActions from "../actions/users";

import Home from "./home";
import Panel from "./panel";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  updateUser = item => {
    this.props.actions.updateUser(item);
  };

  render() {
    const users = this.props.users.map((item, idx) => {
      return <Panel key={idx} item={item} updateUser={this.updateUser} />;
    });
    return (
      <div>
        <Home reloadUsers={this.props.actions.addUser} />
        <div className="UserContainer">{users}</div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cartActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
