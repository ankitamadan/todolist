package com.flexdapps.todolist.contracts;

import java.math.BigInteger;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.Callable;
import org.web3j.abi.TypeReference;
import org.web3j.abi.datatypes.Bool;
import org.web3j.abi.datatypes.DynamicArray;
import org.web3j.abi.datatypes.Function;
import org.web3j.abi.datatypes.Type;
import org.web3j.abi.datatypes.generated.Bytes32;
import org.web3j.crypto.Credentials;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.RemoteCall;
import org.web3j.protocol.core.methods.response.TransactionReceipt;
import org.web3j.tuples.generated.Tuple2;
import org.web3j.tx.Contract;
import org.web3j.tx.TransactionManager;

/**
 * <p>Auto generated code.
 * <p><strong>Do not modify!</strong>
 * <p>Please use the <a href="https://docs.web3j.io/command_line.html">web3j command line tools</a>,
 * or the org.web3j.codegen.SolidityFunctionWrapperGenerator in the 
 * <a href="https://github.com/web3j/web3j/tree/master/codegen">codegen module</a> to update.
 *
 * <p>Generated with web3j version 3.2.0.
 */
public class TodoList extends Contract {
    private static final String BINARY = "6060604052341561000f57600080fd5b6104938061001e6000396000f3006060604052600436106100615763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166312f616a281146100665780633b73a19214610090578063695873611461013c578063c627e61014610152575b600080fd5b341561007157600080fd5b61007c600435610182565b604051901515815260200160405180910390f35b341561009b57600080fd5b6100a3610255565b604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156100e75780820151838201526020016100cf565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561012657808201518382015260200161010e565b5050505090500194505050505060405180910390f35b341561014757600080fd5b61007c600435610355565b341561015d57600080fd5b6101686004356103b1565b604051918252151560208201526040908101905180910390f35b60008054819083106101935761024f565b50815b600054600019018110156102095760008054600183019081106101b557fe5b90600052602060002090600202016000828154811015156101d257fe5b600091825260209091208254600290920201908155600191820154908201805460ff191660ff909216151591909117905501610196565b60008054600019810190811061021b57fe5b600091825260208220600290910201818155600101805460ff191690558054906102499060001983016103e0565b50600191505b50919050565b61025d610411565b610265610411565b600061026f610411565b610277610411565b6000805493508360405180591061028b5750595b90808252806020026020018201604052509250836040518059106102ac5750595b90808252806020026020018201604052509150600090505b8381101561034a5760008054829081106102da57fe5b9060005260206000209060020201600001548382815181106102f857fe5b60209081029091010152600080548290811061031057fe5b600091825260209091206001600290920201015460ff1682828151811061033357fe5b9115156020928302909101909101526001016102c4565b509094909350915050565b600061035f610423565b82815260006020820181905280546001810161037b83826103e0565b600092835260209092208391600202018151815560208201516001918201805460ff191691151591909117905595945050505050565b60008054829081106103bf57fe5b60009182526020909120600290910201805460019091015490915060ff1682565b81548183558181151161040c5760020281600202836000526020600020918201910161040c919061043a565b505050565b60206040519081016040526000815290565b604080519081016040526000808252602082015290565b61046491905b80821115610460576000815560018101805460ff19169055600201610440565b5090565b905600a165627a7a7230582082642546698ec03648c37085f8243097b8597937ba748b01dbb05830587213100029";

    protected TodoList(String contractAddress, Web3j web3j, Credentials credentials, BigInteger gasPrice, BigInteger gasLimit) {
        super(BINARY, contractAddress, web3j, credentials, gasPrice, gasLimit);
    }

    protected TodoList(String contractAddress, Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit) {
        super(BINARY, contractAddress, web3j, transactionManager, gasPrice, gasLimit);
    }

    public RemoteCall<TransactionReceipt> deleteTodoItem(BigInteger index) {
        Function function = new Function(
                "deleteTodoItem", 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.generated.Uint256(index)), 
                Collections.<TypeReference<?>>emptyList());
        return executeRemoteCallTransaction(function);
    }

    public RemoteCall<Tuple2<List<byte[]>, List<Boolean>>> getTodoItems() {
        final Function function = new Function("getTodoItems", 
                Arrays.<Type>asList(), 
                Arrays.<TypeReference<?>>asList(new TypeReference<DynamicArray<Bytes32>>() {}, new TypeReference<DynamicArray<Bool>>() {}));
        return new RemoteCall<Tuple2<List<byte[]>, List<Boolean>>>(
                new Callable<Tuple2<List<byte[]>, List<Boolean>>>() {
                    @Override
                    public Tuple2<List<byte[]>, List<Boolean>> call() throws Exception {
                        List<Type> results = executeCallMultipleValueReturn(function);;
                        return new Tuple2<List<byte[]>, List<Boolean>>(
                                (List<byte[]>) results.get(0).getValue(),
                                (List<Boolean>) results.get(1).getValue());
                    }
                });
    }

    public RemoteCall<TransactionReceipt> addTodoItem(byte[] _value) {
        Function function = new Function(
                "addTodoItem", 
                Arrays.<Type>asList(new Bytes32(_value)),
                Collections.<TypeReference<?>>emptyList());
        return executeRemoteCallTransaction(function);
    }

    public RemoteCall<Tuple2<byte[], Boolean>> todoItems(BigInteger param0) {
        final Function function = new Function("todoItems", 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.generated.Uint256(param0)), 
                Arrays.<TypeReference<?>>asList(new TypeReference<Bytes32>() {}, new TypeReference<Bool>() {}));
        return new RemoteCall<Tuple2<byte[], Boolean>>(
                new Callable<Tuple2<byte[], Boolean>>() {
                    @Override
                    public Tuple2<byte[], Boolean> call() throws Exception {
                        List<Type> results = executeCallMultipleValueReturn(function);;
                        return new Tuple2<byte[], Boolean>(
                                (byte[]) results.get(0).getValue(), 
                                (Boolean) results.get(1).getValue());
                    }
                });
    }

    public static RemoteCall<TodoList> deploy(Web3j web3j, Credentials credentials, BigInteger gasPrice, BigInteger gasLimit) {
        return deployRemoteCall(TodoList.class, web3j, credentials, gasPrice, gasLimit, BINARY, "");
    }

    public static RemoteCall<TodoList> deploy(Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit) {
        return deployRemoteCall(TodoList.class, web3j, transactionManager, gasPrice, gasLimit, BINARY, "");
    }

    public static TodoList load(String contractAddress, Web3j web3j, Credentials credentials, BigInteger gasPrice, BigInteger gasLimit) {
        return new TodoList(contractAddress, web3j, credentials, gasPrice, gasLimit);
    }

    public static TodoList load(String contractAddress, Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit) {
        return new TodoList(contractAddress, web3j, transactionManager, gasPrice, gasLimit);
    }
}
