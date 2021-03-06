import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  };

  styles = {
    fontSize: 10,
    fontWeight: 'bold',
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(product)}
          className='btn btn-secondary btn-sm'
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  }
}

export default Counter;
