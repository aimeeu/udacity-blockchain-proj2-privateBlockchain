/* ===== Blockchain Class ==========================
|  Class with a constructor for new blockchain 		|
|  ================================================*/

const SHA256 = require('crypto-js/sha256');
const LevelSandbox = require('./LevelSandbox.js');
const Block = require('./Block.js');
const utils = require('./utils.js');

class Blockchain {

    constructor() {
        console.log('***** constructor - creating new LevelSandbox *****');
        this.bd = new LevelSandbox.LevelSandbox();
        this.generateGenesisBlock();
    }

    // Helper method to create a Genesis Block (always with height= 0)
    // You have to options, because the method will always execute when you create your blockchain
    // you will need to set this up statically or instead you can verify if the height !== 0 then you
    // will not create the genesis block
    generateGenesisBlock(){
        // Add your code here
        console.log('***** generateGenesisBlock *****');
        let self = this;
        //console.log('***** generateGenesisBlock calling self.getBlockHeight *****');
        self.getBlockHeight().then( (result) => {
            //console.log('***** generateGenesisBlock logging result from self.getBlockHeight: ', result);
            if (result === 0) {
                //console.log('***** generateGenesisBlock creating new block');
                // height = 0, timestamp = '', data = [], previousBlockHash = '', hash = ''
                let b = new Block.Block('This is the Genesis Block');
                b.setHeight(0);
                b.setTimestamp(utils.getDateAsUTCString());
                b.setPreviousBlockHash(0);
                b.setHash(utils.generateHashFor(b));
                //console.log('***** generateGenesisBlock calling self.bd.addBlock ');
                self.bd.addBlock(b).then( (result) => {
                    //console.log("generateGenesisBlock fulfilled self.bd.addBlock result: ", result);
                }).catch((err) => {
                    console.log("generateGenesisBlock rejected self.bd.addBlock error: ", err);
                });
            } else {
                console.log('***** generateGenesisBlock NO GENESIS BLOCK CREATED; BLOCKHEIGHT: ', result);
            }
        }).catch((err) => {
            console.log("generateGenesisBlock generateGenesisBlock error: ", err);
        });
    }

    // Get block height, it is a helper method that return the height of the blockchain
    // Counts all the Blocks in your chain and give you as a result the last height in your chain
    // MUST RETURN A PROMISE FOR simpleChain.js
    getBlockHeight() {
        console.log('***** getBlockHeight *****');
        let self = this;
        return new Promise(function(resolve, reject) {
            // Add your code here, remember in Promises you need to resolve() or reject()
            //first get block
            let blockHeight = 0;

            //console.log('***** getBlockHeight calling levelSandbox.getBlockHeight *****');
            self.bd.getBlockHeight().then((result) => {
                //console.log('getBlockHeight logging result: ', result);
                blockHeight = result;
                resolve(blockHeight);
            }).catch((err) => {
                console.log(" getBlockHeight error: ", err);
                reject(err);
            });
        });
    }


    // Add new block
    // Adds a new block into the chain, to do that you need to assign the corresponding height, hash,
    // previousBlockHash and timeStamp to your block.
    // must return a Promise to work with simpleChain.js
    addBlock(newBlock) {
        let self = this;
        console.log('***** blockchain.addBlock(block) ***** ');
        // Add your code here
        // fetch previous block to get hash

        return new Promise(function(resolve, reject) {
            // Add your code here, remember in Promises you need to resolve() or reject()
            let blockHeight = undefined;
            let previousBlockHash = undefined;
           // console.log('***** blockchain.addBlock(block) calling self.getBlockHeight ***** ');
            self.getBlockHeight().then((blockHeight) => {
               // console.log('blockchain.addBlock(block) self.getBlockHeight blockHeight: ', blockHeight);

                // get the block by blockHeight in order to set previousBlockHash
                self.getBlock(blockHeight).then((returnedBlock) => {
                   // console.log("blockchain.addBlock(block) result from self.getBlock  returnedBlock: ", returnedBlock);
                    if (returnedBlock === undefined){
                        console.log("!!!!! ERROR blockchain.addBlock(block) result from self.getBlock(" + blockHeight + ") is UNDEFINED");
                        reject("!!!!!  ERROR blockchain.addBlock(block) result from self.getBlock(" + blockHeight + ") is UNDEFINED");
                    }

                   // console.log("blockchain.addBlock(block) setting values in newBlock");
                    let height = (blockHeight + 1);
                    //console.log("blockchain.addBlock(block) newBlock height: ", height);
                    newBlock.setHeight(height);
                    newBlock.setTimestamp(utils.getDateAsUTCString());
                    newBlock.setPreviousBlockHash(returnedBlock.hash);
                    newBlock.setHash(utils.generateHashFor(newBlock));

                    // db.addBlock returns a Promise
                    console.log("blockchain.addBlock(block) calling self.bd.addBlock(newBlock): ", newBlock);
                    self.bd.addBlock(newBlock).then( (result) => {
                        //console.log("blockchain.addBlock(block) self.bd.addBlock result: ", result);
                        resolve(result);
                    }).catch((err) => {
                        console.log("blockchain.addBlock(block) self.bd.addBlock error: ", err);
                        reject(err);
                    });
                }).catch((err) => {
                    console.log(err);
                    reject(err);
                });
            }).catch((err) => {
                console.log(err);
                reject(err);
            });
        });
    }

