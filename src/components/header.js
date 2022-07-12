import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import { IoMdHome,IoIosInformationCircleOutline,IoMdBriefcase } from "react-icons/io"
import { RiContactsBookFill } from "react-icons/ri";
import { useState } from 'react';


const Header=()=>{
 const [isActive,setIsActive]=useState('')


    return(
<div className="header-box">
 
    <BrowserRouter> 
    <div className='tittle'>
      <h3 className='text text-size120'>  </h3>
     </div>
     
      
    <div className='links-box'>
      <div className='links'>      
         <Link to='#home' onClick={()=> setIsActive('home')}><IoMdHome className={isActive === 'home' ? 'icon-active': 'icons' } /></Link>
       
       
        
        <Link to='#about' onClick={()=> setIsActive('about')}><IoIosInformationCircleOutline className={isActive === 'about' ? 'icon-active': 'icons' }/></Link>
       
      
      
       <Link to='#portafolio' onClick={()=> setIsActive('portafolio')}><IoMdBriefcase className={isActive === 'portafolio' ? 'icon-active': 'icons' }/></Link>
      
      
      
        <Link to='#footer' onClick={()=> setIsActive('footer')}><RiContactsBookFill className={isActive === 'footer' ? 'icon-active': 'icons' }/></Link>
      </div> 
        
     </div>
    
     
     </BrowserRouter>
     
 </div>





    )
}

export default Header