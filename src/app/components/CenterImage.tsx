"use client";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CenterImage = () => (
  <Row id="centerText" className="align-items-center justify-content-center">
    <Col xs={4} className="text-center" id="centerTextBox">
      <h1>Brewery-to-Table Dining</h1>
      <h2>in the heart of Kailua</h2>
    </Col>
  </Row>
);

export default CenterImage;