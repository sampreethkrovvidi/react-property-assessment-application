import React, { Component } from "react";

class ListAssessmentResponse extends Component {
    render() {
        return (
            <div className="listAssessmentResponse">
                <h2>List Assessment Response</h2>

                <div className="list-assessment-response">
                    <div className="col-lg-12">
                        <p></p>
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">Judge</th>
                                <th scope="col">Assessment Name</th>
                                <th scope="col">Property Address</th>
                                <th scope="col">Start Date</th>
                                <th scope="col">End Date</th>
                                <th scope="col">Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>

                            </tbody>
                        </table>


                    </div>
                </div>

                <div id="add-assessment-btns">
                    <button type="submit" className="btn btn-primary btn-lg btn-block">Add</button>
                </div>

            </div>
        );
    }
}

export default ListAssessmentResponse;