import "../Title.css";

type TitleThing = {
    text: string;
    subtitle: string;
};  

function Title(props: TitleThing){
    return(
        <>
            <h1><a href="#">Join</a> { props.text }</h1>
            <h4> { props.subtitle } </h4>
        </>
    );
}

export default Title;