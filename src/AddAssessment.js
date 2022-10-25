import React, { Component } from "react";

class AddAssessment extends Component {
    render() {
        return (
            <div className="addAssessment">
                <h2>Add Assessment</h2>
                <form>
                    <div className="d-flex flex-row justify-content-evenly align-items-start">
                        <div className="form-group col-md-3">
                            <label htmlFor="inputEmail4">HOA</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="HOA Name"></input>
                        </div>

                        <div className="form-group col-md-3">
                            <label htmlFor="inputPassword4">Assessment</label>
                            <input type="label" className="form-control" id="inputPassword4" placeholder="Assessment Name"></input>
                        </div>
                    </div>


                </form>

            </div>
        );
    }
}

export default AddAssessment;