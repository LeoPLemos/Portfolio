import React from "react";

export default function Form (){
    return(
        <div>
            FORMULARIO DE CONTACTO
            <form name="contactForm" id="contactForm" method="post" action="">
      			<fieldset>
                    <div class="form-field">
 				        <input 
                            name="contactName" 
                            type="text" 
                            id="contactName" 
                            placeholder="Name" 
                            value="" 
                            minlength="2" 
                            required=""
                        />
                    </div>
                    <div class="form-field">
	      			    <input 
                            name="contactEmail" 
                            type="email" 
                            id="contactEmail" 
                            placeholder="Email" 
                            value="" 
                            required=""
                        />
	                </div>
                    <div class="form-field">
	     			    <input 
                            name="contactSubject" 
                            type="text" 
                            id="contactSubject" 
                            placeholder="Subject" 
                            value=""
                        />
	                </div>                       
                    <div class="form-field">
	                    <textarea 
                            name="contactMessage" 
                            id="contactMessage" 
                            placeholder="message" 
                            rows="10" 
                            cols="50" 
                            required=""
                        />
	                </div>                      
                    <div class="form-field">
                        <button class="submitform">Submit</button>
                        <div id="submit-loader">
                            <div class="text-loader">Sending...</div>                             
       				        <div class="s-loader">
							  	<div class="bounce1"></div>
							  	<div class="bounce2"></div>
							  	<div class="bounce3"></div>
							</div>
						</div>
                    </div>
      			</fieldset>
      		</form> 
            <div id="message-warning">            	
            </div>            
            <div id="message-success">
                <i class="fa fa-check">
                    Your message was sent, thank you!
                </i>
      		</div>
        </div>
    )
}