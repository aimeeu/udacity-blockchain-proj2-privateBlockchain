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
 * This file contains functions to tamper with the blockchain and then test the validity
 * of the blockchain.
 * The blockchain should be populated by running simpleChain01PopulateChain.js
 * Ideally all tests should be done using a unit test framework!
 */

const BlockChain = require('./BlockChain.js');
let myBlockChain = new BlockChain.Blockchain();

/** Tampering a Block this is only for the purpose of testing the validation methods */

myBlockChain.getBlock(5).then((block) => {
    let blockAux = block;
    blockAux.body = "Tampered Block";
    myBlockChain._modifyBlock(blockAux.height, blockAux)
        .then((blockModified) => {
            console.log(" MODIFY BLOCK 5 ");
            if (blockModified) {
                myBlockChain.validateBlock(blockAux.height)
                    .then((valid) => {
                        console.log(`######## Block #${blockAux.height}, is valid? = ${valid}`);
                        //myBlockChain._printAllBlocks();
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            } else {
                console.log("######## The Block wasn't modified");
            }
        }).catch((err) => {
        console.log(err);
    });
}).catch((err) => {
    console.log(err);
});

myBlockChain.getBlock(6).then((block) => {
    let blockAux = block;
    blockAux.previousBlockHash = "jndininuud94j9i3j49dij9ijij39idj9oi";
    myBlockChain._modifyBlock(blockAux.height, blockAux).then((blockModified) => {
        console.log(" MODIFY BLOCK 6 ");
        if (blockModified) {
            console.log("######## BLOCK 6 was modified");
        } else {
            console.log("######## BLOCK 6 wasn't modified");
        }
        //myBlockChain._printAllBlocks();
    }).catch((err) => {
        console.log(err);
    });
}).catch((err) => {
    console.log(err);
});
