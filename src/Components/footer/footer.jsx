import { React } from 'react'
import'./footer.css'
function Footer() {

    return(
        <>
        <div className='footer p-5'>
            <div className=' container'>
            <div className=" row">
                <div className=" col-4">
                    <div className="loc">
                    <h2>LOCATION</h2>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                    </div>
                </div>
                <div className='col-4'>
                    <div className="around">
                        <h2>AROUND THE WEB</h2>
                        
                        
                    </div>
                </div>
                <div className="col-4">
                    <div className="abou">
                        <h2> ABOUT FREELANCER</h2>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>


            </div>
            </div>

        </div>
        <div className='un'> 
            <p className='text-center p-3'>Copyright © Your Website 2021</p>
        </div>
        </>
    )
    
    }
    export default  Footer
