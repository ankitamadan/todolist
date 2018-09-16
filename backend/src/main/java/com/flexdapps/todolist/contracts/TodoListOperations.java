package com.flexdapps.todolist.contracts;

import com.flexdapps.todolist.model.ContractModel;
import com.flexdapps.todolist.model.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.web3j.protocol.core.methods.response.TransactionReceipt;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;

@Service
public class TodoListOperations {

    @Autowired
    private ContractModel contractModel;

    public void deleteTodoItems(BigInteger key) throws InterruptedException, ExecutionException {
        contractModel.getTodoList().deleteTodoItem(key).sendAsync().get();
    }

    public TransactionReceipt addTodoList(byte[] byteArray) throws InterruptedException, ExecutionException {
        return contractModel.getTodoList().addTodoItem(byteArray).sendAsync().get();
    }

    public Object[] getTodoListObjects() throws InterruptedException, ExecutionException {
        return contractModel.getTodoList().getTodoItems().sendAsync().get().getValue1().toArray();
    }

    public List<Item> getTodoListItem(Map<String, BigInteger> itemListMap) {
        List<Item> mapList = new ArrayList<>();

        for (Map.Entry<String, BigInteger> mapEntry : itemListMap.entrySet()) {
            Item item = new Item();
            item.setId(mapEntry.getValue());
            item.setName(mapEntry.getKey());
            mapList.add(item);
        }
        return mapList;
    }

}
