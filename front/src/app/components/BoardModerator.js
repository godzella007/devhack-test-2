import React from "react";
import { Link } from "react-router-dom";
const BoardModerator = () => {

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
                    <div className="menu-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clip-rule="evenodd" d="M18.634 13.4211C18.634 16.7009 16.7007 18.6342 13.4209 18.6342H6.28738C2.99929 18.6342 1.06238 16.7009 1.06238 13.4211V6.27109C1.06238 2.99584 2.26688 1.06259 5.54763 1.06259H7.38096C8.03913 1.06351 8.65879 1.37242 9.05296 1.89951L9.88988 3.01234C10.2859 3.53851 10.9055 3.84834 11.5637 3.84926H14.1579C17.446 3.84926 18.6596 5.52309 18.6596 8.86984L18.634 13.4211Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M5.85754 12.2577H13.8646" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
							</svg></div>
                    <span className="nav-text">L'information </span>
                </a>
                <ul role="menubar">
                    <li>  <Link to={"/Profile"} className="nav-link">
                    Profile
                </Link>
                </li>
                   
                    <li>  <Link to={"/login"} className="nav-link">
                  EditProfile
                </Link>
                </li>
                
                  
                  
                </ul>
            </li>
            <li>
                <a className="has-arrow" href=";" aria-expanded="false">
                    <div className="menu-icon"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M6.75713 9.35157V15.64" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M11.0349 6.34253V15.64" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M15.2428 12.6746V15.64" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
								<path fillRule="evenodd" clip-rule="evenodd" d="M15.2952 1.83333H6.70474C3.7103 1.83333 1.83331 3.95274 1.83331 6.95306V15.0469C1.83331 18.0473 3.70157 20.1667 6.70474 20.1667H15.2952C18.2984 20.1667 20.1666 18.0473 20.1666 15.0469V6.95306C20.1666 3.95274 18.2984 1.83333 15.2952 1.83333Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
							</svg></div>
                    <span className="nav-text">Jeux</span>
                </a>
                <ul role="menubar">
                <li className="nav-item">
             <Link to={"/add"} className="nav-link">
             <svg xmlns="http://www.w3.org/2000/svg" width="21" height="14" fill="currentColor" className="bi bi-plus-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
</svg> Add Hackathons
            </Link>
          </li>
                   
          <li className="nav-item">
            <Link to={"/tutorials"} className="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="14" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg> liste Hackathons
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

export default BoardModerator;
