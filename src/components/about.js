import cube from '../img/cube1.gif'


const About= ()=>{
    return(
        <div className="about-box" id="about">
         <div className="text-box-about">
             <h5 className="text-about"> ABOUT ME </h5>
         </div>
         
         <div className="name-box">
             <h3 className="text-name"> LUIS DUEÑAS</h3>

         </div>

         <div className="location-box">
             <h6 className="text-location">
                 GUADALAJARA,MEXICO
             </h6>

         </div>

         <div className="content-box">
           <p className="text-content">
               Hi, im a developer actually focus in front end,
               originally and based in Guadalajara, Mexico. Im mostly working
               with React, Node js, Express Js and PostgreSql.
              <br></br>
               Im a apassionate to the music and programing...
               I'm opend to work, and finding for new challenges,
               Feel free to check out some of my projects!


           </p>
           <img className='cube' src={cube} alt='cube'/>
         </div>
        
        
        </div>
        
        
            )
}

export default About