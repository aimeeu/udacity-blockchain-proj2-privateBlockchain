# Udacity Blockchain Nanodegree - Project 2 - Create a Private Blockchain

# Objectives


- Identify the basic data model for a Blockchain application
- Use LevelDB to persist the Blockchain data
- Write functions for basic operations in the Blockchain

Seed code: https://github.com/udacity/nd1309-work-code/tree/master/Course_Blockchain_Data/Project_2_es6_starter_code

# Modifications

I broke simpleChain.js into three files:

1. simpleChain01PopulateChain.js    This file contains the function to populate the blockchain and store in the database; this must be run first
2. simpleChain02ValidateBlocks.js  This file contains functions to validate the blocks and the chain as a whole
3. simpleChain03TamperBlocks.js  This file contains the Udacity code to tamper with the blocks
4. simpleChain04ValidateChain.js This file contains the function to validate the blockchain

# How to Install and Run the Code

1. Clone this repository
2. run npm install
3. run simpleChain01PopulateChain.js 
4. run simpleChain02ValidateBlocks.js 
5. run simpleChain04ValidateChain.js to verify the valid blockchain
6. run simpleChain03TamperBlocks.js
7. run simpleChain04ValidateChain.js  to validate the blockchain has been tampered with



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