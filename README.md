## TodoListApp

To run the rest end points, run:
 
```bash
mvn spring-boot:run
swagger spec will be available at http://localhost:8080/swagger-ui.html
```

To run solidity test

```bash
cd todolist-contracts
truffle test
```

To run java tests

```bash
mvn test
```

Contract is placed in below directory

```bash
\todolist-contracts\contracts\TodoList.sol
```

To compile solidity code in java

```bash
solc /pathTo/TodoList.sol --bin --abi --optimize -o /pathTo/
web3j solidity generate /pathTo/TodoList.bin /pathTo/TodoList.abi -o /pathTo/flexdapps -p com.company
```

```bash
TodoListTest.java is junit for Contract compiled in java
```

Steps to execute todolist endpoints exposed via microwebservice

- Summary
![screenshot](https://github.com/ankitamadan/todolist/blob/master/screenshots/step1.PNG)
- To list all todo items
![screenshot](https://github.com/ankitamadan/todolist/blob/master/screenshots/step2-1.PNG)
![screenshot](https://github.com/ankitamadan/todolist/blob/master/screenshots/step2-2.PNG)
- To add todo item, click on POST /todoList/add and there after click on Try it Out!
![screenshot](https://github.com/ankitamadan/todolist/blob/master/screenshots/step3-1.PNG)
![screenshot](https://github.com/ankitamadan/todolist/blob/master/screenshots/step3-2.PNG)
- To delete todo item, click on DELETE /todoList/delete and there after click on Try it Out!
![screenshot](https://github.com/ankitamadan/todolist/blob/master/screenshots/step4-1.PNG)
![screenshot](https://github.com/ankitamadan/todolist/blob/master/screenshots/step4-2.PNG)

- Test results of Contract
![screenshot](https://github.com/ankitamadan/todolist/blob/master/screenshots/step5.PNG)

## Tech stack and libraries
### Backend
- [Swagger](https://swagger.io/getting-started/)
- [Spring Boot](http://projects.spring.io/spring-boot/)
- [Web3j](https://web3j.io/)
- [Infura](https://infura.io/)
- [Rinkby Testnet](https://rinkby.etherscan.io/)
- [Spring Test](http://docs.spring.io/autorepo/docs/spring-framework/3.2.x/spring-framework-reference/html/testing.html)
- [JUnit](http://junit.org/)
- [Mockito](http://mockito.org/)
- [Maven](https://maven.apache.org/)

### Solidity Contracts

- [Truffle](https://truffleframework.com/)

### Deployed on aws

http://todolistapp-env.59ims3aahh.us-east-1.elasticbeanstalk.com/swagger-ui.html

### Verify Transactions on Rinkeby(add/delete)

Contract on rinkeby : https://rinkeby.etherscan.io/address/0xd58b16b1d4f7749a505621f64ab73207795cc24c