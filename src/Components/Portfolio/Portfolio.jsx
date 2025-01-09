import { React } from 'react'
import Nav from '../nav/Nav'
import Footer from '../footer/footer'
import '../Portfolio/Portfolio.css'

import So from '../Portfolio/img/poert1.png'
import So2 from '../Portfolio/img/port2.png'
import So3 from '../Portfolio/img/p1.png'
function Portfolio() {

return(
    <>
        <Nav/>
        <section >
            <div className="container">
                <h2>PORTFOLIO COMPONENT</h2>

                <div className="row g-4">
                    <div className="col-4">
                        <div className="im">
                            <img src={So} alt=""  className='w-100'/>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="im">
                            <img src={So2} alt=""  className='w-100'/>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="im">
                            <img src={So3} alt=""  className='w-100'/>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="im">
                            <img src={So} alt=""  className='w-100'/>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="im">
                            <img src={So2} alt=""  className='w-100'/>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="im">
                            <img src={So3} alt=""  className='w-100'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        

        <Footer/>

   
    </>
)

}
export default Portfolio