import { createGlobalStyle } from "styled-components";
import { COLOR } from "./constant";

const GlobalStyle = createGlobalStyle`

*,
::before,
::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    font-size:62.5%;
    scroll-behavior: smooth;
    @media (max-width:1000px){
        font-size:56.25%;
    }
    @media (max-width:600px){
        font-size:50%;
    }
}

body{
    font-family: 'Raleway', sans-serif;
    font-size:1.6rem;
    font-weight:400;
}

a{
    text-decoration:none;
    color:${COLOR.White}
}

ul,
li{
    list-style:none;
}

h1{
    font-size:4.8rem;
    letter-spacing: 2px;
    font-weight:400;
    @media (max-width:600px){
        font-size:4.2rem;
    }
    @media (max-width:450px){
        font-size:3.2rem;
    }
}

h2{
    font-size:3.4rem;
    letter-spacing:1px;
    font-weight:400;
    @media (max-width:600px){
        font-size:1.8rem;
    }
}
.active{
    color:${COLOR.cherry};
}
`;

export default GlobalStyle;
