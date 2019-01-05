import React from "react";
import Jumbotron from '../Jumbotron';

function Create(props) {
  return (
      <div>
        <Jumbotron/>
        <div className="container">
            <h1>Create New Profile</h1>

            <form className="needs-validation" noValidate>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    <div className="invalid-feedback">
                        Please provide a valid Email address.
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required/>
                    <div className="invalid-feedback">
                        Please provide a valid password.
                    </div>
                </div>

                <a href="/" className="login btn btn-success mt-3" id="login">Login</a>
            </form>
        </div>
    </div>
    );  
}

export default Create;