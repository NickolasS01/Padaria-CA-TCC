import breakpoints from "../components/breakpoints";

const { default: styled } = require("styled-components");

const StyledMenu = styled.header`
@font-face {
    font-family: Poppins;
    src: url(../../public/Poppins-Medium.ttf);
}
.Logo{
    
    @media ${breakpoints.exm}{ 
        height: 60px;
    width: 100px;
    margin: 15px;
        
    }
}
header{
    background-color: #FFF2D9;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    @media ${breakpoints.exm}{ 
    background-color: #FFF2D9;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    }
    
    
}
ul{
    display: flex;
    
    
}
#Categorias{
    transform: translateX(90%);
    display: flex;
    justify-content: center;

    @media ${breakpoints.exm}{ 
    transform: translateX(100%);
    display: flex;
    justify-content: center;
    }
}
li{
    
    display: flex;
    padding: 30px;
    @media(max-width: 945px ){
        padding: 30px 15px 0px;
        
    }
    @media(max-width: 390px ){ 
        opacity: 0;
        
    }

    
    
}
li a{
    text-decoration: none;
    color: #000000;
    font-family: Poppins;
    font-weight: normal;
    font-size: 20px;
    @media(max-width: 945px ){
       
        font-size: 18px;
    }
    @media(max-width: 1920px ){ 
        font-size: 22px;
    }
    text-align: center;
}
li a:hover{
    text-decoration: underline;
    transform: scale(1.05);
    transition: 0.5s;
}
.ItensLogin img{
    display: inline;
    height: 50px;
    width: 50px;
    margin: 10px;
    margin-right: 30px;
    
    
    
}
.Envelopador-menu{
    position: absolute;
    top: 7%;
    right: 0%;
    width: 320px;
    
}



#Imagem-perfil{
    width: 100px;
    height: 10vh;
}
.menu{
    background: #FFF2D9;
    padding: 20px;
    margin: 10px;
}
.user{
    display: flex;
    align-items: center;

}
.user h3{
    font-weight: 500;
}
.user img{
    width: 60px;
    border-radius: 50%;
    margin-right: 15px;
}
.menu hr{ 
    border: 0;
    height: 1px;
    width: 100%;
    background: #ccc;
    margin: 15px 0 10px;
}
.menu-link{
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #525252;
    margin: 12px 0;
}
.menu-link p{
    width: 100%;
}
.menu-link img{
    width: 40px;
    background: #FFF2D9;
    border-radius: 50%;
    padding: 8px;
    margin-right: 15px;
}
.menu-link span{
    font-size: 22px;
    transition: transform 0.5s;
}
.menu-link:hover span{
    transform: translateX(5px);
}
.menu-link:hover p{
font-weight: 600;
}
.Envelopador-menu.active{
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    transition: var(--speed) ease;
}
.Envelopador-menu.inactive{
    opacity: 0;
    visibility: hidden;
    transform: translateY(0);
    transition: var(--speed) ease;
}
`
export default StyledMenu;