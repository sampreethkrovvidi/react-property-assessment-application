import React, { Component } from "react";

class ListAssessment extends Component {
    render() {
        return (
            <div className="listAssessment">
                <h2>List Assessment</h2>
                <div className="row">
                    <div className="col-lg-12">
                        <p></p>
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">Assessment Name</th>
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

                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td></td>
                                <td></td>
                                <td></td>

                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td></td>
                                <td></td>
                                <td></td>

                            </tr>

                            </tbody>
                        </table>


                    </div>
                </div>




            </div>
        );
    }
}

export default ListAssessment;