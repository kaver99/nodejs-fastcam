import React, { Component } from 'react';

const Loading = () => <div>Loading..</div>;

class LoadingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }

  comment() {
    const con = 1;
    const res = con > 0 ? true : false;
    const and = loading && (<div>loading..</div>)
  }
  
  render() {
    const { loading } = this.state.loading;
    return (
      <>
        {
          loading && <Loading />
        }
      </>
    );
  }

}
  

export default LoadingComponent;
