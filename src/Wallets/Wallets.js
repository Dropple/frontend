import { useEffect, useState } from "react";

function Wallets(props) {
    
    const [wallets, setWallets] = useState([]);

    useEffect(() => {
      fetchWallets();
    }, []);

    const fetchWallets = async () => {
        const url = `https://dropple-xyz.herokuapp.com/dropple_addresses/${props.droppleId}`;
        const responseTask = await fetch(url);
        const response = await responseTask.json();
        setWallets(() => response.info);
    }
    

    return (
      <div className="Connect-wallet">
          <table className="dropple-table">
              <tr>
                <th>Wallet Address</th>
                <th>Dropple Name</th>
                <th>Date</th>
              </tr>
              {
                wallets.map(wallet => {
                    return (
                    <tr>
                        <td>{wallet.wallet_address}</td>
                        <td>{wallet.dropple_display_id}</td>
                        <td>{new Date(wallet.added_date).toDateString()}</td>
                    </tr>)
                })
              }
          </table>
      </div>
    );
  }
  
  export default Wallets;
  