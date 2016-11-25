import React, { Component } from 'react';
import './Task.css';

class Task extends Component {
  render () {
    console.log(this.state.taskTags);
    return (
      <div className="Task" id="">
        {console.log("hello")}
        {this.props.description} {this.state.status}
        <br/>
        <button className="button" onClick={this.button_text_setter}>{this.state.button_status}</button>
        <br/>
        <button className="remove_button" onClick={this.removeTask}>Remove task</button>
        <input type="text" className="tagInput"onChange={this.handleUpdate}/>
        &nbsp;&nbsp;
        <button className="addTag" onClick={this.addTag}>Add tag</button>
        <div> {this.state.taskTags.map(taskTag => (taskTag + ' '))} </div>


      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = { status: "", button_status: "Done!", taskTag: "", taskTags: []}
    this.done = this.done.bind(this);
    this.undone = this.undone.bind(this);
    this.button_text_setter = this.button_text_setter.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.addTag = this.addTag.bind(this);
  }

  handleUpdate(event) {
    this.setState({ taskTag: event.target.value});
  }

  addTag() {
    this.setState({ taskTags: [...this.state.taskTags, this.state.taskTag] });
    this.setState({ taskTag: ""});
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
    this.state.status === "" ? this.done() : this.undone();
  }

  removeTask() {
    this.props.removeTask(this.props.description);
  }
};

export default Task;
