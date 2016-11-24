import React, { Component } from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import App from './../../App';
import Task from './../../Task';
import AddTask from './../../addTask';
import TaskList from './../../TaskList';

it("can remove a task", () => {
  const taskList = ReactTestUtils.renderIntoDocument(<TaskList/>);
  const button = ReactTestUtils.scryRenderedDOMComponentsWithClass(taskList, "remove_button");
  ReactTestUtils.Simulate.click(button[0]);
  console.log(taskList.state.tasks);
  expect(taskList.state.tasks).not.toContain("Becoming an awesome dev");
});
