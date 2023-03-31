import React from "react";
import axios from "axios";
// import { useState } from "react";






const Loginpages = () => {
  

// const [email,setEmail]=useState(null)
// const [loginpass,setLoginpass]= useState(null)
  let submit = async (e) => {
    e.preventDefault();
    var formRegister = document.getElementById("formRegister");
    var data = new FormData(formRegister);

    let response = axios("http://localhost:4000/login", {
      method: "POST",
      data: data,
    }).then((res) => {
      alert(res.data);
    });
  };


  // let onSubmit=(e)=>{
  //   e.preventDefault();
  //   console.log("email & loginpass::", email,loginpass)
  //   if(email !== loginpass){
  //   alert
  //     ("enter correct ")
  //   }else{
     
  //   }

    
    


  // }

  return (
    <>
      <body>
        <div className="container-fluid  ">
          <form id="formRegister"onSubmit={(e) => submit(e)}>
            {/* <form method="post"action="/"> */}
            <h4 className="text-center">Skyverse</h4>
            <div className="mb-3 ">
              <label for="exampleInputEmail1" className="form-label">
                Your email address
              </label>
              <input
              // onChange={(e)=> setEmail(e.target.value)}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Choose a password
              </label>
              <input
                // onChange={(e)=> setLoginpass(e.target.value)}
                type="current-password"
                className="form-control"
                id="exampleInputPassword1"
                name="loginpass"
              />
              <div id="emailHelp" className="form-text mt-3">
                Forget password ?
              </div>
            </div>

            <button  type="submit" className="btn btn-primary mt-5">
              Login
            </button>
            <div>
              <button className="btn-btn btn-primary mt-5">
                <img src="./google.png"></img> <a href="#"></a>Sign up with
                Google
              </button>
            </div>
          </form>
        </div>
      </body>
    </>
  );
};

export default Loginpages;
