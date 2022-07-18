import React from "react";
import { BsTwitter, BsLinkedin,BsDownload,BsGithub } from "react-icons/bs";
function Contact() {
   return (
      <div className="app__social">
         <div>
            <a href="https://github.com/Nhlamuloj">
                <BsGithub/>
            </a>
         </div>
         <div>
            <a href="https://www.linkedin.com/in/nhlamulo-mahlabana-82b021178/">
               <BsLinkedin />
            </a>
         </div>
         
         <div>
            <a href="">
               <BsDownload />
            </a>
         </div>
        
      </div>
   );
}
export default Contact;