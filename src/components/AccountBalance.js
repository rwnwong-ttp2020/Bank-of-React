// src/components/AccountBalance.js

import React, {Component} from 'react';

class AccountBalance extends Component {
  render() {
    return (
        <div>
          accountBalance: {this.props.accountBalance}
        </div>
    );
  }
}

export default AccountBalance;