require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remind concert grace creek force turkey'; 
let testAccounts = [
"0x574ee98fd6f578f032b79f5851f52bdab2ec3ec48f03ee920d2563becab6c49c",
"0x7117cb957be1a126d9003f499a0ac29983a97714a8895b24badba2c50fbcea40",
"0x1fbb67f7fa22eede9929e7e5275f5fa3672065c954f6a8f80f201f5b737b45e3",
"0xca262d84ac6b6b38f654254001e513c22010d7964f9ad836ff126550aade98ae",
"0x5969926215582168ee74e99a5800d9b4a31306171dae31296fc03996c15d920e",
"0xebc82a3372ab72aea9d96fa84121d6aed1ffd92f76a186950f824de4af0a6abd",
"0x72e21ab7bf2697d9fa4746d4988411b645b63ca6a29f9baff1e10e5efe69d2ff",
"0x10dfffc0d8dd61b274bb5a38aecb8adcfa969bbb682776e7716aeae00b1a3488",
"0xfef48f306df51985aa0df10d2b74386b9f8253f0b20e19c3cab37df4160720b1",
"0x5eafad316d3123d176fdc6420d2b06ce4cc3bd634caca6cfeba239c263655f7e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

