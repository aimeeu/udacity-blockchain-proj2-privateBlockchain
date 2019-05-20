# Udacity Blockchain Nanodegree - Project 2 - Create a Private Blockchain

# Objectives


- Identify the basic data model for a Blockchain application
- Use [level](https://github.com/Level/level) to persist the Blockchain data in LevelDB
- Write functions for basic operations in the Blockchain

[Seed code](https://github.com/udacity/nd1309-work-code/tree/master/Course_Blockchain_Data/Project_2_es6_starter_code) was cloned from the Udacity repo.

# Modifications

I broke simpleChain.js into three files for easier testing:

1. simpleChain01PopulateChain.js    This file contains the function to populate the blockchain and store in the database; this must be run first
2. simpleChain02ValidateBlocks.js  This file contains functions to validate the blocks and the chain as a whole
3. simpleChain03TamperBlocks.js  This file contains the Udacity code to tamper with the blocks
4. simpleChain04ValidateChain.js This file contains the function to validate the blockchain

# How to Install and Run the Code

## Clone and Install

```bash

aimee@aimee-lemur:~/Dev/git/github.com/aimeeu/test$  git clone https://github.com/aimeeu/udacity-blockchain-proj2-privateBlockchain.git
Cloning into 'udacity-blockchain-proj2-privateBlockchain'...
remote: Enumerating objects: 51, done.
remote: Counting objects: 100% (51/51), done.
remote: Compressing objects: 100% (30/30), done.
remote: Total 51 (delta 28), reused 37 (delta 17), pack-reused 0
Unpacking objects: 100% (51/51), done.
aimee@aimee-lemur:~/Dev/git/github.com/aimeeu/test$ cd u*
aimee@aimee-lemur:~/Dev/git/github.com/aimeeu/test/udacity-blockchain-proj2-privateBlockchain$ ls
BlockChain.js    notes.txt          README.md                      simpleChain02ValidateBlocks.js  utils.js
Block.js         package.json       rubric                         simpleChain03TamperBlocks.js
LevelSandbox.js  package-lock.json  simpleChain01PopulateChain.js  simpleChain04ValidateChain.js
aimee@aimee-lemur:~/Dev/git/github.com/aimeeu/test/udacity-blockchain-proj2-privateBlockchain$ npm install

> leveldown@4.0.1 install /home/aimee/Dev/git/github.com/aimeeu/test/udacity-blockchain-proj2-privateBlockchain/node_modules/leveldown
> prebuild-install || node-gyp rebuild


> level@4.0.0 postinstall /home/aimee/Dev/git/github.com/aimeeu/test/udacity-blockchain-proj2-privateBlockchain/node_modules/level
> opencollective-postinstall || exit 0

Thank you for using level!
If you rely on this package, please consider supporting our open collective:
> https://opencollective.com/level/donate

npm WARN project_2@1.0.0 No repository field.

added 78 packages from 60 contributors in 1.011s
```

## Populate Chain

``` bash

aimee@aimee-lemur:~/Dev/git/github.com/aimeeu/test/udacity-blockchain-proj2-privateBlockchain$ node simpleChain01PopulateChain.js
***** simpleChain.theLoop...
generateGenesisBlock fulfilled:  true
***** blockchain.addBlock(block):  Block { data: 'Test Block - 1' }
true
***** simpleChain.theLoop...
***** blockchain.addBlock(block):  Block { data: 'Test Block - 2' }
true
***** simpleChain.theLoop...
***** blockchain.addBlock(block):  Block { data: 'Test Block - 3' }
true
***** simpleChain.theLoop...
***** blockchain.addBlock(block):  Block { data: 'Test Block - 4' }
true
***** simpleChain.theLoop...
***** blockchain.addBlock(block):  Block { data: 'Test Block - 5' }
true
***** simpleChain.theLoop...
***** blockchain.addBlock(block):  Block { data: 'Test Block - 6' }
true
***** simpleChain.theLoop...
***** blockchain.addBlock(block):  Block { data: 'Test Block - 7' }
true
***** simpleChain.theLoop...
***** blockchain.addBlock(block):  Block { data: 'Test Block - 8' }
true
***** simpleChain.theLoop...
***** blockchain.addBlock(block):  Block { data: 'Test Block - 9' }
true
***** simpleChain.theLoop...
***** blockchain.addBlock(block):  Block { data: 'Test Block - 10' }
true

```

## Validate Blocks
```bash 

aimee@aimee-lemur:~/Dev/git/github.com/aimeeu/test/udacity-blockchain-proj2-privateBlockchain$ node simpleChain02ValidateBlocks.js######## simpleChain myBlockChain.getBlock(0) FULFILLED block:  { data: 'This is the Genesis Block',
  height: 0,
  timestamp: '1558380070',
  previousBlockHash: 0,
  hash:
   '175b68e7b53e8b467e2367f622e158f8236967a289e02749304aacb13a6a229c' }
######## simpleChain myBlockChain.validateBlock FULFILLED valid:  true
***** generateGenesisBlock NO GENESIS BLOCK CREATED - BLOCKS EXIST
######## simpleChain myBlockChain.getTotalNumBlocksInChain() FULFILLED totalNumBlocksInChain:  11
######## simpleChain myBlockChain.getBlockHeight() FULFILLED height:  10

```

## Validate Chain
```bash

aimee@aimee-lemur:~/Dev/git/github.com/aimeeu/test/udacity-blockchain-proj2-privateBlockchain$ node simpleChain04ValidateChain.js
***** generateGenesisBlock NO GENESIS BLOCK CREATED - BLOCKS EXIST
######## No errors found, The chain is Valid!

```

## Tamper with Blocks
```bash

aimee@aimee-lemur:~/Dev/git/github.com/aimeeu/test/udacity-blockchain-proj2-privateBlockchain$ node simpleChain03TamperBlocks.js
 MODIFY BLOCK 5 
 MODIFY BLOCK 6 
######## BLOCK 6 was modified
!!!!! Blockchain.validateBlock Block 5 is not a valid block!
***** generateGenesisBlock NO GENESIS BLOCK CREATED - BLOCKS EXIST

```

## Validate Chain
```bash

aimee@aimee-lemur:~/Dev/git/github.com/aimeeu/test/udacity-blockchain-proj2-privateBlockchain$ node simpleChain04ValidateChain.js
***** generateGenesisBlock NO GENESIS BLOCK CREATED - BLOCKS EXIST
######## The chain is not valid:
Block 5 failed validateBlock
Block 6 failed validateBlock


```
