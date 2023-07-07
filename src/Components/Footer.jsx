import { faGoogle, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faAddressCard, faMailBulk, faMobileScreen, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Row } from 'reactstrap'

function Footer() {
  return (
   
    <footer
          className=" my-3 text-center text-lg-start text-white"
          style={{backgroundColor: '#45526e'}}
          >

    <div class="container p-4 pb-0">
    
      <section class="">
    
        <div class="row">
    
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">
            <a href="/" class="text-decoration-none text-white"> LearnWithBlogs</a>
            </h6>
            <h6 class="text-uppercase mb-4 font-weight-bold">
             <a href="/about" class="text-decoration-none text-white">About Us</a> 
            </h6>
            <h6 class="text-uppercase mb-4 font-weight-bold">
             <a href="/services" class="text-decoration-none text-white">Services</a> 
            </h6>
            <h6 class="text-uppercase mb-4 font-weight-bold">
             <a href="/blogs" class="text-decoration-none text-white">All Blogs</a> 
            </h6>
          </div>


          <hr class="w-100 clearfix d-md-none" />


          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">All Category</h6>
              <p>
category
              </p>

          </div>
          

          <hr class="w-100 clearfix d-md-none" />

          
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">
              Useful links
            </h6>
           
            <p>
              <a href="#" class="text-white text-decoration-none">Pravicy policy</a>
            </p>
            <p>
              <a href="#" class="text-white text-decoration-none">Terms & Conditions</a>
            </p>
          </div>

          
          <hr class="w-100 clearfix d-md-none" />

          
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p><FontAwesomeIcon icon={faAddressCard} /> Bihar, Patna 800001, IN</p>
            <p><FontAwesomeIcon icon={faMailBulk} /> LearnWithBlogs@gmail.com</p>
            <p><FontAwesomeIcon icon={faPhone} /> + 01 234 567 88</p>
            <p><FontAwesomeIcon icon={faMobileScreen} /> + 01 234 567 89</p>

            <h6 class="text-uppercase mb-1 font-weight-bold mt-1">STATES</h6>
            
              
           
          </div>

          
          
        </div>
       
      </section>
     

    

     
      <section class="p-3 pt-0">
        <div class="row d-flex align-items-center">
      
          <div class="col-md-7 col-lg-7 text-center text-md-start d-flex justify-content-between ">
       
            <div class="p-3">
              © 2023 Copyright:
              <a class="text-white text-decoration-none" href="http://127.0.0.1:8000/"
                 >LearnWithBlogs.com</a
                >
            </div>
            
        
          </div>
        

        
          <div class="col-md-5 col-lg-5 ml-lg-0 text-center text-md-end">
       
            <a
               class="btn btn-outline-light btn-floating m-1"
               className="text-white"
               role="button"
               ><FontAwesomeIcon icon={faWhatsapp} /></a>

          
            <a
               class="btn btn-outline-light btn-floating m-1"
               className="text-white"
               role="button"
               ><FontAwesomeIcon icon={faTwitter} /></a>

          
            <a
               class="btn btn-outline-light btn-floating m-1"
               className="text-white"
               role="button"
               ><FontAwesomeIcon icon={faGoogle} /></a>

           
            <a
               class="btn btn-outline-light btn-floating m-1"
               className="text-white"
               role="button"
               ><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
         
        </div>
      </section>
     
    </div>
   
  </footer>
  
  )
}

export default Footer