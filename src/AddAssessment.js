import React, { Component } from "react";

class AddAssessment extends Component {
    render() {
        return (
            <div className="addAssessment">
                <h2>Add Assessment</h2>
                <form className="add-assessment">
                    <div className="d-flex flex-row justify-content-evenly align-items-start" id = "add-assessment">
                        <div className="form-group col-md-3">
                            <h4 id="req-symbol">* </h4>
                            <label htmlFor="inputEmail4"><b>HOA</b></label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected></option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>

                        </div>

                        <div className="form-group col-md-3">
                            <h4 id="req-symbol">* </h4>
                            <label htmlFor="inputPassword4"><b>Assessment Name</b></label>
                            <input type="label" className="form-control" id="inputPassword4" placeholder=""></input>
                        </div>
                    </div>

                    <div className="d-flex flex-row justify-content-evenly align-items-start" id = "add-assessment">
                        <div className="form-group col-md-3">
                            <h4 id="req-symbol">* </h4>
                            <label htmlFor="inputEmail4"><b>Start Date</b></label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder=""></input>
                        </div>

                        <div className="form-group col-md-3">
                            <h4 id="req-symbol">* </h4>
                            <label htmlFor="inputPassword4"><b>End Date</b></label>
                            <input type="label" className="form-control" id="inputPassword4" placeholder=""></input>
                        </div>
                    </div>

                    <div className="d-flex flex-row justify-content-evenly align-items-start" id = "add-assessment">
                        <div className="form-group col-md-3">
                            <h4 id="req-symbol">* </h4>
                            <label htmlFor="inputEmail4"><b>Judges</b></label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder=""></input>
                        </div>

                        <div className="form-group col-md-3">
                            <h4 id="req-symbol">* </h4>
                            <label htmlFor="inputPassword4"><b>Max Number of Assessment Responses</b></label>
                            <input type="label" className="form-control" id="inputPassword4" placeholder=""></input>
                        </div>
                    </div>

                    <div className="d-flex flex-row justify-content-evenly align-items-start" id = "add-assessment">
                        <div className="form-group col-md-3">
                            <h4 id="req-symbol">* </h4>
                            <label htmlFor="inputEmail4"><b>Quarterly Assessment Response Analysis</b></label>
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

export default AddAssessment;