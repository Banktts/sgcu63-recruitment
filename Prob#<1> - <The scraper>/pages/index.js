import Router from 'next/router'
import React, { Component } from 'react';

class Page extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }

  render() {
    return (
      <div>
        
        {this.state.loading ? < div>Loading...</div>: <button onClick={() => { Router.push('/table'); this.setState({ loading: true }); }}>view table here!</button>}
      </div>
    )
  }
}




export default Page



