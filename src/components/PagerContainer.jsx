import React, {Component} from 'react';
import Pager from "./Pager";
class PagerContainer extends Component {
  state = {
    current: 3,
    total: 100,
    panelNumber: 4,
    limit: 5
  }

  handlePageChange = (newPage) => {
    this.setState({
      current: newPage
    })
  }

  render() {
    return (
        <div style={{
          padding: 10,
          border: '1px solid black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Pager {...this.state} onPageChange={this.handlePageChange} />
        </div>
    );
  }
}

export default PagerContainer;
