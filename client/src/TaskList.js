import React, { Component } from 'react';
import './TaskList.css';
import ReactDOM from 'react-dom';
import Task from './Task';
import AddTask from './addTask';
import superagent from 'superagent';

class TaskList extends Component {
  render () {
    return(
      <div id="tasklist">
        <h1 className="header"> Do Life</h1>
        <AddTask key="addTask" addTask = {this.addTask} />
        { this.renderTasks(this.removeTask) }
      </div>
    )
  };

  constructor(props) {
    super(props);
    this.state = { tasks: [], count: 0 };
    this.createTasks = this.createTasks.bind(this);
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  };

  createTasks() {
    const self = this;
    if (this.state.tasks.length === 0 && this.state.count === 0) {
      this.props.data.map(function(task) {
        self.state.tasks.push(task);
        if (self.state.count < task.id + 1) { self.state.count ++ };
      })
    }
  };


  renderTasks(removeTaskFunction) {
    this.createTasks()
    return this.state.tasks.map(task=> (
       <Task key={task.id} id={task.id} description={task.description} status= {task.status} tags= {task.Tags} removeTask={removeTaskFunction}/>
     ));
   }

   addTask(newDescription) {
     this.setState({ tasks: [...this.state.tasks, newDescription] });
   }

   removeTask(taskID) {
     const filteredTasks = this.state.tasks.filter(task => {
       return task.id !== taskID;
     });
     this.setState({ tasks: filteredTasks });
     superagent.post("/api/tasks/delete")
     .send({ id: taskID })
     .end(function(err, res){
       if (err) { console.log(err) }
      });
   }
}


export default TaskList;
