package com.flexdapps.todolist.controller;

import com.flexdapps.todolist.contracts.TodoListOperations;
import com.flexdapps.todolist.model.Item;
import com.flexdapps.todolist.util.Web3jUtil;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.*;
import org.web3j.abi.datatypes.generated.Bytes32;
import org.web3j.utils.Numeric;

import java.math.BigInteger;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.ExecutionException;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/todoList/")
public class TodoListController {

    private static final Logger log = LoggerFactory.getLogger(TodoListController.class);

    @Autowired
    TodoListOperations todoListOperations;

    @Autowired
    private Web3jUtil web3jUtil;

    @ApiOperation(value = "Returns List of TodoItems")
    @ApiResponses(value = {@ApiResponse(code = 200, message = "Return of List of TodoItems")})
    @RequestMapping(method = RequestMethod.GET)
    public List<Item> getTodoList() throws Exception {
        return todoListOperations.getTodoListItem(getTodoListHashMap());
    }

    private Map<String, BigInteger> getTodoListHashMap() throws InterruptedException, ExecutionException {
        Object[] getItems1 = todoListOperations.getTodoListObjects();

        log.debug("Todo list successfully uploaded");

        return getTodoListItemMap(getItems1);
    }

    private Map<String, BigInteger> getTodoListItemMap(Object[] getItems1) {
        Map<String, BigInteger> hashMap = new HashMap<>();

        if (Objects.nonNull(getItems1)) {
            Item item = new Item();
            for (int i = 0; i < getItems1.length; i++) {
                byte[] value = ((Bytes32) getItems1[i]).getValue();
                String dataInString = web3jUtil.hexToASCII(Numeric.toHexStringNoPrefix(value));
                item.setName(dataInString.trim());
                hashMap.put(dataInString.trim(), new BigInteger(String.valueOf(i)));
            }
        }

        return hashMap;
    }

    @ApiOperation(value = "Add Todo Item in TodoItems")
    @ApiResponses(value = {@ApiResponse(code = 201, message = "Successfully Added")})
    @RequestMapping(method = RequestMethod.POST, value = "/add")
    public String addTodoItem(@RequestParam final String todoItem) throws ExecutionException, InterruptedException {
        byte[] byteArray = web3jUtil.stringToBytes32(todoItem);

        todoListOperations.addTodoList(byteArray);

        log.debug("Todo item successfully added");
        return "Todo Item successfully Added";
    }

    @ApiOperation(value = "Delete Todo Item from TodoList")
    @RequestMapping(method = RequestMethod.DELETE, value = "/delete")
    public String deleteTodoItem(@RequestParam final String todoItem) throws ExecutionException, InterruptedException {
        if (!CollectionUtils.isEmpty(getTodoListHashMap())) {
            BigInteger key = getTodoListHashMap().entrySet().stream()
                    .filter(map -> map.getKey().contains(todoItem))
                    .map(map -> map.getValue())
                    .findFirst().get();

            todoListOperations.deleteTodoItems(key);
            log.debug("Todo item successfully deleted");
            return "Todo Item successfully deleted";
        }
        return "No Item found";

    }

}

