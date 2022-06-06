import logo from './Assets/dropple_logo.png';
import './App.css';
import ConnectWallet from './Connect-wallet/Connect-wallet';
import Dropples from './Dropples/Dropples';
import CreateDropple from './Create-dropple/Create-dropple';
import Wallets from './Wallets/Wallets';
import { useState } from 'react';

const DroppleState = {
  CONNECT_WALLET: 1,
  DROPPLES: 2,
  CREATE_DROPPLE: 3,
  WALLETS: 4
};

function App() {
  
  const [walletAddress, setWalletAddress] = useState('');
  const [droppleId, setDroppleId] = useState('');
  const [droppleState, setDroppleState] = useState(DroppleState.CONNECT_WALLET);

  const walletAddressHandler = (address) => {
    if(address) setWalletAddress(() => address);
  }

  const droppleStateHandler = (state) => {
    if(state) setDroppleState(() => state);
  }

  const droppleIdHandler = (id) => {
    if(id) setDroppleId(() => id);
  }

  const renderState = () => {
    switch(droppleState) {
      case DroppleState.DROPPLES:
        return <Dropples 
          droppleStateHandler={droppleStateHandler}/>
      case DroppleState.CREATE_DROPPLE:
        return <CreateDropple 
                walletAddress={walletAddress}
                droppleIdHandler={droppleIdHandler}
                droppleStateHandler={droppleStateHandler}/>
      case DroppleState.WALLETS:
        return <Wallets 
                droppleId={droppleId}
                droppleStateHandler={droppleStateHandler}/>
      default:
        return <ConnectWallet 
                walletAddressHandler={walletAddressHandler}
                droppleStateHandler={droppleStateHandler}/>
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" height={40}/>
        { walletAddress !== '' ? <span className="wallet-address">{walletAddress}</span> : null}
      </header>
      <section className="App-section">
        {
          renderState()
        }
      </section>
    </div>
  );
}

export default App;
