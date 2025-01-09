import { React } from 'react'
import Nav from '../nav/Nav'
import Sora from '../Home/img/pg.png'
import Footer  from '../footer/footer'
import '../Home/Home.css'
function Home() {

    return (
      
     <>
     <Nav/>
     <div className='home d-flex justify-content-center align-items-center text-white '>
      <div className='text-center w-25'> 
       <img className='w-50' src={Sora} alt="" />
        <h2 className=' h1 p-5'>start Framework</h2>

        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>

     </div>


      <Footer/>
     </>
      
    );
  }
  
  export default Home
  