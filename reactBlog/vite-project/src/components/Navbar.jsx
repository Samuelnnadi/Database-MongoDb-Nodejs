import React, {useEffect} from 'react';
import { FaUserShield} from "react-icons/fa";
// FaUserShield
const Navbar = ()=>{

// useEffect(()=>{

// (async()=>{

// var val = await fetch("https://angelblogngwo.herokuapp.com/login");
// var col = await val.json();
// console.log(col);

// })()


// },[])



  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container">
      <a className="navbar-brand fs-3 text-primary" href="#">AngelsMovieStore</a>

      <div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav ">
        <ul className="navbar-nav">
        <li className="nav-item ">
          <div className='d-flex inline-block'>
          <FaUserShield   size={"30px"} color="blue"/>
            <a className="nav-link" href="#">User Not Logedin</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Series</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Discount-movies</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="modal" data-bs-target="#staticBackdrop">login</a>
          </li>


          <li className="nav-item">
            <a className="nav-link " data-bs-toggle="modal" data-bs-target="#staticBackdropss">Register</a>
          </li>
        </ul>
      </div>
      </div>

    </div>
  </nav>





  )
}
export default Navbar;