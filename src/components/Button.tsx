import '../Button.css';

type btnthingy = {
    text: string;
    text2: string;
}

function Buttons(props: btnthingy){
    return(
        <>
        <br />
            <div className="container">
                <button className="button"> { props.text } </button>
                <button className="button"> {props.text2 } </button>
            </div>
        </>
    );
}

export default Buttons;