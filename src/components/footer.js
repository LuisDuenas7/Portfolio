import { BsGithub,BsLinkedin,BsFillFileEarmarkArrowDownFill } from "react-icons/bs";
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'




const Footer =()=>{

   const MySwal = withReactContent(Swal)
   

// ===============Email Service========================================



   const sendEmail=(e)=>{
     e.preventDefault();
     emailjs.sendForm('service_yi6t5um','template_qkpt26s',e.target,'YXJTYP50K9pAQLZ_r')
       .then(res => console.log(res.status))
       .catch(error => console.log(error));
       e.target.reset()
       
       MySwal.fire({
         title: <strong>Email Send!</strong>,
         html: <i>I will contact you soon!</i>,
         icon: 'success'
       })
   }

// ===============================================================
    return(
        <div className="footer-box" id="footer">

    <form onSubmit={sendEmail} className="form-box">
               <div className="tittle-box">
                    <p className="text-content2"> Contact Me</p>

                </div>
    
           <div className="box-left">    
              <div>
                  <input className="input" type='text' name='user_name' placeholder="Name"></input>
              </div>
            
            
              <div>
                 <input className="input" type='text' name='user_subject' placeholder="Subject"></input>
              </div>
        
              <div>
                 <input className="input" type='email' name='user_email' placeholder="Email"></input>
              </div>
         </div>
         
         <div className="box-right">    
               <div>
                 <textarea className="input-message" name="user_message" placeholder="Send me a message..."></textarea>
                </div>
            
            
                <div>
                  <button className="submit"> SUBMIT</button>
                </div>
         </div>   

         
    </form>

         <div className="link-box">
            
            <div>
               <a  href="https://github.com/LuisDuenas7" target="_blank" rel="noopener noreferrer"><BsGithub className="icons-links"/></a>
            </div>
            
            <div>
               <a className="icons-links" href='../cv/LuisDuenas.pdf' target="_blank" rel="noopener noreferrer" download="Cv_LuisDueñas"> <BsFillFileEarmarkArrowDownFill className="icons-links"/> </a>   
            </div>
            
            <div>
               <a className="icons-links" href="https://linkedin.com/in/luis-dueñas-becerra-80aa3b228" target="_blank" rel="noopener noreferrer">  <BsLinkedin className="icons-links" /> </a>
            </div>



         </div>
        
        
        </div>
        
        
            )
}

export default Footer

















