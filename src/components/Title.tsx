import "../Title.css";

type TitleThing = {
    text: string;
};  

function Title(props: TitleThing){
    return(
        <>
            <h1> { props.text } </h1>
            <div className="subtitle">
                <span style={{ color:"#CC3333" }}>W</span><span style={{ color:"#CC4033" }}>h</span><span style={{ color:"#CC4C33" }}>e</span><span style={{ color:"#CC5933" }}>r</span><span style={{ color:"#CC6633" }}>e</span> <span style={{ color:"#CC7333" }}>C</span><span style={{ color:"#CC8033" }}>a</span><span style={{ color:"#CC8C33" }}>p</span><span style={{ color:"#CC9933" }}>y</span><span style={{ color:"#CCA633" }}>b</span><span style={{ color:"#CCB333" }}>a</span><span style={{ color:"#CCBF33" }}>r</span><span style={{ color:"#CCCC33" }}>a</span> <span style={{ color:"#BFCC33" }}>E</span><span style={{ color:"#B2CC33" }}>n</span><span style={{ color:"#A6CC33" }}>t</span><span style={{ color:"#99CC33" }}>h</span><span style={{ color:"#8CCC33" }}>u</span><span style={{ color:"#80CC33" }}>s</span><span style={{ color:"#73CC33" }}>i</span><span style={{ color:"#66CC33" }}>a</span><span style={{ color:"#59CC33" }}>s</span><span style={{ color:"#4DCC33" }}>t</span><span style={{ color:"#40CC33" }}>s</span> <span style={{ color:"#33CC33" }}>U</span><span style={{ color:"#33CC40" }}>n</span><span style={{ color:"#33CC4D" }}>i</span><span style={{ color:"#33CC59" }}>t</span><span style={{ color:"#33CC66" }}>e</span> <span style={{ color:"#33CC73" }}>f</span><span style={{ color:"#33CC80" }}>o</span><span style={{ color:"#33CC8C" }}>r</span> <span style={{ color:"#33CC99" }}>H</span><span style={{ color:"#33CCA6" }}>u</span><span style={{ color:"#33CCB3" }}>m</span><span style={{ color:"#33CCBF" }}>o</span><span style={{ color:"#33CCCC" }}>r</span><span style={{ color:"#33BFCC" }}>o</span><span style={{ color:"#33B2CC" }}>u</span><span style={{ color:"#33A6CC" }}>s</span> <span style={{ color:"#3399CC" }}>C</span><span style={{ color:"#338CCC" }}>o</span><span style={{ color:"#337FCC" }}>n</span><span style={{ color:"#3373CC" }}>v</span><span style={{ color:"#3366CC" }}>e</span><span style={{ color:"#3359CC" }}>r</span><span style={{ color:"#334DCC" }}>s</span><span style={{ color:"#3340CC" }}>a</span><span style={{ color:"#3333CC" }}>t</span><span style={{ color:"#4033CC" }}>i</span><span style={{ color:"#4C33CC" }}>o</span><span style={{ color:"#5933CC" }}>n</span><span style={{ color:"#6633CC" }}>s</span> <span style={{ color:"#7333CC" }}>a</span><span style={{ color:"#7F33CC" }}>n</span><span style={{ color:"#8C33CC" }}>d</span> <span style={{ color:"#9933CC" }}>F</span><span style={{ color:"#A633CC" }}>u</span><span style={{ color:"#B233CC" }}>n</span><span style={{ color:"#BF33CC" }}>-</span><span style={{ color:"#CC33CC" }}>f</span><span style={{ color:"#CC33BF" }}>i</span><span style={{ color:"#CC33B2" }}>l</span><span style={{ color:"#CC33A6" }}>l</span><span style={{ color:"#CC3399" }}>e</span><span style={{ color:"#CC338C" }}>d</span> <span style={{ color:"#CC3380" }}>C</span><span style={{ color:"#CC3373" }}>h</span><span style={{ color:"#CC3366" }}>a</span><span style={{ color:"#CC3359" }}>t</span><span style={{ color:"#CC334D" }}>s</span><span style={{ color:"#CC3340" }}>!</span>
            </div>
        </> 
    );
}

export default Title;