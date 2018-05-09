var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
  // Check if TodoList exists
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  // Check if TodoList component properly renders Todo list items
  it('should render on Todo component for each todo item', () => {
    // Establishing a mock array of components to check
    var todos = [{
      id: 1,
      text: 'do something'
    }, {
      id: 2,
      text: 'do something else'
    }];
    // Rendering TodoList for test and passing in mock props
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    // Check how many todo components are rendered in TodoList
    // .scryRenderComponentsWithType takes 2 arguments: item to check and its class.
    var todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    // Compare the above returned length against actual array length
    expect(todoComponents.length).toBe(todos.length)
  });
});
