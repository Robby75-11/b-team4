import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Row, Col, Container } from "react-bootstrap";

const Esperienze = () => {
  const profile = useSelector((state) => state.profile.profile); // Accedi direttamente al profilo

  return (
    <div
      className="border border-2 rounded-2 p-3"
      style={{ backgroundColor: "#FFFFFF", borderColor: "#D2D2D2" }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <h1>Esperienze</h1>
        <div>
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
        </div>
      </div>
      <div className="d-flex border-bottom border-secondary">
        <div>
          <img
            src={profile.image || "placeholder.jpg"}
            alt="Company Logo"
            style={{ height: "80px", width: "80px" }}
            className="me-3 mt-3"
          />
        </div>
        <div className="mt-3 lh-1">
          <p className="fw-bold">
            {" "}
            {profile.title || "Titolo non disponibile"}
          </p>
          <p>Azienda</p>
          <p className="text-secondary">
            {new Date(profile.createdAt).toLocaleDateString() ||
              "Data creazione non disponibile"}{" "}
            -{" "}
            {new Date(profile.updatedAt).toLocaleDateString() ||
              "Data aggiornamento non disponibile"}
          </p>
          <div className="fw-bold mt-5 mb-4">
            {profile.area || "Area non disponibile"}
          </div>
        </div>
      </div>
    </div>

    /* Ho lasciato commentat la vecchia struttura, qualora qualcuno ci abbia lavorato 
prima della modifica e avesse bisogno di un riscontro*/
    /* <Container
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
    </Container>*/
  );
};

export default Esperienze;
