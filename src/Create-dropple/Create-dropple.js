function CreateDropple() {
  return (
    <div className="Connect-wallet">
        <div className="header-text">Dropple Details</div>
        <p className="p-text">Below is the link for your Dropple. Make it rain!</p>
        <div className="dropple-form">
            <div className="dropple-fieldset">
                <label>Optional: give your Dropple a name</label>
                <input className="dropple-input"></input>
            </div>
            <button className="dropple-submit-btn">Done</button>
        </div>
    </div>
  );
}

export default CreateDropple;
