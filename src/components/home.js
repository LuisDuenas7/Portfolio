
import img from '../img/me.png'


const Home= ()=>{
    return(
<div className="home-box" id="home">
    <div className="home-tittlesBox">

           <div className="portfolio-text">
                 <h3><span className="efe-text">P</span><span className="efe-text">O</span><span className="efe-text">R</span><span className="efe-text">T</span>
                 <span className="efe-text">F</span><span className="efe-text">O</span><span className="efe-text">L</span><span className="efe-text">I</span><span className="efe-text">O</span>  </h3>
           </div>

             <div className="main-textUp">
             <h3 className='tittle-text' > <span className="efe-textUp1">H</span><span className="efe-textUp2">i</span><span className="efe-textUp3">,</span><span > </span>
              <span className="efe-textUp5">I</span><span className="efe-textUp6">'</span><span className="efe-textUp7">m</span><span className="efe-textUp"> </span>
              <span className="efe-textUp8">L</span><span className="efe-textUp9">u</span><span className="efe-textUp10">i</span><span className="efe-textUp11">s</span><span className="efe-textUp"> </span>
              <span className="efe-textUp12">D</span><span className="efe-textUp13">u</span><span className="efe-textUp14">e</span><span className="efe-textUp15">ñ</span><span className="efe-textUp16">a</span><span className="efe-textUp17">s</span><span className="efe-textUp18">.</span>



             </h3>
    
             </div>  
    

    </div>

         <div className="middle-photo">
            <img className="photo" src={img} alt="Img"/>   
         

         </div>
         <div className="box-lowText">
          <h3 className="tittle-textLow">Im a front end developer. and this is  some of my work.
               </h3><span className="bar-blink">|</span>
         </div>
        </div>
        
        
            )
}

export default Home
