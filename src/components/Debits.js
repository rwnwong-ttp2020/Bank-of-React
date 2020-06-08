import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Debits extends Component {
    constructor () {
        super ();
        this.state = {
            debits: 
        }


    }
    render() {
        
      return (
          <div>
            Debits: {this.props.accountDebits}
          </div>
      );
    }
  }
  
  
  export default Debits;
  