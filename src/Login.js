import React, { Component } from "react";

class Login extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <h2 className="text-center text-dark mt-5">Login</h2>
                            <div className="text-center mb-5 text-dark">Property Assessment Application</div>
                            <div className="card my-5">

                                <form className="card-body cardbody-color p-lg-5">

                                    <div className="mb-3">
                                        <input type="text" className="form-control" id="Username"
                                               aria-describedby="emailHelp"
                                                   placeholder="User Name"></input>
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" className="form-control" id="password"
                                                   placeholder="Password"></input>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-color px-5 mb-5 w-100"
                                            onClick={changeColor()}>Login
                                        </button>
                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>
                </div>

                <nav className="login-navbar fixed-bottom navbar-light bg-light">
                    <a className="navbar-brand">Copyright © 2022 PAP All Rights Reserved</a>
                </nav>

            </div>

        );
    }
}

function changeColor(){
    return console.log("When")
}

export default Login;