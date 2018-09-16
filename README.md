## TodoListApp

TodoList app is broken into 3 parts

1. Frontend build in Angular : http://todolistapp-env.59ims3aahh.us-east-1.elasticbeanstalk.com
2. Backend build in java microvebservices to interact with solidit contract on ethereum 
        : http://todolistapp-env.59ims3aahh.us-east-1.elasticbeanstalk.com/swagger-ui.html
3. Contracts created in solidity

To run the backend, cd into the `backend` folder and run:
 
```bash
mvn spring-boot:run
swagger spec will be available at http://localhost:8080/swagger-ui.html
```

To run frontend, cd into the `frontend` folder and run:

```bash
npm install
npm start
The application will be accessible at http://localhost:4200.
```

To run frontend end to end test

```bash
ng e2e
```

To run frontend karma test

```bash
ng test
```

![screenshot](https://github.com/ankitamadan/todolist/blob/master/screenshots/karmatest.PNG)


### Frontend

Open http://todolistapp-env.59ims3aahh.us-east-1.elasticbeanstalk.com

Todo List is displayed
![screenshot](https://github.com/ankitamadan/todolist/blob/master/screenshots/getlist.PNG)

Delete todoitem highlighted below and click on new item to create new todolist item
![screenshot](https://github.com/ankitamadan/todolist/blob/master/screenshots/todolist-delete.png)
![screenshot](https://github.com/ankitamadan/todolist/blob/master/screenshots/newitem.PNG)

### Backend

To run java tests

```bash
mvn test
```


To compile solidity code in java

```bash
solc /pathTo/TodoList.sol --bin --abi --optimize -o /pathTo/
web3j solidity generate /pathTo/TodoList.bin /pathTo/TodoList.abi -o /pathTo/flexdapps -p com.company
```

```bash
TodoListTest.java is junit for Contract compiled in java
```

Open http://todolistapp-env.59ims3aahh.us-east-1.elasticbeanstalk.com/swagger-ui.html

Steps to execute todolist endpoints exposed via microwebservice

- Summary
![screenshot](https://github.com/ankitamadan/todolist/blob/master/screenshots/step1.PNG)
- To list all todo items
![screenshot](https://github.com/ankitamadan/todolist/blob/master/screenshots/step2-1.PNG)
![screenshot](https://github.com/ankitamadan/todolist/blob/master/screenshots/step2-2.PNG)
- To add todo item, click on POST /todoList/add and there after click on Try it Out!
![screenshot](https://github.com/ankitamadan/todolist/blob/master/screenshots/step3.PNG)
![screenshot](https://github.com/ankitamadan/todolist/blob/master/screenshots/step3-2.PNG)
- To delete todo item, click on DELETE /todoList/delete and there after click on Try it Out!
![screenshot](https://github.com/ankitamadan/todolist/blob/master/screenshots/step4-1.PNG)
![screenshot](https://github.com/ankitamadan/todolist/blob/master/screenshots/step4-2.PNG)


### Contracts

Contract is placed in below directory

```bash
\todolist-contracts\contracts\TodoList.sol
```

To run solidity test

```bash
cd todolist-contracts
truffle test
```

- Test results of Contract
![screenshot](https://github.com/ankitamadan/todolist/blob/master/screenshots/step5.PNG)

## Tech stack and libraries

### Frontend

- [Angular 6](https://angular.io/)

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

- [Solidity](https://solidity.readthedocs.io/en/v0.4.25/)
- [Truffle](https://truffleframework.com/)

### Deployed on aws

http://todolistapp-env.59ims3aahh.us-east-1.elasticbeanstalk.com

### Verify Transactions on Rinkeby(add/delete)

Contract on rinkeby : https://rinkeby.etherscan.io/address/0xd58b16b1d4f7749a505621f64ab73207795cc24c