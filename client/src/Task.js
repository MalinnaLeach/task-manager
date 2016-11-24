import React, { Component } from 'react';
import './Task.css';

class Task extends Component {
  render () {
    return (
      <div className="Task" id="">
        {this.props.description} {this.state.status}
        <br/>
        <button className="button" onClick={this.button_text_setter}>{this.state.button_status}</button>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = { status: "", button_status: "Done!"}
    this.done = this.done.bind(this);
    this.undone = this.undone.bind(this);
    this.button_text_setter = this.button_text_setter.bind(this);
  }

  done() {
    this.setState({ status: "is done"})
    this.setState({ button_status: "Undo"})
  }

  undone() {
    this.setState({ status: ""})
    this.setState({ button_status: "Done!"})
  }

  button_text_setter() {
    if (this.state.status === "") {
      this.done();
    } else {
      this.undone();
    }
  }
};

export default Task;
