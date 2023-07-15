import  React , { useState } from 'react';
import Navbar from './components/Navbar';
import MovieTitle from './components/MovieTitle';
import CardHolder from './components/CardHolder';
import Footer from './components/Footer';

function App() {
const [email , setEmail] = useState();
const [pass , setPass] = useState();
const [cpass , setCpass] = useState()

const [lemail , lsetEmail] = useState();
const [lpass , lsetPass] = useState();





//   fetch("https://jsonplaceholder.typicode.com/posts", {
     
//     // Adding method type
//     method: "POST",
     
//     // Adding body or contents to send
//     body: JSON.stringify({
//         title: "foo",
//         body: "bar",
//         userId: 1
//     }),
     
//     // Adding headers to the request
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     }
// })




const login = async ()=>{
var col = await fetch("https://angelblogngwo.herokuapp.com/login", {
  method: "POST",
  body: JSON.stringify({
      username: lemail,
      password: lpass,
  }),
  headers: {
      "Content-type": "application/json; charset=UTF-8"
  }
})
console.log(col)
lsetEmail("");
lsetPass("");
}












  const register = ()=>{
    if(pass === cpass){


  fetch("https://angelblogngwo.herokuapp.com/register", {
    method: "POST",
    body: JSON.stringify({
        username: email,
        password: pass,
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
});

setEmail("");
setCpass("");
setPass("");

    }else{

     alert("Password is not not correct");


    }

  }

  return (
    <div>
        <Navbar />
        <MovieTitle/>
        <CardHolder/>
        <Footer/>


    <div id="staticBackdrop" className="modal" tabIndex="-1">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Login</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
       <form>
        <div className='form-group'>
           <label for="" className='form-label'  > Enter Email</label>
           <input value={lemail} onChange={(e)=>lsetEmail(e.target.value)} className='form-control' type={"email"}/>
        </div>
        <div className='form-group my-3'>
           <label for="" className='form-label'  > Enter Password</label>
           <input value={lpass} onChange={(e)=>lsetPass(e.target.value)} className='form-control' type={"password"}/>
        </div>
       </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" onClick={()=>login()}>Login</button>
      </div>
    </div>
  </div>
</div>




<div id="staticBackdropss" className="modal" tabIndex="-1">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Register With Us</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
       <form  action="https://angelblogngwo.herokuapp.com/register">
        <div className='form-group'>
           <label for="" className='form-label'  > Enter Email</label>
           <input value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control' type={"email"}/>
        </div>
        <div className='form-group my-3'>
           <label for="" className='form-label'  > Enter Password</label>
           <input value={pass} onChange={(e)=>setPass(e.target.value)}  className='form-control' type={"password"}/>
        </div>
        <div className='form-group my-3'>
           <label for="" className='form-label'  >Confirm Password</label>
           <input value={cpass} onChange={(e)=>setCpass(e.target.value)}  className='form-control' type={"password"}/>
        </div>
       </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" onClick={()=>register()}>Register</button>
      </div>
    </div>
  </div>
</div>






      
    </div>
  )
}

export default App
