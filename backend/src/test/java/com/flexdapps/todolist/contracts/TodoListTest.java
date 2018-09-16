package com.flexdapps.todolist.contracts;

import com.flexdapps.todolist.util.Bytes32Utility;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.web3j.abi.FunctionEncoder;
import org.web3j.abi.FunctionReturnDecoder;
import org.web3j.abi.TypeReference;
import org.web3j.abi.datatypes.*;
import org.web3j.abi.datatypes.generated.Bytes32;
import org.web3j.protocol.core.DefaultBlockParameterName;
import org.web3j.protocol.core.methods.request.Transaction;
import org.web3j.protocol.core.methods.response.TransactionReceipt;

import java.math.BigInteger;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;

import static junit.framework.TestCase.assertFalse;
import static org.hamcrest.core.Is.is;
import static org.junit.Assert.*;


@Ignore
public class TodoListTest extends Scenario {

    private String createTransactionHash;

    private TransactionReceipt createTransactionReceipt;

    private String contractAddress;

    @Before
    public void setUp(){

    }

    @Test
    public void testAddItemToDoList() throws Exception {
        boolean accountUnlocked = unlockAccount();
        assertTrue(accountUnlocked);

        createTransactionHash = sendCreateContractTransaction();

        createTransactionReceipt =
                waitForTransactionReceipt(createTransactionHash);

        assertThat(createTransactionReceipt.getTransactionHash(), is(createTransactionHash));

        assertFalse("Contract execution ran out of gas",
                createTransactionReceipt.getGasUsed().equals(GAS_LIMIT));

        contractAddress = createTransactionReceipt.getContractAddress();

        assertNotNull(contractAddress);

        verifyAddingItemsToList();

        verifyDeleteItemsToList();

        verifyTodoList();
    }

    private void verifyTodoList() throws Exception {
        Function listTodoListFunction = listTodoItemFunction();

        String responseValueList = callSmartContractFunction(listTodoListFunction, contractAddress);
        assertFalse(responseValueList.isEmpty());

        List<Type> responseList = FunctionReturnDecoder.decode(
                responseValueList, listTodoListFunction.getOutputParameters());

        assertThat(responseList.size(), is(0));
    }

    private void verifyDeleteItemsToList() throws Exception {
        Function deleteTodoListFunction = deleteTodoItemFunction(BigInteger.ZERO);
        String responseValueDelete = callSmartContractFunction(deleteTodoListFunction, contractAddress);
        assertFalse(responseValueDelete.isEmpty());

        List<Type> responseDelete = FunctionReturnDecoder.decode(
                responseValueDelete, deleteTodoListFunction.getOutputParameters());

        assertThat(responseDelete.size(), is(1));
        assertThat(responseDelete.get(0).getValue(), is(true));
    }

    private Function verifyAddingItemsToList() throws Exception {
        String itemToBeAddedToList = "New Item added";
        Function addTodoListFunction = createAddTodoItemFunction(Bytes32Utility.stringToBytes32(itemToBeAddedToList));

        String responseValue = callSmartContractFunction(addTodoListFunction, contractAddress);
        assertFalse(responseValue.isEmpty());

        List<Type> response = FunctionReturnDecoder.decode(
                responseValue, addTodoListFunction.getOutputParameters());

        assertThat(response.size(), is(1));
        return addTodoListFunction;
    }


    private String sendCreateContractTransaction() throws Exception {
        BigInteger nonce = getNonce("0xf53f5bde063e5d88501cb469faecccaddbd88f27");

        String encodedConstructor =
                FunctionEncoder.encodeConstructor(Collections.singletonList(new Utf8String("TodoList")));

        Transaction transaction = Transaction.createContractTransaction(
                "0xf53f5bde063e5d88501cb469faecccaddbd88f27",
                nonce,
                GAS_PRICE,
                GAS_LIMIT,
                BigInteger.ZERO,
                getTodoListSolidityBinary() + encodedConstructor);

        org.web3j.protocol.core.methods.response.EthSendTransaction
                transactionResponse = web3j.ethSendTransaction(transaction)
                .sendAsync().get();

        return transactionResponse.getTransactionHash();
    }

    private String callSmartContractFunction(
            Function function, String contractAddress) throws Exception {

        String encodedFunction = FunctionEncoder.encode(function);

        org.web3j.protocol.core.methods.response.EthCall response = web3j.ethCall(
                Transaction.createEthCallTransaction(
                        "0xf53f5bde063e5d88501cb469faecccaddbd88f27", contractAddress, encodedFunction),
                DefaultBlockParameterName.LATEST)
                .sendAsync().get();

        return response.getValue();
    }

    private String getTodoListSolidityBinary() throws Exception {
        Path path = Paths.get(getClass().getClassLoader().getResource("TodoList.bin").toURI());
        byte[] bytes = Files.readAllBytes(path);
        return new String(bytes);
    }

    Function createAddTodoItemFunction(byte[] _value) {
        return new Function(
                "addTodoItem",
                Arrays.<Type>asList(new Bytes32(_value)),
                Collections.<TypeReference<?>>emptyList());
    }


    Function deleteTodoItemFunction(BigInteger index) {
        return new Function(
                "deleteTodoItem",
                Arrays.<Type>asList(new org.web3j.abi.datatypes.generated.Uint256(index)),
                Collections.<TypeReference<?>>emptyList());
    }

    Function listTodoItemFunction() {
        return new Function("getTodoItems",
                Arrays.<Type>asList(),
                Arrays.<TypeReference<?>>asList(new TypeReference<DynamicArray<Bytes32>>() {
                }, new TypeReference<DynamicArray<Bool>>() {
                }));
    }
}