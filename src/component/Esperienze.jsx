import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Row, Col, Container } from "react-bootstrap";

const Esperienze = () => {
  const profile = useSelector((state) => state.profile.profile); // Accedi direttamente al profilo

  return (
    <Container
      fluid
      style={{ backgroundColor: "#FFFFFF", borderColor: "#D2D2D2" }}
    >
      <Row>
        <Col xs={10}>
          <h2>Esperienze</h2>
        </Col>
        <Col xs={1}>
          <i
            className="bi bi-plus-lg text-black"
            onClick={() => console.log("Plus icon clicked")}
            style={{ cursor: "pointer" }}
          ></i>
        </Col>
        <Col xs={1}>
          <i
            className="bi bi-pencil text-black"
            onClick={() => console.log("Pencil icon clicked")}
            style={{ cursor: "pointer" }}
          ></i>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="mb-3">
          <Row>
            <Col xs={2}>
              <img
                src={profile.image || "placeholder.jpg"}
                alt="Company Logo"
                className="w-100"
              />
            </Col>

            <Col xs={9}>
              <h5 className="text-black">
                {profile.title || "Titolo non disponibile"}
              </h5>
              <p>azienda</p>
              <p>
                {new Date(profile.createdAt).toLocaleDateString() ||
                  "Data creazione non disponibile"}{" "}
                -{" "}
                {new Date(profile.updatedAt).toLocaleDateString() ||
                  "Data aggiornamento non disponibile"}
              </p>
              <p>{profile.area || "Area non disponibile"}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Esperienze;
