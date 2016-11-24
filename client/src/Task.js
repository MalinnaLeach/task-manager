import React, { Component } from 'react';
import './Task.css';

class Task extends Component {
  render () {
    return (
      <div className="Task" id="">
        {this.props.description} {this.state.status}
        <br/>
        <button className="button" onClick={this.done}>Done!</button>
        <button className="button" onClick={this.undone}>Undo!</button>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = { status: ""}
    this.done = this.done.bind(this);
    this.undone = this.undone.bind(this);
  }

  done() {
    this.setState({ status: "is done"})
  }

  undone() {
    this.setState({ status: ""})
  }
};

export default Task;
