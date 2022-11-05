import React, { Component } from "react";

class AddHoa extends Component {
    render() {
        return (
            <div className="addHoa">
                <h2>Add HOA</h2>
                <form className="add-hoa">
                    <h3 id="hoa-title-1">HOA General Information</h3>
                    <div className="d-flex flex-row justify-content-evenly align-items-start" id = "add-assessment">

                        <div className="form-group col-md-3">
                            <h4 id="req-symbol">* </h4>
                            <label htmlFor="inputEmail4"><b>HOA</b></label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder=""></input>
                        </div>

                        <div className="form-group col-md-3">
                            <h4 id="req-symbol">* </h4>
                            <label htmlFor="inputPassword4"><b>City State</b></label>
                            <input type="label" className="form-control" id="inputPassword4"
                                   placeholder=""></input>
                        </div>
                    </div>

                    <div className="d-flex flex-row justify-content-evenly align-items-start" id = "add-assessment">
                        <div className="form-group col-md-3">
                            <h4 id="req-symbol">* </h4>
                            <label htmlFor="inputEmail4"><b>State</b></label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder=""></input>
                        </div>

                        <div className="form-group col-md-3">
                            <h4 id="req-symbol">* </h4>
                            <label htmlFor="inputPassword4"><b>Zip Code</b></label>
                            <input type="label" className="form-control" id="inputPassword4" placeholder=""></input>
                        </div>
                    </div>

                    <h3 id="hoa-title-2">HOA Contact Information</h3>

                    <div className="d-flex flex-row justify-content-evenly align-items-start" id = "add-assessment">
                        <div className="form-group col-md-3">
                            <h4 id="req-symbol">* </h4>
                            <label htmlFor="inputEmail4"><b>First Name</b></label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder=""></input>
                        </div>

                        <div className="form-group col-md-3">
                            <label htmlFor="inputPassword4"><b>Middle Name</b></label>
                            <input type="label" className="form-control" id="inputPassword4" placeholder=""></input>
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
                            <label htmlFor="inputPassword4"><b>Mobile Phone</b></label>
                            <input type="label" className="form-control" id="inputPassword4" placeholder=""></input>
                        </div>
                    </div>

                    <div className="d-flex flex-row justify-content-evenly align-items-start" id = "add-assessment">
                        <div className="form-group col-md-3">
                            <label htmlFor="inputEmail4"><b>Work Phone</b></label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder=""></input>
                        </div>

                        <div className="form-group col-md-3">
                            <label htmlFor="inputPassword4"><b>Home Phone</b></label>
                            <input type="label" className="form-control" id="inputPassword4" placeholder=""></input>
                        </div>
                    </div>

                    <div className="d-flex flex-row justify-content-evenly align-items-start" id = "add-assessment">
                        <div className="form-group col-md-3">
                            <h4 id="req-symbol">* </h4>
                            <label htmlFor="inputEmail4"><b>Email Address</b></label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder=""></input>
                        </div>

                        <div className="form-group col-md-3">

                        </div>
                    </div>

                    <div id="add-assessment-btns">
                        <button type="submit" className="btn btn-primary btn-lg btn-block">Save</button>
                        &nbsp;
                        &nbsp;
                        &nbsp;

                        <button type="submit" className="btn btn-primary btn-lg btn-block">Close</button>
                    </div>


                    <h5 id="req-message"><h4 id="req-symbol">* </h4>Indicates Required</h5>
                </form>
            </div>
        );
    }
}

export default AddHoa;