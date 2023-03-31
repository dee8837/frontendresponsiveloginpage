import React from "react";
import axios from "axios";

const Registration = () => {
  let submit = async (e) => {
    e.preventDefault();
    var formRegister = document.getElementById("formRegister");
    var data = new FormData(formRegister);
    console.log(data);

    let response = axios("http://localhost:4000/", {
      method: "POST",
      data: data,
    }).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <body>
        <div className="container-fluid  ">
          <form id="formRegister" onSubmit={(e) => submit(e)}>
            <h4 className="text-center">Skyverse</h4>
            <div className="mb-3 ">
              <label for="exampleInputtext" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputname"
                aria-describedby="nameHelp"
                name="UserName"
              />

              <label for="exampleInputEmail1" className="form-label">
                Your email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="UserEmail"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Choose a password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="UserPass"
              />
              <div id="emailHelp" className="form-text mt-3">
                Forget password ?
              </div>
            </div>

            <button type="submit" className="btn btn-primary mt-5">
              Register Now
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

export default Registration;
