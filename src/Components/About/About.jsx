import { React } from 'react'
import Nav from '../nav/Nav'
import Footer from '../footer/footer'
import '../About/About.css'


function About() {

return(
    <>
     <Nav/>
        <div className='about d-flex  justify-content-center align-items-center'>
            <div className="text text-white">  
            <h2 className=' h1 text-center p-5'>ABOUT COMPONENT</h2>
            <div className=" container row  m-auto">
                <div className="col-6">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, a
                nd JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className="col-6">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, a
                nd JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                </div>
                </div>
        </div>

     <Footer/>

   
    </>
)

}
export default About