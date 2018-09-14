package com.flexdapps.todolist.auth;

import com.flexdapps.todolist.config.ResourceConfig;
import com.flexdapps.todolist.contracts.TodoList;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.web3j.crypto.Credentials;
import org.web3j.crypto.WalletUtils;
import org.web3j.protocol.Web3j;
import org.web3j.tx.Contract;
import org.web3j.tx.ManagedTransaction;

import java.io.File;
import java.nio.file.StandardCopyOption;

@Service
public class AuthenticationService {

    private static final Logger log = LoggerFactory.getLogger(AuthenticationService.class);

    @Autowired
    private ResourceConfig resourceConfig;

    public Credentials credentials() throws Exception {
        File todoListFile = new File("todolist.json");
        java.nio.file.Files.copy(resourceConfig.getResource().getInputStream(), todoListFile.toPath(), StandardCopyOption.REPLACE_EXISTING);

        log.debug("Wallet File successfully uploaded");

        return WalletUtils.loadCredentials(
                resourceConfig.getPassword(),
                todoListFile);
    }

    public TodoList loadContract(Web3j web3j) throws Exception {
        return TodoList.load(resourceConfig.getContractAddress(),
                web3j, credentials(),
                ManagedTransaction.GAS_PRICE, Contract.GAS_LIMIT);
    }
}
