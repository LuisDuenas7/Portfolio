import { useState } from "react"
import { motion} from "framer-motion"
import { MdArrowForwardIos,MdArrowBackIos } from "react-icons/md";

const Portafolio=()=>{

    const[view, setView]=useState('ecommerce')

    return(
        <div className="portafolio-box" id="portafolio">
         <div className="text-box-about">
             <h5 className="text-about"> PROJETCS </h5>
         </div>

         
    <div className="box-projects">
      { view === 'ecommerce' ?
          <div    className="e-commerce-box">

              
              
              <motion.a
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.9 }}
              
               className="link-img-ecommerce" href="https://ecommerce-ld7.netlify.app/" target="_blank" rel="noopener noreferrer"> 
              
             </motion.a>

           
                       
              <div className="info-box">
                
              <h4 className="text-project">E-Commerce</h4>
                 <span className="text-project"> REACT REDUX ROUTER API AXIOS </span>
                   <span className="text-ecommerce">USER: admin@admin.com   PASSWORD: root</span>
              </div>

              


          <button className="button-port-previus" onClick={()=> setView('crud') }> <MdArrowBackIos className="icon-button-next"/></button>
          <button className="button-port" onClick={()=> setView('rick') } > <MdArrowForwardIos className="icon-button-next"/></button>
          </div>
          
          : view === 'rick'?

          <div className="rick-box">
              <motion.a
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.9 }}
              
               className="link-img-rick" href="https://rickmorty-ld7.netlify.app/" target="_blank" rel="noopener noreferrer"> 
              
             </motion.a>
   


           <div className="info-box">
           <h4 className="text-project">RICK & MORTY</h4>
              <span className="text-project"> REACT API AXIOS </span>
            </div>




            <button className="button-port-previus" onClick={()=> setView('ecommerce') }> <MdArrowBackIos className="icon-button-next"/></button>
          <button className="button-port" onClick={()=> setView('crud') }> <MdArrowForwardIos className="icon-button-next"/></button>
          </div>
          :
         
         <div className="crud-box">
            <motion.a
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.9 }}
              
               className="link-img-crud" href="https://crud-ld7.netlify.app/" target="_blank" rel="noopener noreferrer"> 
              
             </motion.a>
                 


                    <div className="info-box">
                    <h4 className="text-project">CRUD USER</h4>
                       <span className="text-project"> REACT API AXIOS </span>
                    </div>





                <button className="button-port-previus" onClick={()=> setView('rick') }> <MdArrowBackIos className="icon-button-next"/></button>
                <button className="button-port" onClick={()=> setView('ecommerce') }> <MdArrowForwardIos className="icon-button-next"/></button>


         </div>

}
        
     </div>
        

        
        </div>
        
        
            )
}

export default Portafolio