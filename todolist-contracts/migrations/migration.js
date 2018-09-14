var Migrations = artifacts.require("./Migrations.sol");
var TodoList = artifacts.require("./TodoList.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(TodoList);
};
