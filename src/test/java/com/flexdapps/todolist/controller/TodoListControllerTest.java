package com.flexdapps.todolist.controller;

import com.flexdapps.todolist.contracts.TodoListOperations;
import com.flexdapps.todolist.util.Web3jUtil;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.mockito.Mockito.when;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
public class TodoListControllerTest {

    private MockMvc mvc;
    @Mock
    private TodoListOperations todoListOperations;

    @Mock
    private Web3jUtil web3jUtil;

    @InjectMocks
    private TodoListController todoListController;

    @Before
    public void before() {
        mvc = MockMvcBuilders.standaloneSetup(todoListController).build();
    }

    @Test
    public void getToDoList() throws Exception {

        when(todoListOperations.getTodoListObjects()).thenReturn(new Object[0]);

        mvc.perform(MockMvcRequestBuilders.get("/todoList/"))
                .andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    public void addToDoList() throws Exception {
        mvc.perform(MockMvcRequestBuilders.post("/todoList/add")
                .param("todoItem", "New Item"))
                .andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    public void deleteToDoList() throws Exception {
        mvc.perform(MockMvcRequestBuilders.delete("/todoList/delete")
                .param("todoItem", "New Item"))
                .andExpect(MockMvcResultMatchers.status().isOk());
    }
}