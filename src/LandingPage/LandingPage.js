import NavMenu from "../NavMenu/NavMenu";
import "./LandingPage.css"

function LandingPage(){
    return(
        <>
        <NavMenu />
        <div id="wrap-backgrund"> 
            <div id="landing-page-text1">
                <h1 id="camargo">Padaria do Camargo</h1>
                <p id="padaria">A melhor padaria da cidade</p>
            </div>
            <div id="wrap-second-part">
            <div id="landing-page-text2">
               <h3 id="SubTítulo">Venha conhecer nossa variedade de produtos</h3>  
               <p className="Corpo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type  </p>
                <p className="Corpo"> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 </p>
                
                </div>
                <div className="box-1"><div id="text1"><h2 className="Nomes">Refrigerantes</h2><p className="para">There are many variations of passages of Lorem Ipsum available, but the majorit</p></div></div>
                <div className="box-2"><div id="text1"><h2 className="Nomes">Cachorro quente</h2><p className="para">eqda  awdkbj hawdoa wdiuawdg yuioadwg yioawdg yu awdyu aiouywd oiawd yuioawd uyiowawda</p></div></div>
                <div className="box-3"><div id="text1"><h2 className="Nomes">Compotas</h2><p className="para">eqda  awdkbjawd doa wdiuawdg yuioadwg yioawdg yu awdyu aiouywd oiawd yuioawd uyiowawda</p></div></div>
                
                </div>
            <button id="btn">Learn More</button>
        </div>

        



        </>
    )
    
}
export default LandingPage;