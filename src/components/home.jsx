import React, { Component } from 'react';
import Form from './contactForm';
import gitHub_logo from "../assets/icons/github.svg";
import linkedin_logo from "../assets/icons/linkedin.svg";
import foto_leo from "../assets/images/LPL FOTO.jpeg";
import weatherApp from "../assets/images/Weather App.png";
import pokemonApp from "../assets/images/Pokemons App.png";
import mozo from "../assets/images/Mozo Virtual.png";


export default function Home (){
    return(
        <div>
            <section id="intro">   
                <div class="intro-overlay"></div>	
                    <div class="intro-content">
                        <div class="row">
                            <div class="col-twelve">
                                <h5>Hola, Mundo.</h5>
                                <h1>Soy Leonardo Lemos.</h1>
                                <p class="intro-position">
                                    <span>Full Stack Web Developer</span>
                                    <span>Contador Público</span> 
                                </p>
                                <a class="button stroke smoothscroll" href="#about" title="">Más sobre mi</a>
                            </div>  
                        </div>   		 		
                    </div>  
                <ul class="intro-social">        
                    <li>
                        <a href="https://github.com/LeoPLemos">
                            <i>
                                <img src={gitHub_logo} alt="github"/>
                            </i>
                        </a>
                    </li>
                    <li>
                        <a href="http://www.linkedin.com/in/leonardo-lemos-7a541b1a2">
                            <i>
                                <img src={linkedin_logo} alt="linkedin"/>
                            </i>
                        </a>
                    </li>
                </ul>       	
            </section>

            <section id="about">  
                <div class="row section-intro">
                    <div class="col-twelve">
                        <h5>Acerca de mi</h5>
                        <h1>Déjame que me presente.</h1>
                        <div class="intro-info">
                            <img src={foto_leo} alt="Profile Picture"/>
                            <p class="lead">Me encanta pensar en soluciones para los problemas del mundo actual y me apasiona el estar constantemente investigando y aprendiendo nuevas cosas. 
                                En mis más de quince años de experiencia en el ámbito empresarial siempre he puesto el énfasis en la eficientización de procesos aplicando para ello las posibilidades que nos brindan las herramientas informáticas. Durante ese tiempo estuve especialmente interesado en el desarrollo y los avances del mundo IT. Ese interés me llevó a formarme como Full Stack Developer, consiguiendo dominar herramientas como JavaScript, React, Redux, NodeJS, Express, Sequelize, y PostgreSQL.
                                Me considero una persona proactiva, apasionada por lo que hace y comprometida con los objetivos del equipo del forma parte.
                            </p>
                        </div>   			
                    </div>   		
                </div> 
                <div class="row about-content">
                    <div class="col-six tab-full">
                        <h3>Perfil</h3>
                        <p>Contador Público con más de 15 años de experiencia en el ámbito empresarial. <br/>Full Stack Web Developer buscando comenzar mi carrera en el mundo de las ITs para aportar toda mi experiencia a la hora de encontrar soluciones innovadoras y eficientes a los problemas que presenta el mundo actual.</p>
                        <ul class="info-list">
                            <li>
                                <strong>Nombre completo:</strong>
                                <span>Leonardo Pablo Lemos</span>
                            </li>
                            <li>
                                <strong>Nacimiento:</strong>
                                <span>7 de agosto de 1978</span>
                            </li>
                            <li>
                                <strong>Ubicación:</strong>
                                <span>Córdoba - Argentina</span>
                            </li>   
                            <li>
                                <strong>Email:</strong>
                                <span>leonardopablolemos@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                    <div class="col-six tab-full">
                        <h3>Skills</h3>
                        <p>Aunque sigo permanentemente investigando y aprendiendo nuevas tecnologías, en mi formación como Full Stack Web Developer he logrado dominar las siguientes herramientas.</p>
                        <ul class="skill-bars">
                            <li>
                                <div class="progress percent90"><span>90%</span></div>
                                <strong>JavaScript</strong>
                            </li>
                            <li>
                                <div class="progress percent85"><span>85%</span></div>
                                <strong>React JS</strong>
                            </li>
                            <li>
                                <div class="progress percent80"><span>80%</span></div>
                                <strong>Redux</strong>
                                </li>
                                <li>
                                    <div class="progress percent85"><span>85%</span></div>
                                    <strong>SQL</strong>
                                </li>
                            <li>
                                <div class="progress percent90"><span>90%</span></div>
                                <strong>Node JS</strong>
                            </li>
                            <li>
                                <div class="progress percent85"><span>85%</span></div>
                                <strong>HTML5</strong>
                            </li>
                            <li>
                                <div class="progress percent75"><span>75%</span></div>
                                <strong>CSS3</strong>
                            </li>
                        </ul> 		
                    </div>
                </div>
                <div class="row button-section">
                    <div class="col-twelve">
                        <a href="#contact" title="Hire Me" class="button stroke smoothscroll">Hire Me</a>
                        <a href="#" title="Download CV" class="button button-primary">Download CV</a>
                    </div>   		
                </div>
            </section>   

            <section id="resume" class="grey-section">
                <div class="row section-intro">
                    <div class="col-twelve">
                        <h5>Curriculum</h5>
                        <h1>Más sobre mi vida.</h1>
                        <p class="lead">A lo largo de mi vida siempre he buscado nuevos desafíos y retos a los que enfrentarme. Eso me llevó a vivir un tiempo fuera de mi país, lo que me permitió aprender a adaptarme a las circunstancias de mi entorno, conviviendo con diferentes culturas, costumbres y formas de vivir y trabajar.</p>
               		</div>   		
   	            </div>  
   	            <div class="row resume-timeline">
               		<div class="col-twelve resume-header">
               			<h2>Experiencia Profesional</h2>
                    </div> 
                   	<div class="col-twelve">
               			<div class="timeline-wrap">
               				<div class="timeline-block">
            	   				<div class="timeline-ico">
	   		            			<i class="fa fa-briefcase"></i> 				
					            </div>
                                <div class="timeline-header">
                                    <h3>Contador Público Indepediente</h3>
                                    <p>Marzo 2019 - Actualidad</p>
                                </div>
                                <div class="timeline-content">
                                    <h4>Córdoba, Argentina</h4>
                                    <p>Asesoramiento integral en materia contable, impositiva, laboral, financiera y
                                    administrativa a clientes de diferentes rubros y envergadura.</p>
                                </div>
        	   			    </div> 
	   			            <div class="timeline-block">
    	   				        <div class="timeline-ico">
	       					        <i class="fa fa-briefcase"></i>
	   	    			        </div>
                                <div class="timeline-header">
                                    <h3>Responsable de Tesorería</h3>
                                    <p>Abril 2013 - Noviembre 2019</p>
                                </div>
                                <div class="timeline-content">
                                    <h4>Grupo Ecipsa - Córdoba, Argentina</h4>
                                    <p>Gestión de la totalidad de los pagos del grupo. Negociación con
                                        proveedores. Manejo y control de cuentas bancarias. Confección del
                                        presupuesto financiero y control de su ejecución. Contabilización
                                        de los movimientos del área y conciliación de cuentas.
                                        Elaboración de reportes para gerencia y Directorio.</p>
                                </div>
    	   			        </div>
            	   			<div class="timeline-block">
            	   				<div class="timeline-ico">
	   		            			<i class="fa fa-briefcase"></i>
	   				            </div>
            	   				<div class="timeline-header">
	   		            			<h3>Responsable Administrativo<br/>Contable</h3>
	   					            <p>Marzo 2005 - Diciembre 2011</p>
	   				            </div>
            	   				<div class="timeline-content">
	   		            			<h4>DIPRO 65 BCN S.L. - Barcelona, España</h4>
	   					            <p>Responsable de la gestión administrativa y contable de la empresa.
                                        Elaboración y seguimiento de presupuestos. Gestión de Tesorería. Relación
                                        con proveedores e instituciones financieras. Reportando directamente ante
                                        los socios de la Sociedad.</p>
	   				            </div>
            	   			</div>
               			</div>    			
   		            </div> 
   	   	        </div> 
   	   	        <div class="row resume-timeline">
               		<div class="col-twelve resume-header">
               			<h2>Educación</h2>
               		</div>
               		<div class="col-twelve">
               			<div class="timeline-wrap">
               				<div class="timeline-block">
	   				            <div class="timeline-ico">
	   					            <i class="fa fa-graduation-cap"></i>
	   				            </div>
                                <div class="timeline-header">
                                    <h3>BootCamp</h3>
                                    <p>Diciembre 2021</p>
                                </div>
                                <div class="timeline-content">
                                    <h4>Soy Henry - Argentina</h4>
                                    <p>Full Stack Web Developer.</p>
                                </div>
        	   	    		</div>
	   			            <div class="timeline-block">
            	   				<div class="timeline-ico">
	   		            			<i class="fa fa-graduation-cap"></i>
	   				            </div>
            	   				<div class="timeline-header">
	   		            			<h3>Posgrado</h3>
	   					            <p>Mayo 2004</p>
	   				            </div>
            	   				<div class="timeline-content">
	   		            			<h4>Centro de Estudios Financieros - Barcelona, España</h4>
	   					            <p>Gestión de Tesorería.</p>
	   				            </div>
            	   			</div>
            	   			<div class="timeline-block">
            	   				<div class="timeline-ico">
	   		            			<i class="fa fa-graduation-cap"></i>
	   				            </div>
            	   				<div class="timeline-header">
	   		            			<h3>Licenciatura</h3>
	   					            <p>Febrero 2003</p>
	   				            </div>
            	   				<div class="timeline-content">
	   		            			<h4>Universidad Nacional de Córdoba - Córdoba, Argentina</h4>
	   					            <p>Contador Público.</p>
	   				            </div>
            	   			</div> 
   			            </div> 
   		            </div>
               	</div> 
        	</section>

            <section id="portfolio">
        		<div class="row section-intro">
   		            <div class="col-twelve">
               			<h5>Portfolio</h5>
   			            <h1>Mira algunos de mis trabajos.</h1>
               			<p class="lead">Aquí puedes ver algunos de los proyectos que he desarrollado.</p>
               		</div>   		
   	            </div>  
   	            <div class="row portfolio-content">
               		<div class="col-twelve">
        			   <div id="folio-wrapper">
				            <div class="bgrid folio-item" id="folio-item-2">
					            <div class="item-wrap" id="folio-item-2">
						            <img src={weatherApp} alt="Weather_App"/>
						            <a href="#modal-01" class="overlay">	                  	           
							        <div class="folio-item-table">
								        <div class="folio-item-cell">
									        <h3 class="folio-title">Weather App</h3>	     					    
									        <span class="folio-types">
										        Front End
		     					            </span>
		     					        </div>	                      	
								    </div>                    
							        </a>
						        </div>	               
	        		        </div>
	        		        <div class="bgrid folio-item" id="folio-item-3">
						        <div class="item-wrap" id="folio-item-3">
							        <img src={pokemonApp} alt="Pokemon"/>
							        <a href="#modal-02" class="overlay">              		                  
								    <div class="folio-item-table">
									    <div class="folio-item-cell">
										    <h3 class="folio-title">Pokémon's App</h3>	     					    
										    <span class="folio-types">
											    FullStack
										    </span>		     		
		     					        </div> 	                      	
								    </div>                    
							        </a>
						        </div>
	        		        </div> 
					        <div class="bgrid folio-item" id="folio-item-1">
					            <div class="item-wrap">
						            <img src={mozo} alt="Mozo_Virtual"/>
						            <a href="#modal-03" class="overlay">             		                  
							        <div class="folio-item-table">
								        <div class="folio-item-cell">
									        <h3 class="folio-title">Mozo Virtual</h3>	     					    
											    <span class="folio-types">
												    FullStack
										        </span>		     		
										</div> 	                      	
							        </div>                    
						            </a>
					            </div>
					        </div>
                        </div>
                    </div> 
                </div>       
            </section>

            <section id="contact">
            	<div class="row section-intro">
   		            <div class="col-twelve">
               			<h5>Contacto</h5>
   			            <h1>Me encantaría escucharte.</h1>
               			<p class="lead">Si te interesa mi perfil o tienes alguna pregunta para hacerme, no dudes en ponerte en contacto conmigo. Estaré encantado de contestarte lo más pronto posible.</p>
               		</div> 
   	            </div>
               	<div class="row contact-form">
               		<div class="col-twelve">
                        <Form />
                    </div>
               	</div>
               	<div class="row contact-info">
               		<div class="col-four tab-full">
               			<div class="icon">
   			            	<i class="icon-pin"></i>
   			            </div>
               			<h5>Mi ubicación</h5>
               			<p>
                        Córdoba, Argentina            
                        </p>
               		</div>
                    <div class="col-four tab-full collapse">
                        <div class="icon">
                            <i class="icon-mail"></i>
                        </div>
                        <h5>Escríbeme a</h5>
                        <p>leonardopablolemos@gmail.com</p>
                    </div>
                    <div class="col-four tab-full">
                        <div class="icon">
                            <i class="icon-phone"></i>
                        </div>
                        <h5>Llámame al</h5>
                        <p>Celular: (+54) 351 7672308</p>
                    </div>
                </div>
	        </section>
        </div>
    )    
}