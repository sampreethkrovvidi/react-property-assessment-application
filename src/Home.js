import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home</h2>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="google-map">
                            <div id="map"></div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;