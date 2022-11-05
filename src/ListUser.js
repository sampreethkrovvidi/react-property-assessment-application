import React, { Component } from "react";

class ListUser extends Component {
    render() {
        return (
            <div className="listUser">
                <h2>List User</h2>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Assessment Name</th>
                        <th scope="col">Start Date</th>
                        <th scope="col">End Date</th>
                        <th scope="col">Status</th>
                        <th scope="col">Yard Maintenance Score</th>
                        <th scope="col">Design and Landscaping Score</th>


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



        );
    }
}

export default ListUser;