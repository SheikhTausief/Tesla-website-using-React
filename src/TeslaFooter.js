import styled from "styled-components"

export default function TeslaFooter(){
    return(
        <>
            <FooterMenu>
                <ul>
                    <li><a href='#'>Tesla &copy; 2022</a></li>
                    <li><a href='#'>Privacy & Legal</a></li>
                    <li><a href='#'>Vehicle Recalls</a></li>
                    <li><a href='#'>Contact</a></li>
                    <li><a href='#'>Careers</a></li>
                    <li><a href='#'>News</a></li>
                    <li><a href='#'>Engage</a></li>
                    <li><a href='#'>Locations</a></li>
                </ul>
            </FooterMenu>
        </>
    )
}

const FooterMenu=styled.footer`
ul{
    align-items:center;
    justify-content:center;
    display:flex;
    list-style:none;
}
a{
    color: #393c41;
    text-decoration:none;
    padding: 0 10px;
}
`