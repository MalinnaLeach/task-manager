import React, { Component } from 'react';
import './TaskList.css';
import Task from './Task';
import AddTask from './addTask'

class TaskList extends Component {
  render() {
    return(
      <div className="TaskList">
      <AddTask addTask={ this.addTask } className="addTask" />
      { this.renderTasks() }
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state =  { tasks: [ "Becoming an awesome dev", "Get paid lots of $$$", "Buy Mary some chocolates" ] };
    this.addTask = this.addTask.bind(this);
    this.banana = this.banana.bind(this);
  }

  renderTasks() {
    return this.state.tasks.map(description=> (
      <Task key={description} description={description} banana={this.banana}/>
    ));
  }

  addTask(newDescription) {
    this.setState({ tasks: [...this.state.tasks, newDescription] });
  }

  banana(task) {
    const filteredTask = this.state.tasks.filter(description => {
      return description !== task;
    });
    this.setState({ tasks: filteredTask });
  }
}

export default TaskList;
