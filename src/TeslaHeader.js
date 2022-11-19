//4-aur mene logo,centerMenu,rightMenu styled component hai 
//isiliye style-components ko install kiya
import styled from "styled-components"

//1-ek aur functional component banaya header se related code yaha pr karenge
export default function TeslaHeader(){
    return(
        <>
        {/* 9-yeh hogya parent MainMenu inn sbka jismein logo,centerMenu,rightMenu */}
            <MainMenu>       
        {/*2-header mein divide krenge jo bhi tesla ke page mein hai header mein*/}
        {/*3-yeh humare khudke tags hai but esse tag toh html mein hotey nhi hai */}
                <Logo>

                    {/*6-logo mein img chahiye tesla logo */}
                    <img src='images/Tesla-Logo (2).svg'></img>
                </Logo>
                <CenterMenu>
                    {/*7-toh mein ek list-items le leta hu middle menu ke liye*/}
                    <ul>
                        <li><a href='#'>Model S</a></li>
                        <li><a href='#'>Model 3</a></li>
                        <li><a href='#'>Model X</a></li>
                        <li><a href='#'>Model Y</a></li>
                        <li><a href='#'>Solar Roof</a></li>
                        <li><a href='#'>Solar Panels</a></li>
                    </ul>
                </CenterMenu>
                <RightMenu>
                    <ul>
                        {/* 8-header-right-menu */}
                        <li><a href='#'>Shop</a></li>
                        <li><a href='#'>Account</a></li>
                        <li><a href='#'>Menu</a></li>
                    </ul>
                </RightMenu>
            </MainMenu> 
        </>
    )
}
//--fix the position cuz header is not stable at one position esse image mein cover legi nhi toh img ko lagega yeh alag portion hai
//19-padding de do idar udar se means left border se and right border se
//18-header ki height fix kr dete hai top se
//17-anchor tags mein gap chahiye beech mein ul-li-a
//16-sabhi ele ko center pr le aao use alignItesm
//13-list ki line hatani hai textDecoration
//10-MainMenu ko bhi kr do define //11-12 point ko mein main menu mein likh skta hai kuki parent hai
const MainMenu=styled.header`
display:flex;
ul li a{
    text-decoration:none;
    padding:0 1rem;
    color: #393c41;
}
align-items:center;
height:60px;
padding:0 3rem;
position : fixed;
`
//5-style-componets ko declare krna hai
const Logo=styled.header`               
img{
    height:50px;
    width:130px;
}
`
//14-list style none kr do dots ke liye
//11-parent CenterMenu oske ul pr laga do display:flex kuki horizontal chahiye ele
const CenterMenu=styled.header`
ul{
    display:flex;
    list-style:none;
    margin-left:15rem;
}
`
//12-same as 11   //15-same as 14
const RightMenu=styled.header`
ul{
    display:flex;
    list-style:none;
    margin-left:11rem;
}
`