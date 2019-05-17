/* ===== Block Class ==============================
|  Class with a constructor for block 			   |
|  ===============================================*/

class Block {
	constructor(data) {
		this.data = data;
	}

	getData() {
		return this.data;
	}

	getHeight() {
		return this.height;
	}

	setHeight(height) {
		this.height = height;
	}

	getTimestamp() {
		return this.timestamp;
	}

	setTimestamp(timestamp) {
		this.timestamp = timestamp;
	}

	getPreviousBlockHash() {
		return this.previousBlockHash;
	}

	setPreviousBlockHash(previousBlockHash) {
		this.previousBlockHash = previousBlockHash;
	}

	getHash() {
		return this.hash;
	}

	setHash(hash) {
		this.hash = hash;
	}
}

module.exports.Block = Block;