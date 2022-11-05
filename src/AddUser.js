import React, { Component } from "react";

class AddUser extends Component {
    render() {
        return (
            <div className="addUser">
                <h2>Add User</h2>
                <form className ="addUser">
                    <div className="d-flex flex-row justify-content-evenly align-items-start" id = "add-assessment">

                        <div className="form-group col-md-3">
                            <h4 id="req-symbol">* </h4>
                            <label htmlFor="inputEmail4"><b>First Name</b></label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder=""></input>
                        </div>

                        <div className="form-group col-md-3">
                            <label htmlFor="inputPassword4"><b>Middle Name</b></label>
                            <input type="label" className="form-control" id="inputPassword4"
                                   placeholder=""></input>
                        </div>
                    </div>

                    <div className="d-flex flex-row justify-content-evenly align-items-start" id = "add-assessment">
                        <div className="form-group col-md-3">
                            <h4 id="req-symbol">* </h4>
                            <label htmlFor="inputEmail4"><b>Last Name</b></label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder=""></input>
                        </div>

                        <div className="form-group col-md-3">
                            <h4 id="req-symbol">* </h4>
                            <label htmlFor="inputPassword4"><b>Role</b></label>
                            <input type="label" className="form-control" id="inputPassword4" placeholder=""></input>
                        </div>
                    </div>

                    <div className="d-flex flex-row justify-content-evenly align-items-start" id = "add-assessment">
                        <div className="form-group col-md-3">
                            <h4 id="req-symbol">* </h4>
                            <label htmlFor="inputEmail4"><b>Mobile Phone</b></label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder=""></input>
                        </div>

                        <div className="form-group col-md-3">
                            <label htmlFor="inputPassword4"><b>Work Phone</b></label>
                            <input type="label" className="form-control" id="inputPassword4" placeholder=""></input>
                        </div>
                    </div>

                    <div className="d-flex flex-row justify-content-evenly align-items-start" id = "add-assessment">
                        <div className="form-group col-md-3">
                            <label htmlFor="inputEmail4"><b>Home Phone</b></label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder=""></input>
                        </div>

                        <div className="form-group col-md-3">
                            <h4 id="req-symbol">* </h4>
                            <label htmlFor="inputPassword4"><b>Email Address</b></label>
                            <input type="label" className="form-control" id="inputPassword4" placeholder=""></input>
                        </div>
                    </div>
                </form>

                <div id="add-assessment-btns">
                    <button type="submit" className="btn btn-primary btn-lg btn-block">Save</button>
                    &nbsp;
                    &nbsp;
                    &nbsp;

                    <button type="submit" className="btn btn-primary btn-lg btn-block">Close</button>
                </div>


                <h5 id="req-message"><h4 id="req-symbol">* </h4>Indicates Required</h5>

            </div>




        );
    }
}

export default AddUser;