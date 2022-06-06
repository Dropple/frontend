import { useRef } from "react";

function CreateDropple(props) {

  const contractAddress = useRef('');
  const droppleName = useRef('');

  const createDroppleHandler = async () => {
    const url = "http://dropple-xyz.herokuapp.com/dropple";
    const request = {
        "name": droppleName.current.value,
        "contract_address": contractAddress.current.value,
        "address": props.walletAddress
    }
    const responseTask = await fetch(url, {
        method: "POST",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    });

    const response = await responseTask.json();
    props.droppleIdHandler(response.dropple_id);
    props.droppleStateHandler(4);
  }

  return (
    <div className="Connect-wallet">
        <div className="header-text">Dropple Details</div>
        <p className="p-text">Below is the link for your Dropple. Make it rain!</p>
        <div className="dropple-form">
            <div className="dropple-fieldset">
                <label>Contract Address</label>
                <input className="dropple-input" ref={contractAddress}></input>
            </div>
            <div className="dropple-fieldset margin-top-10">
                <label>Optional: give your Dropple a name</label>
                <input className="dropple-input" ref={droppleName}></input>
            </div>
            <button className="dropple-submit-btn" onClick={createDroppleHandler}>Done</button>
        </div>
    </div>
  );
}

export default CreateDropple;
