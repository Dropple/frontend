import metaMaskLogo from './../Assets/metamask.png';

function ConnectWallet(props) {

  const createDroppleIdHandler = async () => {
    const provider = window.ethereum;
    const accounts = await provider.request({ method: "eth_requestAccounts" });
    const account = accounts[0];

    props.walletAddressHandler(account);
    props.droppleStateHandler(2);
  }

  return (
    <div className="Connect-wallet">
        <div className="header-text">Connect your wallet</div>
        <p className="p-text">Your wallet is your Dropple ID. Connect to sign up or sign in.</p>
        <button className="dropple-button" onClick={createDroppleIdHandler}>
            <img alt="metamask_logo" src={metaMaskLogo}></img>
            <span>Metamask</span>
        </button>
    </div>
  );
}

export default ConnectWallet;
