import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Container,Row, Col } from "react-bootstrap";
function Loadericon() {
    return (
        <Container className="d-flex justify-content-center mt-5 p-5">
            <Row className="mt-5 p-5">
                <Col md={12} className="mt-5">
            <Loader
      type="Watch"
      color="#C84B31"
      height={100}
      width={100}
      timeout={3000} //3 secs
            />
            </Col>
            </Row>
            </Container>

        
    )
}

export default Loadericon
