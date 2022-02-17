import React from "react";

export default function Menu (){
    return(
        <div>
            <header>   	
                <div class="row">

                    <div class="top-bar">
                        <a class="menu-toggle" href="#"><span>Menu</span></a>

                        <div class="logo">
                            <a href="index.html">INICIO</a>
                        </div>		      

                        <nav id="main-nav-wrap">
                                <ul class="main-navigation">
                                    <li class="current"><a class="smoothscroll"  href="#intro" title="">Home</a></li>
                                    <li><a class="smoothscroll"  href="#about" title="">Acerca de mi</a></li>
                                    <li><a class="smoothscroll"  href="#resume" title="">Curriculum</a></li>
                                    <li><a class="smoothscroll"  href="#portfolio" title="">Portfolio</a></li>
                                    <li><a class="smoothscroll"  href="#contact" title="">Contacto</a></li>	
                                </ul>
                                
                        </nav>    		
                    </div> 
                </div>  		
            </header>
        </div>
    )
}