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
* This file contains a function to test the validity of the blockchain.
 * The blockchain should be populated by running simpleChain01PopulateChain.js
 * Ideally all tests should be done using a unit test framework!
 */


const BlockChain = require('./BlockChain.js');

let myBlockChain = new BlockChain.Blockchain();


/***********************************************
 ***************** Validate Chain  *************
 ***********************************************/


// Be careful this only will work if `validateChain` method in Blockchain.js file return a Promise
myBlockChain.validateChain().then((errorLog) => {
    if (errorLog.length > 0) {
        console.log("######## The chain is not valid:");
        errorLog.forEach(error => {
            console.log(error);
        });
    } else {
        console.log("######## No errors found, The chain is Valid!");
    }
}).catch((error) => {
    console.log(error);
});
