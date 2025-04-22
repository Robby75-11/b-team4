import React from "react";
import { Card, ListGroup, ButtonGroup, Row, Col } from "react-bootstrap";

const Competenze = () => {
  return (
    <Card style={{ width: "100%", padding: "20px" }}>
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h2>Competenze</h2>
        <ButtonGroup>
          <Row className="d-flex align-items-center gap-2">
            <Col>
              <i
                className="bi bi-plus-lg text-black"
                onClick={() => console.log("Plus icon clicked")}
                style={{ cursor: "pointer" }}
              ></i>
            </Col>
            <Col>
              <i
                className="bi bi-pencil text-black"
                onClick={() => console.log("Pencil icon clicked")}
                style={{ cursor: "pointer" }}
              ></i>
            </Col>
          </Row>
        </ButtonGroup>
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>HTML</ListGroup.Item>
        <ListGroup.Item>CSS</ListGroup.Item>
        <ListGroup.Item>JavaScript</ListGroup.Item>
        <ListGroup.Item>React</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default Competenze;
