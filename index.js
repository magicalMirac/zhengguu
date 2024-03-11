async function getLatestBlockNumber() {
  try {
      const blockNumber = await web3.eth.getBlockNumber();
      return blockNumber;
  } catch (error) {
      console.error('Error fetching latest block number:', error);
      return null;
  }
}

// 4. 获取指定区块的信息
async function getBlockInfo(blockNumber) {
  try {
      const block = await web3.eth.getBlock(blockNumber);
      return block;
  } catch (error) {
      console.error('Error fetching block info:', error);
      return null;
  }
}

// 5. 获取指定交易的信息
async function getTransactionInfo(txHash) {
  try {
      const transaction = await web3.eth.getTransaction(txHash);
      return transaction;
  } catch (error) {
      console.error('Error fetching transaction info:', error);
      return null;
  }
}

// 6. 获取当前 gas 价格（单位：Gwei）
async function getCurrentGasPrice() {
  try {
      const gasPrice = await web3.eth.getGasPrice();
      return web3.utils.fromWei(gasPrice, 'gwei');
  } catch (error) {
      console.error('Error fetching current gas price:', error);
      return null;
  }
}

// 7. 获取指定地址的交易历史记录
async function getTransactionHistory(address) {
  try {
      const transactions = await web3.eth.getTransactionsByAddress(address);
      return transactions;
  } catch (error) {
      console.error('Error fetching transaction history:', error);
      return null;
  }
}

// 8. 获取当前挖矿难度
async function getCurrentMiningDifficulty() {
  try {
      const difficulty = await web3.eth.getDifficulty();
      return difficulty;
  } catch (error) {
      console.error('Error fetching current mining difficulty:', error);
      return null;
  }
}

// 9. 获取指定合约的 ABI（应用程序二进制接口）
async function getContractABI(contractAddress) {
  try {
      const contract = new web3.eth.Contract(abi, contractAddress);
      return contract.methods;
  } catch (error) {
      console.error('Error fetching contract ABI:', error);
      return null;
  }
}

// 10. 根据地址获取账户的交易数量
async function getTransactionCount(address) {
  try {
      const count = await web3.eth.getTransactionCount(address);
      return count;
  } catch (error) {
      console.error('Error fetching transaction count:', error);
      return null;
  }
}