// eslint-disable-next-line no-undef
const BatchDeposit = artifacts.require("BatchDeposit");

// 1 gwei
const depositContractAddress = "0xff50ed3d0ec03aC01D4C79aAd74928BFF48a7b2b";
const initialFee = 0;

module.exports = function (deployer) {
	deployer.deploy(BatchDeposit, depositContractAddress, initialFee);
};
