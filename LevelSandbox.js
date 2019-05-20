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

/* ===== Persist data with LevelDB ==================
|  Learn more: level: https://github.com/Level/level |
/===================================================*/

const level = require('level');
const utils = require('./utils.js');


class LevelSandbox {

    // use dbLocation with default for unit testing inclusion later
    constructor(dbLocation = './chaindata') {
        //You can specify json as a special value-encoding type,
        // which allows you to use arbitrary JavaScript objects as values
        var options = {
            valueEncoding: 'json'
        };
        this.db = level(dbLocation, options);
    }

    /*
    // Get data from levelDB with key (Promise)
    getLevelDBData(key){
        let self = this;
        return new Promise(function(resolve, reject) {
            // Add your code here, remember in Promises you need to resolve() or reject()
        });
    }
     */

    // Add data to levelDB with key and value (Promise)
    addLevelDBData(key, value) {
        let self = this;
        //console.log("***** LevelSandbox.addLevelDBData ");
        /*
        return new Promise(function (resolve, reject) {
            // Add your code here, remember in Promises you need to resolve() or reject()
            self.db.put(key, value).then((result) => {
                // result is always undefined
                console.log('addLevelDBData result: ', result);
                resolve(true);
            }).catch((err) => {
                console.log('LevelSandbox.addLevelDBData ' + key + ' submission failed', err);
                reject(err);
            });
        });
        */
        return self.addBlock(value);
    }

    // Rubric: addBlock(newBlock) function stores a new block in LevelDB
    addBlock(newBlock) {
       // console.log('LevelSandbox.addBlock(newBlock): ', newBlock);
        let self = this;
        //block.height is key, block is value
        return new Promise((resolve, reject) => {
            let key = Number.parseInt(newBlock.height);
            let value = JSON.stringify(newBlock).toString();
            self.db.put(key, value).then((result) => {
                // result is always undefined
                // console.log('LevelSandbox.addBlock(newBlock) result: ', result);
                resolve(true);
            }).catch((err) => {
                //console.log('LevelSandbox.addBlock failed to add block ' + key + ' ; error: ', err);
                reject(err);
            });
        });
    };



    // Method that returns the total number of blocks in the chain (this is NOT the height of the last block!)
    getNumBlocksInChain() {
        let self = this;
        return new Promise((resolve, reject) => {
            self.fetchMapOfBlocks().then((chainMap) => {
                resolve(chainMap.size);
            }).catch((err) => {
                reject(err);
            });
        });
    }



    //Rubric: getBlock(height) retrieves a block by height from LevelDB
    getBlock(keyBlockHeight) {
        // Because we are returning a promise, we will need this to be able to reference 'this' inside the Promise constructor
        let self = this;
        //console.log("***** LevelSandbox.getBlock(keyBlockHeight) ");
        return new Promise((resolve, reject) => {
            self.db.get(keyBlockHeight).then((result) => {
               // console.log('LevelSandbox.getBlock(keyBlockHeight) result: ', result);
                let returnedBlock = JSON.parse(result);
                resolve(returnedBlock);
            }).catch((err) => {
                if (err.type === 'NotFoundError') {
                    resolve(undefined);
                } else {
                    //console.log('LevelSandbox.getBlock(keyBlockHeight) Block ' + keyBlockHeight + ' get failed', err);
                    reject(err);
                }
            });
        });
    };


    // Counts all the Blocks in your chain and gives you as a result the total number of block in the chain
    // remember that the genesis block has a height of zero
    //retrieves current block height within the LevelDB chain.
    /*
    getBlockHeight() {
        console.log('***** LevelSandbox.getBlockHeight *****');
        let self = this;
         let i = 0;
        return new Promise((resolve, reject) => {
            self.db.createKeyStream().on('data', (err) => {
                i++;
            }).on('error', function(err) {
                console.log('LevelSandbox.getBlockHeight Unable to read data stream!', err);
                reject(err);
            }).on('close', function() {
                console.log('LevelSandbox.getBlockHeight result:', i);
                resolve(i);
            });
        });
    }
    */

    getBlockHeight() {
        let self = this;
        return new Promise((resolve, reject) => {
            self.fetchMapOfBlocks().then((chainMap) => {
               let blockHeight = 0;
               if (chainMap.size > 0) {
                   let keys = Array.from(chainMap.keys());
                   keys.sort(utils.sortNumericalArrayItemsAscending);
                   blockHeight = keys.pop();
               }
               resolve(blockHeight);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    getAllBlocks() {
        return this.fetchMapOfBlocks();
    }

    fetchMapOfBlocks() {
        let self = this;
        return new Promise( (resolve, reject) => {
            // The Map object holds key-value pairs and remembers the original insertion order of the keys.
            let map = new Map();
            self.db.createReadStream({reverse: false})
                .on('data', function (data) {
                    //console.log('***** LevelSandbox.getAllBlocks data found; reading stream');
                    let key = Number.parseInt(data.key);
                    let block = JSON.parse(data.value);
                    //console.log(key, '=', block);
                    map.set(key, block);
                })
                .on('error', function (err) {
                    if (err.type === 'NotFoundError') {
                        //console.log('***** LevelSandbox.getAllBlocks no data found; resolve the empty map');
                        resolve(map);
                    } else {
                        //console.log('LevelSandbox.getAllBlocks Unable to read data stream!', err);
                        reject(err);
                    }
                })
                .on('close', function () {
                    //console.log('***** LevelSandbox.getBlockHeight stream closed; getting blockHeight from first key in map');
                    resolve(map);
                })
                .on('end', function () {
                    //console.log('***** LevelSandbox.getBlockHeight stream ended');
                });
        });
    }
}

module.exports.LevelSandbox = LevelSandbox;
