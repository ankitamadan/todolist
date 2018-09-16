package com.flexdapps.todolist.bootstrap;

import com.flexdapps.todolist.auth.AuthenticationService;
import com.flexdapps.todolist.model.ContractModel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.http.HttpService;

@Component
public class EthereumNodeBootstrap implements ApplicationListener<ContextRefreshedEvent> {

    private static final Logger log = LoggerFactory.getLogger(EthereumNodeBootstrap.class);

    @Autowired
    ContractModel contractModel;

    @Autowired
    private AuthenticationService authenticationService;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
        loadEthereumNode();
    }

    private void loadEthereumNode() {
        try {
            Web3j web3j = Web3j.build(new HttpService(
                    "https://rinkeby.infura.io/rKlhwcDuDYO1URbJat04"));

            log.info("Connected to Ethereum client version: "
                    + web3j.web3ClientVersion().send().getWeb3ClientVersion());
            contractModel.setTodoList(authenticationService.loadContract(web3j));
        } catch (Exception e) {
            log.error("Exception while loading ethereum node", e);
        }
    }
}
