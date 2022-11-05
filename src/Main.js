import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter,
    BrowserRouter,
    Routes
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import ListAssessmentResponse from "./ListAssessmentResponse";
import AddAssessmentResponse from "./AddAssessmentResponse";
import ListQuarterlyAssessment from "./ListQuarterlyAssessment";
import ListAssessment from "./ListAssessment";
import AddAssessment from "./AddAssessment";
import ListJudge from "./ListJudge";
import AddRanking from "./AddRanking";
import ListUser from "./ListUser";
import AddUser from "./AddUser";
import ListHoa from "./ListHoa";
import AddHoa from "./AddHoa";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <div className="sidenav">
                        <NavLink to="" className="sideNavTitle"><h1><i className="bi bi-house-fill"></i> Property Assessment</h1></NavLink>

                        <a><NavLink to="/">Assessment Response</NavLink></a>
                        <NavLink to="/listAssessmentResponse"><li>List Assessment Response</li></NavLink>
                        <NavLink to="/addAssessmentResponse"><li>Add Assessment Response</li></NavLink>
                        <NavLink to="/listQuarterlyAssessment"><li>List Quarterly Assessment</li></NavLink>

                        <a><NavLink to="/">Assessment Management</NavLink></a>
                        <NavLink to="/listAssessment"><li>List Assessment</li></NavLink>
                        <NavLink to="/addAssessment"><li>Add Assessment</li></NavLink>

                        <a><NavLink to="/">Rank Judge</NavLink></a>
                        <NavLink to="/listJudge"><li>List Judge</li></NavLink>
                        <NavLink to="/addRanking"><li>Add Ranking</li></NavLink>

                        <a><NavLink to="/">Administration</NavLink></a>
                        <NavLink to="/listUser"><li>List User</li></NavLink>
                        <NavLink to="/addUser"><li>Add User</li></NavLink>
                        <NavLink to="/listHoa"><li>List HOA</li></NavLink>
                        <NavLink to="/addHoa"><li>Add HOA</li></NavLink>

                    </div>

                    <nav className="navbar navbar-dark navbar-expand-md bg-dark justify-content-md-center justify-content-start" id="topNav">


                        <a className="nav-link" href="#_"><i className="fa fa-search mr-1"></i></a>
                        <div className="navbar-collapse collapse justify-content-between align-items-center w-100"
                             id="collapsingNavbar2">
                            <ul className="navbar-nav mx-auto text-md-center text-left">

                                <li className="nav-item my-auto">
                                    <a className="nav-link navbar-brand mx-0 d-none d-md-inline" id="navTitle" href="">Property Assessment Pro</a>
                                </li>

                            </ul>
                            <ul className="nav navbar-nav flex-row justify-content-md-center justify-content-start flex-nowrap">
                                <li className="nav-item">
                                    <a className="nav-link" href="">
                                        <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button"
                                                    id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                                    aria-expanded="false">
                                                Profile Settings
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li>Logged in as:</li>
                                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                                <li><a className="dropdown-item" href="#">Log Out</a></li>

                                            </ul>
                                        </div>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </nav>


                    <div className="main">
                        <Routes>
                            <Route path="/" element={<Home/>}></Route>
                            {/*<Route path="/stuff" element={Stuff}/>
                            <Route path="/contact" element={Contact}/>*/}
                            <Route path="/stuff" element={<Stuff/>} exact />
                            <Route path="/contact" element={<Contact/>} exact />

                            <Route path="/listAssessmentResponse" element={<ListAssessmentResponse/>} exact />
                            <Route path="/addAssessmentResponse" element={<AddAssessmentResponse/>} exact />
                            <Route path="/listQuarterlyAssessment" element={<ListQuarterlyAssessment/>} exact />
                            <Route path="/listAssessment" element={<ListAssessment/>} exact />
                            <Route path="/addAssessment" element={<AddAssessment/>} exact />
                            <Route path="/listJudge" element={<ListJudge/>} exact />
                            <Route path="/addRanking" element={<AddRanking/>} exact />
                            <Route path="/listUser" element={<ListUser/>} exact />
                            <Route path="/addUser" element={<AddUser/>} exact />
                            <Route path="/listHoa" element={<ListHoa/>} exact />
                            <Route path="/addHoa" element={<AddHoa/>} exact />

                        </Routes>
                    </div>

                    <nav className="navbar fixed-bottom navbar-light bg-light ">
                        <a className="navbar-brand">Copyright 2022 PAP</a>
                        <a className="navbar-brand">Privacy Statement</a>
                        <a className="navbar-brand">Contact Us</a>
                    </nav>

                </div>
            </HashRouter>
        );
    }
}

export default Main;