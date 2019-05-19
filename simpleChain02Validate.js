/*
  ===============LICENSE_START=======================================================
  Apache-2.0
  ===================================================================================
  Copyright (C) 2019 Aimee Ukasick. All rights reserved.
  ===================================================================================
  This software file is distributed by Aimee Ukasick
  under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

  This file is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  ===============LICENSE_END=========================================================
*/


/*
* This file contains functions to test the validity of the blockchain.
 * The blockchain should be populated by running simpleChain01PopulateChain.js
 * Ideally all tests should be done using a unit test framework!
 */


const BlockChain = require('./BlockChain.js');

let myBlockChain = new BlockChain.Blockchain();



/***********************************************
 ** Function to get the Height of the Chain ****
 ***********************************************/

/*
// Be careful this only will work if `getBlockHeight` method in Blockchain.js file return a Promise
myBlockChain.getBlockHeight().then((height) => {
	console.log("######## simpleChain myBlockChain.getBlockHeight() FULFILLED ########");
	console.log(height);
}).catch((err) => { console.log(err);});
*/

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

/***********************************************
 ***************** Validate Chain  *************
 ***********************************************/


// Be careful this only will work if `validateChain` method in Blockchain.js file return a Promise
myBlockChain.validateChain().then((errorLog) => {
	if(errorLog.length > 0){
		console.log("######## The chain is not valid:");
		errorLog.forEach(error => {
			console.log(error);
		});
	} else {
		console.log("######## No errors found, The chain is Valid!");
	}
})
.catch((error) => {
	console.log(error);
});

