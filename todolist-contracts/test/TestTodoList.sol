pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "../contracts/TodoList.sol";

contract TestTodoList {

  bytes32 constant _bytes = "First Item"; 	

  function testAddValue() public {
    TodoList todoList = new TodoList();

    bool value = todoList.addTodoItem(getAsBytes());
	bool expected = true;

    Assert.equal(value, expected, "Value added");
  }
   
  function testDeleteValue() public {
    TodoList todoList = new TodoList();

	uint itemToBeDeleted = 0;
	
	todoList.addTodoItem(getAsBytes());
    bool value = todoList.deleteTodoItem(itemToBeDeleted);
	bool expected = true;

    Assert.equal(value, expected, "Value deleted");
  }
  
  function  getAsBytes() public returns(bytes32) {
    return _bytes;
  }
  
  
}