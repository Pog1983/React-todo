var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

// Does AddTodo exis?
describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  // Use spy to test if function called with valid input
  it('should call onAddTodo prop with valid data', () => {
    var todoText = 'something to do';
    // Create spy
    var spy = expect.createSpy();
    // Render AddTodo and pass spy to onAddTodo prop
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    // Access jQuery selector for component
    var $el = $(ReactDOM.findDOMNode(addTodo));

    // Set input and simulate a submission
    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    // Make assertion
    expect(spy).toHaveBeenCalledWith(todoText);
  });

  // Use spy to test if function called with valid input
  it('should not call onAddTodo prop with invalid data', () => {
    // Create spy
    var spy = expect.createSpy();
    // Render AddTodo and set onAddTodo to spy
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    // Access jQuery selector for component
    var $el = $(ReactDOM.findDOMNode(addTodo));

    // Set input and simulate a submission
    addTodo.refs.todoText.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    // Make assertion
    expect(spy).toNotHaveBeenCalled();
  });
});
