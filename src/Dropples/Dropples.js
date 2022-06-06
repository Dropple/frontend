import addLogo from './../Assets/add.png';

function Dropples(props) {

  const createDroppleHandler = () => {
    props.droppleStateHandler(3);
  }

  return (
    <div className="Connect-wallet">
        <div className="header-text">Dropples</div>
        <p className="p-text">Create a new Dropple or edit an existing one.</p>
        <button className="dropple-button" onClick={createDroppleHandler}>
            <img alt="metamask_logo" src={addLogo}></img>
            <span>Create New</span>
        </button>
    </div>
  );
}

export default Dropples;
