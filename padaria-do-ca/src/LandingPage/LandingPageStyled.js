import PlanoDeFundo from "../Imagens/Backgrund3.jpg"
import img1 from "../Imagens/RefrigeranteLandPage.jpg"
import img2 from "../Imagens/LandpageDog.jpg"
import img3 from "../Imagens/CompotaLandPage.jpg"
import styled from "styled-components"
import breakpoints from "../components/breakpoints"
export const Wrapper = styled.section`


#wrap-backgrund{
    width: 100vw;
    height: 95vh;
    background-image: url(${PlanoDeFundo});
    background-size: cover;
    opacity: 1;
    position: absolute;
    z-index: -1;
    
    
    
}
#landing-page-text1{
    margin-top: 45px;
    width: 100%;
font-family: Raleway;
color: white;
font-size:35px;
text-align: center;


}
#camargo{
    font-family: PlayFairDisplay;
    font-weight: 100;
    font-size: 84px;
    color: #ffffff;
    @media ${breakpoints.exm}{
        
        transform: scale(1.1);
    }
    @media ${breakpoints.bm}{
        
        transform: scale(0.96);
    }

}
#padaria{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 100;
    font-size: 30px;
    @media ${breakpoints.exm}{
        
        transform: scale(1.1);
    }
     @media ${breakpoints.bm}{
        
        transform: scale(0.96);
    }
   
}
#wrap-second-part{
    display: flex;
    justify-content: space-around;
    margin-right: -0px;
    @media ${breakpoints.bm}{
        margin-right: 10px; 
        
    }
    @media ${breakpoints.bm2}{
        margin-right: -10px; 
        
    }
    
    
}
#landing-page-text2{
    margin-top: 43px;
    padding: 50px;
    width: 500px;
    color: aliceblue;
    @media ${breakpoints.exm}{
        margin-top: 83px;
        transform: scale(1.2);
    }
    @media ${breakpoints.bm}{
        margin-top: 83px;
        transform: scale(1.1);
    }
}
#landing-page-text2 p{
    margin-top: 20px;
    
}
  
.Img1{
    
    height: 300px;
}
.box-1{
    background: url(${img1});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 380px;
    width: 280px;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    border-color: rgb(255, 255, 255);
    border-style: solid;
    text-align: center;
    
    @media ${breakpoints.exm}{
        margin-top: 140px;
        transform: scale(1.2);
    }
    @media ${breakpoints.bm}{
        
        transform: scale(1.1);
    }
    @media ${breakpoints.bm2}{
        
        transform: scale(1.07);
        
    }
    
    
    
}
#text1{
    
    width: 200px;
    margin-top: 200px;
    justify-content: bottom;
    font-family: Raleway;
    color: aliceblue;
    text-align: center;
    font-size: 17px;
    margin: 0 auto;
    margin-top: 200px;
}
.para{
    text-align: center;
    margin-top: 13px;
    display: flex;
    justify-content: center;
    font-size: 14px;
    font-family: Raleway;
    font-weight: 300;
    color: #EEEEEE;
    
}
.Nomes{
    font-family: Lora;
    font-size: 25px;
    font-weight: 400;
    
}

.box-2{
    background: url(${img2});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 380px;
    width: 280px;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    border-color: rgb(255, 255, 255);
    border-style: solid;

    @media ${breakpoints.exm}{
        transform: scale(1.2);
        margin-top: 140px;
    }
    @media ${breakpoints.bm}{
        
        transform: scale(1.1);
    }
    @media ${breakpoints.bm2}{
        
        transform: scale(1.07);
        
    }
}
.box-3{
    background: url(${img3});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 380px;
    width: 280px;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    border-color: rgb(255, 255, 255);
    border-style: solid;
    @media ${breakpoints.exm}{
        transform: scale(1.2);
        margin-top: 140px;
    }
    @media ${breakpoints.bm}{
        
        transform: scale(1.1);
    }
    @media ${breakpoints.bm2}{
        
        transform: scale(1.07);
        
    }
}
#SubTítulo{
    font-size: 29px;
    font-weight: 325;
    font-family: Lora;
    color: #D2A679;
}
.Corpo{
    color: #EEEEEE;
    font-weight: 350;
    font-size: 15px;
    font-family: Raleway;
}
#btn{
    height: 40px;
    width: 150px;
    font-family: sans-serif;
    font-size: 15px;
    border-radius: 17px;
    border-style: none;
    transform: translate(75%, -230%);
    from {
    transform: scale(1.0);
    }
    to {
    transform: scale(1.1);
  }
    @media ${breakpoints.exm}{
        height: 50px;
        width: 190px;
        transform: translate(40%, -150%);
        
    }
    
}



`
