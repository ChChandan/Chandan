import React, { Component, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import myphoto from './IMG/chandan.jpg';
import SRMAP from './IMG/SRMAP.png'
import DPS from './IMG/dps.png'
import Loadericon from "./components/Loadericon";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
function App() {
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 2500);
  });
  return (
    <div>
      {isLoading == true ? (
        <Loadericon />
      ) : (
        <React.Fragment>
          <Navbar
            expand="lg"
            className="rounded-bottom "
            style={{ backgroundColor: "#346751" }}
          >
            <Container fluid>
              <Navbar.Brand
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                className="px-3"
                style={{
                  color: "#ECDBBA",
                  fontSize: "2rem",
                  fontFamily: " Caveat, cursive",
                }}
              >
                Chandan Cherukuri
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav
                  className="me-auto"
                  style={{ fontSize: "1.5rem", fontWeight: "500" }}
                >
                  <Nav.Link
                    className="mx-5"
                    href="#About"
                    style={{ color: "#EDEDED" }}
                  >
                    About
                  </Nav.Link>
                  <Nav.Link
                    className="mx-5"
                    href="#Education"
                    style={{ color: "#EDEDED" }}
                  >
                    Education
                  </Nav.Link>
                  <Nav.Link
                    className="mx-5"
                    href="#Skills"
                    style={{ color: "#EDEDED" }}
                  >
                    Skills
                  </Nav.Link>
                  <Nav.Link
                    className="mx-5"
                    href="#Projects"
                    style={{ color: "#EDEDED" }}
                  >
                    Projects
                  </Nav.Link>
                  <Nav.Link
                    className="mx-5"
                    href="#Social"
                    style={{ color: "#EDEDED" }}
                  >
                    Social{" "}
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Container className="mt-5 rounded p-2 bgred text-light">
            <Row>
              <Col md={5}>
                <img
                    src={myphoto}
                  class="img-thumbnail rounded"
                  alt="..."
                />
              </Col>
              <Col md={6} className="mt-5 ml-5 text-center">
                <h1
                  style={{ fontSize: "3.3rem", fontWeight: "700" }}
                  class="animate__animated animate__zoomIn"
                >
                  Welcome, Everyone
                </h1>
                <h1
                  style={{ fontSize: "3.2rem", fontWeight: "700" }}
                  class="animate__animated animate__zoomIn"
                >
                  This is Chandan
                </h1>
                <ul
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: "500",
                    listStyleType: "none",
                  }}
                  class="mt-4"
                >
                  <li class="p-2 animate__animated animate__fadeInUp">
                    Web Developer & Designer{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      class="bi bi-laptop"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                    </svg>
                  </li>
                  <li class="p-2 animate__animated animate__fadeInUp">
                    Python Programmer{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      class="bi bi-code-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                      <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z" />
                    </svg>
                  </li>
                  <li class="p-2 animate__animated animate__fadeInUp">
                    UI/UX Designer
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      class="bi bi-view-list"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2zm0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14z" />
                    </svg>
                  </li>
                  <li class="p-2 animate__animated animate__fadeInUp">
                    <a href="Chandan Cherukuri resume .pdf" target="_blank">
                      <button class="btn btn-outline-light">
                        {" "}
                        Download Resume
                      </button>{" "}
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
          <br />
          <br />
          <Container fluid className="mt-5 p-3 textred" id="About">
            <Row>
              <Col md={6} className="bg-light textred">
                <h1
                  class="text-center"
                  style={{ fontSize: "5rem", fontWeight: "700" }}
                  data-aos="flip-left"
                >
                  <br /> About Me
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="70"
                    height="70"
                    fill="currentColor"
                    class="bi bi-person-circle"
                    viewBox="0 1 18 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                </h1>
              </Col>
              <Col md={6} className="text-light bgred">
                <ul
                  style={{ fontSize: "1.5rem", fontWeight: "600" }}
                  className="mt-2 ml-5"
                >
                  <li
                    className="p-2"
                    data-aos="fade-right"
                    data-aos-duration="800"
                  >
                    Computer Science Student
                  </li>
                  <li
                    className="p-2"
                    data-aos="fade-right"
                    data-aos-duration="800"
                  >
                    ADD Club Team lead
                  </li>
                  <li
                    className="p-2"
                    data-aos="fade-right"
                    data-aos-duration="800"
                  >
                    Coding Club Team lead
                  </li>
                  <li
                    className="p-2"
                    data-aos="fade-right"
                    data-aos-duration="800"
                  >
                    CR-CS Team Core web developer
                  </li>
                  <li
                    className="p-2"
                    data-aos="fade-right"
                    data-aos-duration="800"
                  >
                    Student Council Core Member
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>

          <Container fluid className="mt-5 p-3 mb-4" id="Education">
            <Row>
              <Col md={6} className="bgred text-light">
                <h1
                  className=" mt-4 sticky-top mb-5 text-light "
                  style={{ fontSize: "4.3rem", fontWeight: "700" }}
                >
                  <br />
                  <br />
                  <br />
                  Education{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    fill="currentColor"
                    class="bi bi-book"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                  </svg>
                </h1>
              </Col>
              <Col md={6} className="text-light bg-light p-5">
                <Col
                  md={12}
                  className="shadow-lg bggreen text-center rounded p-5"
                  data-aos="flip-up"
                  data-aos-duration="800"
                >
                  <img src={SRMAP} className="img-fluid p-4" alt="" />
                  <span style={{ fontSize: " 2rem", fontWeight: "600" }}>
                    SRM University AP
                  </span>{" "}
                  <br />
                  <span style={{ fontSize: "1.5rem", fontWeight: "600" }}>
                    2019-2023
                  </span>{" "}
                  <br />
                  <br />
                  <span style={{ fontSize: "1.2rem", fontWeight: "500" }}>
                    Computer Science Engineering specialisation Cybersecurity
                    (Major)
                    <br />
                    Bachelor's of Business administration (Minor)
                  </span>{" "}
                  <br />
                  <br />
                  <ul className="text-left">
                    <li>Class Representative</li>
                    <li>Tech-Fest event organiser</li>
                    <li>Active member in various clubs</li>
                  </ul>
                  <span style={{ fontSize: "1.5rem", fontWeight: "600" }}>
                    9.01 CGPA
                  </span>
                </Col>
                <Col
                  md={12}
                  className="shadow-lg bggreen text-center rounded p-5 mt-5"
                  data-aos="flip-up"
                  data-aos-duration="800"
                >
                  <img src={DPS} className="img-fluid p-3" alt=""  style={{height:"200px",width:"170px"}}/><br/>
                  <span style={{ fontSize: "2rem", fontWeight: "600" }}>
                    Delhi Public School
                  </span>{" "}
                  <br />
                  <span style={{ fontSize: "1.5rem", fontWeight: "600" }}>
                    2017-2019
                  </span>{" "}
                  <br />
                  <br />
                  <span style={{ fontSize: "1.2rem", fontWeight: "500" }}>
                    Maths Physics Chemistry Group (MPC)
                  </span>{" "}
                  <br />
                  <br />
                  <ul className="text-left">
                    <li>House Prefect</li>
                    <li>Active Speaker</li>
                    <li>Mutiple Competations Winner</li>
                  </ul>
                  <span style={{ fontSize: "1.5rem", fontWeight: "600" }}>
                    82%
                  </span>
                </Col>
              </Col>
            </Row>
          </Container>
          <br />
          <br />
          <br />
          <Container fluid className="mt-5 p-3 mb-4">
            <Row>
              <Col md={6} className="text-light bg-light p-5">
                <Col
                  md={12}
                  className="shadow-lg bggreen text-center rounded p-5"
                  data-aos="flip-up"
                  data-aos-duration="800"
                >
                  <span style={{ fontSize: "3.1rem", fontWeight: "600" }}>
                    Technical{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      fill="currentColor"
                      class="bi bi-file-earmark-code-fill"
                      viewBox="0 2 20 16"
                    >
                      <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM6.646 7.646a.5.5 0 1 1 .708.708L5.707 10l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zm2.708 0 2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 10 8.646 8.354a.5.5 0 1 1 .708-.708z" />
                    </svg>
                  </span>
                  <ul
                    style={{
                      fontSize: "2.5rem",
                      listStyleType: "none",
                      fontWeight: "300",
                    }}
                  >
                    <li className="pt-3">
                      {" "}
                      Python
                      <span
                        className="iconify"
                        data-icon="vscode-icons:file-type-python"
                        data-width="48"
                        data-height="48"
                      ></span>
                    </li>
                    <li className="pt-3">
                      React js
                      <span
                        className="iconify"
                        data-icon="logos:react"
                        data-width="60"
                        data-height="60"
                      ></span>
                    </li>
                    <li className="pt-3">
                      {" "}
                      HTML
                      <span
                        className="iconify"
                        data-icon="vscode-icons:file-type-html"
                        data-width="48"
                        data-height="48"
                      ></span>
                    </li>
                    <li className="pt-3">
                      {" "}
                      CSS
                      <span
                        className="iconify"
                        data-icon="vscode-icons:file-type-css"
                        data-width="48"
                        data-height="48"
                      ></span>
                    </li>
                    <li className="pt-3">
                      Javascript
                      <span
                        className="iconify"
                        data-icon="logos:javascript"
                        data-width="48"
                        data-height="48"
                      ></span>
                    </li>
                    <li className="pt-3">
                      {" "}
                      Bootstrap
                      <span
                        className="iconify"
                        data-icon="logos:bootstrap"
                        data-width="48"
                        data-height="48"
                      ></span>
                    </li>
                    <li className="pt-3">
                      {" "}
                      C++
                      <span
                        className="iconify"
                        data-icon="bx:bxl-c-plus-plus"
                        data-width="48"
                        data-height="48"
                      ></span>
                    </li>
                  </ul>
                </Col>
                <Col
                  md={12}
                  className="shadow-lg bggreen text-center rounded p-5 mt-5"
                  data-aos="flip-up"
                  data-aos-duration="800"
                >
                  <span style={{ fontSize: "3.1rem", fontWeight: "600" }}>
                    Non-Technical{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      fill="currentColor"
                      className="bi bi-people-fill"
                      viewBox="0 2 16 16"
                    >
                      <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      <path
                        fill-rule="evenodd"
                        d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                      />
                      <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                    </svg>
                  </span>
                  <ul
                    style={{
                      fontSize: "2.5rem",
                      listStyleType: "none",
                      fontWeight: "300",
                    }}
                  >
                    <li className="pt-3"> Confident Speaker</li>
                    <li className="pt-3"> Quick Learner</li>
                    <li className="pt-3"> Team Leader</li>
                    <li className="pt-3">Extrovert</li>
                  </ul>
                </Col>
              </Col>
              <Col md={6} className="bgred text-light" id="Skills">
                <h1
                  className=" mt-4 sticky-top mb-5 text-light "
                  style={{ fontSize: "5rem", fontWeight: "700" }}
                >
                  <br />
                  <br />
                  <br />
                  Skills{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    fill="currentColor"
                    class="bi bi-tools"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z" />
                  </svg>
                </h1>
              </Col>
            </Row>
          </Container>
          <Container fluid className="mt-5 p-3 mb-4" id="Projects">
            <Row>
              <Col md={6} className="bgred text-light">
                <h1
                  className=" mt-4 sticky-top mb-5 text-light "
                  style={{ fontSize: "4.3rem", fontWeight: "700" }}
                >
                  <br />
                  <br />
                  <br />
                  Projects{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    fill="currentColor"
                    class="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </h1>
              </Col>
              <Col md={6} className="text-light bg-light p-3">
                <Col
                  md={12}
                  className="shadow-lg bggreen text-center rounded p-3"
                  data-aos="flip-up"
                  data-aos-duration="800"
                >
                  <span style={{ fontSize: "2.5rem", fontWeight: "600" }}>
                    Placement Portal for SRMAP University
                  </span>{" "}
                  <br />
                  <ul className="text-left" style={{ fontSize: "1.2rem" }}>
                    <li>Connecting bridge between placements and students</li>
                    <li>
                      Multi user design (Parent , Student , Faculty , Mentors ,
                      Management)
                    </li>
                    <li>
                      Over <strong>500+</strong> users
                    </li>
                    <li>Fully dynamic with real time updation</li>
                  </ul>
                  <span style={{ fontSize: "1.5rem", fontWeight: "600" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-link-45deg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                      <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                    </svg>
                    <a href="https://pmss.srmap.edu.in/" target="_blank">
                      pmss.srmap.edu.in/
                    </a>
                  </span>
                </Col>
                <Col
                  md={12}
                  className="shadow-lg bggreen text-center rounded p-5 mt-5"
                  data-aos="flip-up"
                  data-aos-duration="800"
                >
                  <span style={{fontSize:"2.5rem",fontWeight:"600"}}>Coding club website</span> <br/>
                    <ul class="text-left" style={{fontSize:"1.2rem"}}>
                        <li>
                            Official website for coding club at SRMAP University
                        </li>
                        <li>
                            Worked as a Team lead with 15 members
                        </li>
                    </ul>
                    <span style={{ fontSize: "1.5rem", fontWeight: "600" }}><svg xmlns="http://www.w3.org/2000/svg" width="30"
                            height="30" fill="currentColor" className="bi bi-link-45deg" viewBox="0 0 16 16">
                            <path
                                d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                            <path
                                d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                        </svg>
                        <a href="https://srm-ap.github.io/CodingClub/"
                            target="_blank">srm-ap.github.io/CodingClub/</a>
                    </span>
                  </Col>
                  <Col md={12}
                  className="shadow-lg bggreen text-center rounded p-5 mt-5"
                  data-aos="flip-up"
                  data-aos-duration="800">
                    <span style={{ fontSize: "2.5rem", fontWeight: "600" }}>Various Cryptographic Algorithms</span> <br/ >
                      <ul className="text-left" style={{ fontSize: "1.2rem" }}>
                        <li>
                            Implementation various cryptographic algorithms using python
                        </li>

                    </ul>
                      <span style={{ fontSize: "1.2rem", fontWeight: "600" }}><svg xmlns="http://www.w3.org/2000/svg" width="30"
                            height="30" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                            <path
                                d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                            <path
                                d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                        </svg>
                        <a href="https://github.com/ChChandan/Cryptography"
                            target="_blank">github.com/ChChandan/Cryptography</a>
                    </span>
                  </Col>
                  <div className="text-center mt-5 mb-5"> <a href="https://github.com/ChChandan" target="_blank"><button
                            className="btn   btn-lg btn-outline-primary" data-aos="fade-up " data-aos-duration="800">Read more </button></a></div>


              </Col>
            </Row>
          </Container>
          <br />
            <Container fluid className="mt-3 bg-light  text-center " id="Social">
              <Row>
                <Col md={12} className="textred">
                  <p style={{ fontSize: "3rem", fontFamily: " Caveat, cursive" }} data-aos="zoom-in-up" data-aos-duration="800" data-aos-delay="300">Chandan Cherukuri</p>
                <a   href="https://www.instagram.com/ch__chandan/?utm_medium=copy_link" className="px-3 textred "
                    target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                        className="bi bi-instagram" viewBox="0 0 16 16">
                        <path
                            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg></a>
                  <a href="https://www.linkedin.com/in/chandan-ch-5952a21b8/" className="px-3 " style={{ color: "#0e76a8" }}
                    target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                        className="bi bi-linkedin" viewBox="0 0 16 16">
                        <path
                            d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg></a>
                <a   href="https://github.com/ChChandan" className="text-dark px-3" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                        className="bi bi-github" viewBox="0 0 16 16">
                        <path
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg></a>
                <a   href="mailto:chandan_cherukuri@srmap.edu.in" className="textred px-3" target="_blank"><svg
                        xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                        className="bi bi-mailbox" viewBox="0 0 16 16">
                        <path
                            d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z" />
                        <path
                            d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z" />
                    </svg></a>

                </Col>
              </Row>
              <Row>
                <Col md={12} className="mt-3 mb-3"><strong>©2022 Copyright All Rights Reserved</strong> </Col>
              </Row>
          </Container>
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
