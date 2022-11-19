import styled from "styled-components"
//1-create component bhara use krna hai toh export default lgna hai
export default function TeslaSection(props){
    return(
        // dynamic krna padega imges ko bhi
        <MainSection bg={props.bgimg}>
            <Car>
                {/* //--hard code nhi krna hai props ke andar jo name set hua hai oss se use kro */}
                <h1>{props.name}</h1>
                <p>{props.tagline}</p>
            </Car>
            <Buttons>
                <LButton>{props.lbuttontext}</LButton>
                {/* //--isko bolte conditional-rendering kuki isko 2 button lg rahe thay ab jb rbutton ayega nhi ismein toh khali lbutton show hoga */}
                {props.rbuttontext && <RButton>{props.rbuttontext}</RButton>}
            </Buttons>
        </MainSection>
    )
}
//--img ka argument pass kr ke function ko call karega
//2-kuch background img related css ki power ka khyal rkhna hai
const MainSection=styled.div`
background-image : url(images/${props=>props.bg});
background-repeat : no-repeat;
background-position : center;
background-size : cover;
scroll-snap-type: y mandatory;     
overflow: auto;
height: 100vh;
`
//--padding de do upar se niche lna hai left-right alright
//--x-y axis pr khel kr center mein aao
//--muje vertical chahiye flex dirction car component ki
const Car=styled.div`
display : flex;
flex-direction : column;
align-items : center;
justify-content : center;
padding-top : 10vh;
`
//--use property on parent(Buttons-Component) for buttons
const Buttons=styled.div`
text-align : center;
padding-top : 53vh;
`
//give margin between ele
//--ele looks-like close to its box use padding
//--<anchor> jo hai inline ele hai isko farak nhi padega height width se change its but display:inline-block aloow to use height width
//--opacity for button transparency
//--for text color white
const LButton=styled.a`
background-color: rgb(25,30,35);
opacity: 0.9;
color: #fff;
height: 22px;
display : inline-block;
width : 250px;
padding : 10px;
margin : 0 1.5rem;
border-radius : 0.3rem;
border : none;
font-size: 18px;
`
const RButton=styled.a`
background-color: #fff;
opacity: 0.65;
color: #171a20;
height: 22px;
display : inline-block;
width : 250px;
padding : 10px;
border-radius : 0.3rem;
border : none;
font-size: 18px;
`