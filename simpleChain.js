/* ===== Executable Test ==================================
|  Use this file to test your project.
|  =========================================================*/

const BlockChain = require('./BlockChain.js');
const Block = require('./Block.js');

console.log("***** simpleChain.js creating new instance of Blockchain.Blockchaine...");
let myBlockChain = new BlockChain.Blockchain();

setTimeout(function () {
	console.log("***** simpleChain.setTimeout ...")
}, 10000);

/******************************************
 ** Function for Create Tests Blocks   ****
 ******************************************/

/*
(function theLoop (i) {
    console.log("***** simpleChain.theLoop...");
	setTimeout(function () {
        console.log("***** simpleChain.theLoop creating new block...");
		let blockTest = new Block.Block("Test Block - " + (i + 1));
		// Be careful this only will work if your method 'addBlock' in the Blockchain.js file return a Promise
        console.log("***** simpleChain.theLoop calling myBlockChain.addBlock...");
		myBlockChain.addBlock(blockTest).then((result) => {
            console.log("***** simpleChain.theLoop logging result from addBlock...");
			console.log(result);
			i++;
			if (i < 10) theLoop(i);
		});
	}, 10000);
  })(0);
*/

/***********************************************
 ** Function to get the Height of the Chain ****
 ***********************************************/

/*
// Be careful this only will work if `getBlockHeight` method in Blockchain.js file return a Promise
myBlockChain.getBlockHeight().then((height) => {
	console.log("######## simpleChain myBlockChain.getBlockHeight() FULFILLED ########");
	console.log(height);
}).catch((err) => { console.log(err);});
/*

/***********************************************
 ******** Function to Get a Block  *************
 ***********************************************/

/*
// Be careful this only will work if `getBlock` method in Blockchain.js file return a Promise
myBlockChain.getBlock(0).then((block) => {
	console.log("######## simpleChain myBlockChain.getBlock(0) FULFILLED ########");
	console.log(JSON.stringify(block));
}).catch((err) => { console.log(err);});
*/

/***********************************************
 ***************** Validate Block  *************
 ***********************************************/

/*
// Be careful this only will work if `validateBlock` method in Blockchain.js file return a Promise
myBlockChain.validateBlock(0).then((valid) => {
	console.log("######## simpleChain myBlockChain.validateBlock FULFILLED ########");
	console.log(valid);
})
.catch((error) => {
	console.log(error);
});
*/

/** Tampering a Block this is only for the purpose of testing the validation methods */
/*
myBlockChain.getBlock(5).then((block) => {
	let blockAux = block;
	blockAux.body = "Tampered Block";
	myBlockChain._modifyBlock(blockAux.height, blockAux)
		.then((blockModified) => {
			if(blockModified){
				myBlockChain.validateBlock(blockAux.height).then((valid) => {
					console.log(`######## Block #${blockAux.height}, is valid? = ${valid}`);
				})
				.catch((error) => {
					console.log(error);
				})
			} else {
				console.log("######## The Block wasn't modified");
			}
		}).catch((err) => { console.log(err);});
}).catch((err) => { console.log(err);});

*/
myBlockChain.getBlock(6).then((block) => {
	let blockAux = block;
	blockAux.previousBlockHash = "jndininuud94j9i3j49dij9ijij39idj9oi";
	myBlockChain._modifyBlock(blockAux.height, blockAux).then((blockModified) => {
		if(blockModified){
			console.log("######## The Block was modified");
		} else {
			console.log("######## The Block wasn't modified");
		}
	}).catch((err) => { console.log(err);});
}).catch((err) => { console.log(err);});



/***********************************************
 ***************** Validate Chain  *************
 ***********************************************/

/*
// Be careful this only will work if `validateChain` method in Blockchain.js file return a Promise
myBlockChain.validateChain().then((errorLog) => {
	if(errorLog.length > 0){
		console.log("The chain is not valid:");
		errorLog.forEach(error => {
			console.log(error);
		});
	} else {
		console.log("No errors found, The chain is Valid!");
	}
})
.catch((error) => {
	console.log(error);
});
*/
