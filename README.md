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

aimee@aimee-lemur:~/Dev/git/github.com/aimeeu/test/udacity-blockchain-proj2-privateBlockchain$ node simpleChain01PopulateChain.js
***** simpleChain.theLoop...
generateGenesisBlock fulfilled:  Block {
  data: 'This is the Genesis Block',
  height: 0,
  timestamp: '1558309333',
  previousBlockHash: 0,
  hash:
   '5178a24885657866e4358078212b8017e430b2f6fa8ba53b9b2e405aed87dd52' }
Block {
  data: 'Test Block - 1',
  height: 1,
  timestamp: '1558309343',
  previousBlockHash:
   '5178a24885657866e4358078212b8017e430b2f6fa8ba53b9b2e405aed87dd52',
  hash:
   '6299c98b59f158c9479572a91351916fb047903231094559bc9451b7cbe3e2e9' }
***** simpleChain.theLoop...
Block {
  data: 'Test Block - 2',
  height: 2,
  timestamp: '1558309353',
  previousBlockHash:
   '6299c98b59f158c9479572a91351916fb047903231094559bc9451b7cbe3e2e9',
  hash:
   'cd2b86dd419e4e5548d1b0d46584f8c91e51246a3650b4dc7084803f999ebb0d' }
***** simpleChain.theLoop...
Block {
  data: 'Test Block - 3',
  height: 3,
  timestamp: '1558309363',
  previousBlockHash:
   'cd2b86dd419e4e5548d1b0d46584f8c91e51246a3650b4dc7084803f999ebb0d',
  hash:
   '53c63343e063e06b9c3cad65ea40632fe09c5b182e78744258600cc39c3753ae' }
***** simpleChain.theLoop...
Block {
  data: 'Test Block - 4',
  height: 4,
  timestamp: '1558309373',
  previousBlockHash:
   '53c63343e063e06b9c3cad65ea40632fe09c5b182e78744258600cc39c3753ae',
  hash:
   '73de641344dfd578da687aae73aa309505b69d62ba2b0765b41e60342fc34424' }
***** simpleChain.theLoop...
Block {
  data: 'Test Block - 5',
  height: 5,
  timestamp: '1558309383',
  previousBlockHash:
   '73de641344dfd578da687aae73aa309505b69d62ba2b0765b41e60342fc34424',
  hash:
   '573f90d2067bc0b9b2ef9f654a78e8dbc39c7d13eef5591faf059c1fc98c3d99' }
***** simpleChain.theLoop...
Block {
  data: 'Test Block - 6',
  height: 6,
  timestamp: '1558309393',
  previousBlockHash:
   '573f90d2067bc0b9b2ef9f654a78e8dbc39c7d13eef5591faf059c1fc98c3d99',
  hash:
   'e550be089d274a307ac0ede78bde72fc568aa6e1c48d3f995dbaa7e36cf1f10c' }
***** simpleChain.theLoop...
Block {
  data: 'Test Block - 7',
  height: 7,
  timestamp: '1558309403',
  previousBlockHash:
   'e550be089d274a307ac0ede78bde72fc568aa6e1c48d3f995dbaa7e36cf1f10c',
  hash:
   '2b734a0ff0e7bf64f5c52b352b1d2c2bde919a39a8da3124ddd9c6dc7bdf84bb' }
***** simpleChain.theLoop...
Block {
  data: 'Test Block - 8',
  height: 8,
  timestamp: '1558309413',
  previousBlockHash:
   '2b734a0ff0e7bf64f5c52b352b1d2c2bde919a39a8da3124ddd9c6dc7bdf84bb',
  hash:
   'ca76ead6d65a1a3dfe662037f2691548236c1e0064ec6a7609ae126a2092ab0b' }
***** simpleChain.theLoop...
Block {
  data: 'Test Block - 9',
  height: 9,
  timestamp: '1558309423',
  previousBlockHash:
   'ca76ead6d65a1a3dfe662037f2691548236c1e0064ec6a7609ae126a2092ab0b',
  hash:
   '510746afe71bcbfafdf60cac63eb3ac9deee31a140ec1d43453b48c8eaa8322d' }
***** simpleChain.theLoop...
Block {
  data: 'Test Block - 10',
  height: 10,
  timestamp: '1558309433',
  previousBlockHash:
   '510746afe71bcbfafdf60cac63eb3ac9deee31a140ec1d43453b48c8eaa8322d',
  hash:
   'c24def5db96001bb5c200c521142bab65f5c4fdab2f5dc0d15ea2c06346a782c' }



```