import React, { Component } from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import App from './../App';
import Task from './../Task';
import TaskList from './../TaskList';


it("creates a list of task", () => {
  const renderer = ReactTestUtils.createRenderer();
  renderer.render(< TaskList />, 'div');
  const result = renderer.getRenderOutput();
  expect(result.props.children[1][2].props.description).toEqual("Buy Mary some chocolates");
  expect(result.props.children[1].length).toEqual(3);
});

it("can remove a task", () => {
  const taskList = ReactTestUtils.renderIntoDocument(<TaskList/>);
  console.log(taskList);
  const button = ReactTestUtils.scryRenderedDOMComponentsWithClass(taskList, "button");
});


//
// it('can unmark a task as done', function () {
//   const testDoc = ReactTestUtils.renderIntoDocument(<Task description='Visit Japan!' />);
//   const button = ReactTestUtils.scryRenderedDOMComponentsWithClass(testDoc, "button");
//   ReactTestUtils.Simulate.click(button[0]);
//   expect(testDoc.state.status).toContain("is done");
//   expect(testDoc.state.button_status).toContain("Undo");
//   ReactTestUtils.Simulate.click(button[0]);
//   expect(testDoc.state.status).not.toContain("is done");
//   expect(testDoc.state.button_status).not.toContain("Undo");
// });