    // Get Block By Height
    // Gets a block and returns it as JSON string object
    // must return a Promise
    getBlock(height) {
        // Add your code here
        console.log('***** blockchain.getBlock(height) ***** ');
        let self = this;
        return new Promise(function(resolve, reject) {
            // Add your code here, remember in Promises you need to resolve() or reject()
            //levelSandbox.getBlock returns a Promise
           // console.log('***** blockchain.getBlock(height) calling self.bd.getBlock(height) ***** ');
            self.bd.getBlock(height).then( (result) => {
               // console.log('blockchain.getBlock(height) self.bd.getBlock(height) success: ', result);
                resolve(result);
            }).catch((err) => {
                console.log('blockchain.getBlock(height) Failed to retrieve block by height: ', height);
                reject(err);
            });
        });
    }

    // Validate if Block is being tampered by Block Height
    //  Validates block data integrity
    // must return a Promise
    // Rubric: The validation should verify that the hash stored in the block is the same as the hash recalculated.
    validateBlock(height) {
        // Add your code here
        console.log('***** blockchain.validateBlock(height) ***** ');
        let self = this;
        return new Promise(function(resolve, reject) {
            // Add your code here, remember in Promises you need to resolve() or reject()
            //first get block
            self.getBlock(height).then((returnedBlock) => {
                if (returnedBlock === undefined){
                    console.log("!!!!! ERROR blockchain.addBlock(block) result from self.getBlock(" + blockHeight + ") is UNDEFINED");
                    reject("!!!!!  ERROR blockchain.addBlock(block) result from self.getBlock(" + blockHeight + ") is UNDEFINED");
                }

                if (self.checkForValidBlockHash(returnedBlock)) {
                    resolve(true);
                } else {
                    reject('Block ' + height + ' is not a valid block!');
                }
            }).catch((err) => {
                console.log("blockchain.getBlock(height) Failed to retrieve block by height: ",  height);
                reject(err);
            });
        });
    }


    checkForValidBlockHash(returnedBlock){
        // NOTE: block hash is generated when block.hash is undefined; must recreate same Block attributes or generated
        // hash will be different (ie, block with undefined hash vs block with a hash value set)
        console.log(" blockchain.checkForValidBlockHash ");
        let returnedBlockHash = returnedBlock.hash;
        returnedBlock.hash = undefined;
        let generatedHash = utils.generateHashFor(returnedBlock);
        //console.log('returnedBlock.hash: ', returnedBlockHash);
        //console.log('generatedHash: ', generatedHash);
        return generatedHash === returnedBlockHash;
    }

    // Validate Blockchain
    // Validates blockchain is still valid at any moment
    // must return a Promise
    // Rubric: you should retrieve the data and validate each block, also you need to validate that
    // the hash of the block is equal to the next block previousBlockHash
    validateChain() {
        // Add your code here
        let self = this;
        console.log('***** validateChain *****');

        // The Map object holds key-value pairs and remembers the original insertion order of the keys.


        return new Promise(function(resolve, reject) {
            let chainHeight = self.getBlockHeight();

            self.bd.getAllBlocks().then( (result) => {
                let chainMap = result;
                for (var [key, value] of chainMap) {
                    console.log(key, '=', value);
                    // validate block
                    let currentBlock = value;
                    let isValidBlock = self.checkForValidBlockHash(currentBlock);
                    if (isValidBlock){
                        // compare currentBlockHash with nextBlock's previousBlockHash
                        // make sure this is not the end of the chain
                        if (key !== chainHeight){
                            let nextKey = (key + 1);
                            let nextBlock = chainMap.get(nextKey);
                            if (currentBlock.getHash() === nextBlock.getPreviousBlockHash()){
                                resolve(true);
                            } else {
                                let msg = 'Block ' + key + ' failed currentBlock.getHash() === nextBlock.getPreviousBlockHash()';
                                console.log(msg);
                                reject(msg);
                            }
                        } else {
                            resolve(true);
                        }
                    } else {
                        let msg = 'Block ' + key + ' failed validateBlock';
                        console.log(msg);
                        reject(msg);
                    }
                }
            });
        });
    }

    // Utility Method to Tamper a Block for Test Validation
    // This method is for testing purpose
    // provided by Udacity - do not delete
    _modifyBlock(height, block) {
        let self = this;
        return new Promise( (resolve, reject) => {
            /*
            self.bd.addLevelDBData(height, JSON.stringify(block).toString()).then((blockModified) => {
                resolve(blockModified);
            }).catch((err) => { console.log(err); reject(err)});
            */
            // 17 May 2019 modified to remove JSON.stringify because that is done in LevelSandbox
            self.bd.addLevelDBData(height, block).then((blockModified) => {
                console.log("_modifyBlock blockModified: ", blockModified);
                resolve(blockModified);
            }).catch((err) => {
                console.log(err);
                reject(err)
            });
        });
    }
   
}

module.exports.Blockchain = Blockchain;
