import logo from './Assets/dropple_logo.png';
import './App.css';
import ConnectWallet from './Connect-wallet/Connect-wallet';
import Dropples from './Dropples/Dropples';
import CreateDropple from './Create-dropple/Create-dropple';
import Wallets from './Wallets/Wallets';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" height={40}/>
      </header>
      <section className="App-section">
        <ConnectWallet />
      </section>
    </div>
  );
}

export default App;
