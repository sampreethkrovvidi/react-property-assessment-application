import React, { Component } from "react";

class AddAssessmentResponse extends Component {
    render() {
        return (
            <div className ="addAssessmentResponse">
                <h2>Add Assessment Response</h2>
                <form className="add-assessment-response">
                    <h5 id="req-message"><h4 id="req-symbol">* </h4>Indicates Required</h5>
                    <h3 id="hoa-title-1">Overview</h3>
                    <div className="d-flex flex-row justify-content-evenly align-items-start" id = "add-assessment">

                        <div className="form-group col-md-3">
                            <h4 id="req-symbol">* </h4>
                            <label htmlFor="inputEmail4"><b>Assessment Name</b></label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder=""></input>
                        </div>

                        <div className="form-group col-md-3">
                            <h4 id="req-symbol">* </h4>
                            <label htmlFor="inputPassword4"><b>Property Address</b></label>
                            <input type="label" className="form-control" id="inputPassword4"
                                   placeholder=""></input>
                        </div>
                    </div>

                    <div className="d-flex flex-row justify-content-evenly align-items-start" id = "add-assessment">
                        <div className="form-group col-md-3">
                            <label htmlFor="inputEmail4"><b>Judge</b></label>
                            <input className="form-control" type="text" placeholder=""
                                   aria-label="Disabled input example" disabled></input>
                        </div>

                        <div className="form-group col-md-3">
                            <label htmlFor="inputPassword4"><b>Start Date</b></label>
                            <input className="form-control" type="text" placeholder=""
                                   aria-label="Disabled input example" disabled></input>
                        </div>
                    </div>

                    <div className="d-flex flex-row justify-content-evenly align-items-start" id = "add-assessment">
                        <div className="form-group col-md-3">
                            <label htmlFor="inputEmail4"><b>End Date</b></label>
                            <input className="form-control" type="text" placeholder=""
                                   aria-label="Disabled input example" disabled></input>
                        </div>

                        <div className="form-group col-md-3">

                        </div>
                    </div>

                    <h3 id="hoa-title-2">Yard Maintenance</h3>

                    <div className="d-flex flex-row justify-content-evenly align-items-start" id = "add-assessment">
                        <div className="form-group col-md-3">
                            <h4 id="req-symbol">* </h4>
                            <label htmlFor="inputEmail4"><b>Healthy Lawn, Neatly Mowed and Edged</b></label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected></option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>

                        </div>

                        <div className="form-group col-md-3">
                            <h4 id="req-symbol">* </h4>
                            <label htmlFor="inputEmail4"><b>Pruned and Trimmed Shrubs and Trees</b></label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected></option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>

                        </div>
                    </div>

                    <div className="d-flex flex-row justify-content-evenly align-items-start" id = "add-assessment">
                        <div className="form-group col-md-3">
                            <h4 id="req-symbol">* </h4>
                            <label htmlFor="inputEmail4"><b>Healthy Living Plants</b></label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected></option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>

                        </div>

                        <div className="form-group col-md-3">
                            <h4 id="req-symbol">* </h4>
                            <label htmlFor="inputEmail4"><b>Minimum Weeds in Flowerbeds</b></label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected></option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>

                        </div>
                    </div>

                    <div className="d-flex flex-row justify-content-evenly align-items-start" id = "add-assessment">
                        <div className="form-group col-md-3">
                            <h4 id="req-symbol">* </h4>
                            <label htmlFor="inputEmail4"><b>Yard Free of Debris and Clutter</b></label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected></option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>

                        </div>

                        <div className="form-group col-md-3">
                            <h4 id="req-symbol">* </h4>
                            <label htmlFor="inputEmail4"><b>Driveway Free of Oil and Other Stains</b></label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected></option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>

                        </div>
                    </div>

                    <div className="d-flex flex-row justify-content-evenly align-items-start" id = "add-assessment">
                        <div className="form-group col-md-3">
                            <h4 id="req-symbol">* </h4>
                            <label htmlFor="inputEmail4"><b>Fences and Porches in Good Repair</b></label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected></option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>

                        </div>

                        <div className="form-group col-md-3">
                            <h4 id="req-symbol">* </h4>
                            <label htmlFor="inputEmail4"><b>House Numbers Displayed Attractively</b></label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected></option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>

                        </div>
                    </div>

                    <h3 id="hoa-title-2">Design and Landscaping</h3>

                    <div className="d-flex flex-row justify-content-evenly align-items-start" id = "add-assessment">
                        <div className="form-group col-md-3">
                            <h4 id="req-symbol">* </h4>
                            <label htmlFor="inputEmail4"><b>Use of Color</b></label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected></option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>

                        </div>

                        <div className="form-group col-md-3">
                            <h4 id="req-symbol">* </h4>
                            <label htmlFor="inputEmail4"><b>Creative, Unique Curb Appeal</b></label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected></option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>

                        </div>
                    </div>

                    <div className="d-flex flex-row justify-content-evenly align-items-start" id = "add-assessment">
                        <div className="form-group col-md-3">
                            <h4 id="req-symbol">* </h4>
                            <label htmlFor="inputEmail4"><b>Balance Appropriate to House and Lot Size</b></label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected></option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>

                        </div>

                        <div className="form-group col-md-3">
                            <h4 id="req-symbol">* </h4>
                            <label htmlFor="inputEmail4"><b>Overall Aesthetic Appeal</b></label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected></option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>

                        </div>
                    </div>

                    <div className="d-flex flex-row justify-content-evenly align-items-start" id = "add-assessment">
                        <div className="form-group col-md-3">
                            <h4 id="req-symbol">* </h4>
                            <label htmlFor="inputEmail4"><b>Pleasing Appearance Making the Property an Asset to the Community</b></label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected></option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>

                        </div>

                        <div className="form-group col-md-3">

                        </div>
                    </div>

                    <div id="add-assessment-response-btns">
                        <button type="submit" className="btn btn-primary btn-lg btn-block">Save</button>
                        &nbsp;
                        &nbsp;
                        &nbsp;

                        <button type="submit" className="btn btn-primary btn-lg btn-block">Close</button>
                    </div>







                </form>
            </div>
        );
    }
}

export default AddAssessmentResponse;