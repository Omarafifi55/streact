import { React } from 'react'
import { Link } from 'react-router-dom';
import '../nav/nav.css'
function Nav() {

    return (
      
     <>
     <nav className="nav navbar navbar-expand-lg bg-body-tertiary ">
  <div className=' container-fluid w-50 '>
    <Link className="log navbar-brand pe-5 text-white" to="/">START FRAMEWOTRK</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse pe-5 flex-grow-0" id="navbarNav">
      <ul className="navbar-nav float-lg-start me-5 ">
        <li className="nav-item ">
          <Link className="a nav-link text-white active" to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="a nav-link text-white" to="/Portfolio">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="a nav-link text-white" to="/Content">contact
            
          </Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
     
      
     
     </>
      
    );
  }
  
  export default Nav
  