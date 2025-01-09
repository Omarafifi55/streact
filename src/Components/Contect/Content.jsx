import { React } from 'react'
import Nav from '../nav/Nav'
import Footer from '../footer/footer'
import '../Contect/contact.css'

export default function Content() {

return(
    <>
        <Nav/>
        <div className='contact'>
        <div className="comtainer">
            <div className="FOR "></div>
        <h2>CONTACT SECTION</h2>
        <div className="inp w-25 m-auto ">
        <input type="text" placeholder='UserName' className='inp form-control m-4'  />
        <input type='number' placeholder='UserAge' className=' form-control  m-4' />
        <input type='email' placeholder='UserEmail' className=' form-control  m-4' />
        <input type='password'placeholder='Password' className=' form-control m-4' />
        </div>
        </div>
           

        </div>

        <Footer/>
    </>
)

}
