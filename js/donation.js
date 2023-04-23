function donateEth() {
    if (typeof window.ethereum !== 'undefined') {
      const ethAmount = document.getElementById('eth-amount').value;
      window.ethereum.enable().then(function (accounts) {
        const donationAddress = '0x11B3A68cd44ef6894b8688ca5E4E68e49B4927b6';
        const amount = ethAmount.toString();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(donationAddress, abi, signer);
        contract.donate({value: ethers.utils.parseEther(amount)});
      });
    } else {
      alert('Please install MetaMask to donate Ethereum');
    }
  }
  
  function donateBtc() {
    const btcAmount = document.getElementById('btc-amount').value;
    const donationAddress = '37Ry5syfPKvHomgLm7rXio9mvcqzCo4Uc4';
    const amount = btcAmount.toString();
    const paymentUrl = `bitcoin:${donationAddress}?amount=${amount}`;
    window.location.href = paymentUrl;
  }