package com.flexdapps.todolist.model;

import com.flexdapps.todolist.contracts.TodoList;
import org.springframework.stereotype.Repository;
import org.web3j.crypto.Credentials;
import org.web3j.protocol.Web3j;

import javax.annotation.Resource;

@Repository
public class ContractModel {

    private TodoList todoList;

    public TodoList getTodoList() {
        return todoList;
    }

    public void setTodoList(TodoList todoList) {
        this.todoList = todoList;
    }
}
