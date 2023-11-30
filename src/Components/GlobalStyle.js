import { createGlobalStyle } from "styled-components";

export const GlobalStyle=createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:"Work sans","sans-serif";
    background-color:${({theme})=>theme.colors.bgc};
}
html{
    overflow-x:hidden;
    scroll-behavior: smooth;
}
p{
    font-family: 'Karla', sans-serif;
    font-size:16px;
}
.myButton{
    background-color: rgb(70, 70, 185);
    font-family: 'Karla', sans-serif;
    font-size:13px;
}
.myButton:hover{
    color: rgb(70, 70, 185);
    background-color: white;
}
h6{
    font-family: 'Nunito', sans-serif;
    font-size:15px;
}



`