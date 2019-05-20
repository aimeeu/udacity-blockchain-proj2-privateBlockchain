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
 * Originally in simpleChain02ValidateBlocks.js
 * Moved here for easier testing.
 * Ideally all tests should be done using a unit test framework!
 */

const BlockChain = require('./BlockChain.js');
const Block = require('./Block.js');


let myBlockChain = new BlockChain.Blockchain();




setTimeout(function () {
    //console.log("***** simpleChain.setTimeout ...")
}, 10000);

/******************************************
 ** Function for Create Tests Blocks   ****
 ******************************************/


(function theLoop (i) {
    console.log("***** simpleChain.theLoop...");
	setTimeout(function () {
        //console.log("***** simpleChain.theLoop creating new block...");
		let blockTest = new Block.Block("Test Block - " + (i + 1));
		// Be careful this only will work if your method 'addBlock' in the Blockchain.js file return a Promise
        //console.log("***** simpleChain.theLoop calling myBlockChain.addBlock...");
		myBlockChain.addBlock(blockTest).then((result) => {
           // console.log("***** simpleChain.theLoop logging result from addBlock...");
			console.log(result);
			i++;
			if (i < 10) theLoop(i);
		}).catch( (err) => {
		    console.log('Error during loop to add blocks ', err);
        });
	}, 10000);
  })(0);


