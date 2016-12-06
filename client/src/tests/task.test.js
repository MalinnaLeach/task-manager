import React, { Component } from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import App from '../App';
import Task from '../Task';

it('can mark a task as done', function () {
  const testDoc = ReactTestUtils.renderIntoDocument(<Task description='Visit Japan!' tags={[]} status=""/>);
  const button = ReactTestUtils.scryRenderedDOMComponentsWithClass(testDoc, "checkbox");
  expect(testDoc.state.status).toBe("");
  ReactTestUtils.Simulate.click(button[0]);
  expect(testDoc.state.status).toBe("is done");
});

it('can unmark a task as done', function () {
  const testDoc = ReactTestUtils.renderIntoDocument(<Task description='Visit Japan!' tags={[]} status=""/>);
  const button = ReactTestUtils.scryRenderedDOMComponentsWithClass(testDoc, "checkbox");
  ReactTestUtils.Simulate.click(button[0]);
  expect(testDoc.state.status).toBe("is done");
  ReactTestUtils.Simulate.click(button[0]);
  expect(testDoc.state.status).toBe("");
});

it('should add a tag', function () {
  const testDoc = ReactTestUtils.renderIntoDocument(<Task description='Visit Japan!' status="" tags={[]}/>);
  const button = ReactTestUtils.scryRenderedDOMComponentsWithClass(testDoc, "addTag");
  const addTagInput = ReactTestUtils.scryRenderedDOMComponentsWithClass(testDoc, "tagNameInput");
  addTagInput[0].value = 'travel';
  ReactTestUtils.Simulate.change(addTagInput[0]);
  expect(testDoc.state.tags).toEqual([]);
  ReactTestUtils.Simulate.click(button[0]);
  expect(testDoc.state.tags).toEqual([{name: 'travel'}]);
});
