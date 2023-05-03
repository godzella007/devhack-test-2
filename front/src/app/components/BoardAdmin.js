import React from "react";
import { Link } from "react-router-dom";

const BoardAdmin = () => {
 

  return (
  <>
  <div className="deznav">
    <div className="deznav-scroll">
        
        <br/>
        <center>
                <div className="menu-icon">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M2.5 7.49999L10 1.66666L17.5 7.49999V16.6667C17.5 17.1087 17.3244 17.5326 17.0118 17.8452C16.6993 18.1577 16.2754 18.3333 15.8333 18.3333H4.16667C3.72464 18.3333 3.30072 18.1577 2.98816 17.8452C2.67559 17.5326 2.5 17.1087 2.5 16.6667V7.49999Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M7.5 18.3333V10H12.5V18.3333" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
							</svg> 
                        
						</div>
                        </center>
               <p>Dashbord</p>
		
                       <br/><br/>
                       <ul className="metismenu" id="menu">  
            <li>
                <a className="has-arrow" href=";" aria-expanded="false">
             <div className="menu-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clip-rule="evenodd" d="M18.634 13.4211C18.634 16.7009 16.7007 18.6342 13.4209 18.6342H6.28738C2.99929 18.6342 1.06238 16.7009 1.06238 13.4211V6.27109C1.06238 2.99584 2.26688 1.06259 5.54763 1.06259H7.38096C8.03913 1.06351 8.65879 1.37242 9.05296 1.89951L9.88988 3.01234C10.2859 3.53851 10.9055 3.84834 11.5637 3.84926H14.1579C17.446 3.84926 18.6596 5.52309 18.6596 8.86984L18.634 13.4211Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M5.85754 12.2577H13.8646" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
              </div>
                    <span className="nav-text">L'information </span>
                </a>
                <ul role="menubar">
                    <li>  <Link to={"/Profile"} className="nav-link">
                    Profile
                </Link>
                </li>
                   
                    <li>  <Link to={"/EditProfile"} className="nav-link">
                  EditProfile
                </Link>
                </li>  
                </ul>
            </li>
            <li>
                <a className="has-arrow" href=";" aria-expanded="false">
                    <div className="menu-icon">  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg> </div>
                    <span className="nav-text">liste </span>
                </a>
                <ul role="menubar">
                  
               
                   
                <li className="nav-item">
            <Link to={"/tutorials"} className="nav-link">
           liste Hackathons
            </Link>
          </li>       
                </ul>
            </li>
          
        </ul>
    </div>
</div>
  </>
  );
};

export default BoardAdmin;
