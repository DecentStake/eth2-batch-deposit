const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();

const {
	ETHERSCAN_API_KEY,
	SIGNER_PRIVATE_KEY,
	INFURA_API_KEY
} = process.env;

module.exports = {
	/**
	 * Networks define how you connect to your ethereum client and let you set the
	 * defaults web3 uses to send transactions. If you don't specify one truffle
	 * will spin up a development blockchain for you on port 9545 when you
	 * run `develop` or `test`. You can ask a truffle command to use a specific
	 * network from the command line, e.g
	 *
	 * $ truffle test --network <network-name>
	 */

	networks: {
		// Useful for testing. The `development` name is special - truffle uses it by default
		// if it's defined here and no other network is specified at the command line.
		// You should run a client (like ganache-cli, geth or parity) in a separate terminal
		// tab if you use this network and you must also set the `host`, `port` and `network_id`
		// options below to some value.
		//
		development: {
			host: "127.0.0.1", // Localhost (default: none)
			port: 7545, // Standard Ethereum port (default: none)
			network_id: "*", // Any network (default: none)
		},
		ci: {
			host: "trufflesuite-ganache-cli",
			port: 8545,
			network_id: "*",
		},
		coverage: {
			host: "127.0.0.1",
			port: 8545,
			network_id: "*",
			gas: 8000000,
		},
		goerli: {
			provider: () => new HDWalletProvider({
				privateKeys: [SIGNER_PRIVATE_KEY],
				providerOrUrl: `https://goerli.infura.io/v3/${INFURA_API_KEY}`
			}),
			network_id: 5,
		}
	},

	// Set default mocha options here, use special reporters etc.
	mocha: {
		// timeout: 100000
	},

	api_keys: {
		etherscan: ETHERSCAN_API_KEY
	},

	// Plugins
	plugins: ["solidity-coverage", "truffle-plugin-verify"],

	// Configure your compilers
	compilers: {
		solc: {
			version: "0.6.11", // Fetch exact version from solc-bin (default: truffle's version)
			docker: false, // Use "0.5.1" you've installed locally with docker (default: false)
			settings: {
				// See the solidity docs for advice about optimization and evmVersion
				optimizer: {
					enabled: true,
					runs: 5000000,
				},
				evmVersion: "byzantium",
			},
		},
	},
};
