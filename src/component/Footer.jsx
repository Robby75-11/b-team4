import React, { useState } from "react";
import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";

const Footer = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("Seleziona Lingua");

  const handleSelect = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <Container
      style={{ backgroundColor: "#F4F2EE" }}
      className="text-dark py-4"
    >
      <Row>
        <Col xs={12} md={2}>
          <Row className="mb-2">
            <Col>
              <a
                href="#informazioni"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Informazioni
              </a>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col>
              <a
                href="#informativa"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Informativa sulla community
              </a>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col>
              <a
                href="#link3"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Privacy e condizioni
              </a>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={2}>
          <Row className="mb-2">
            <Col>
              <a
                href="#link4"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Sales Solutions
              </a>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col>
              <a
                href="#link5"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Centro sicurezza
              </a>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col>
              <a
                href="#link6"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Accessibilità
              </a>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={2}>
          <Row className="mb-2">
            <Col>
              <a
                href="#link7"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Carriera
              </a>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col>
              <a
                href="#link8"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Opzioni per gli annunci pubblicitari
              </a>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col>
              <a
                href="#link9"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Mobile
              </a>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={2}>
          <Row className="mb-2">
            <Col>
              <a
                href="#link10"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Talent Solutions
              </a>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col>
              <a
                href="#link11"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Soluzioni di marketing
              </a>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col>
              <a
                href="#link12"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Pubblicita
              </a>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col>
              <a
                href="#link13"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Piccole imprese
              </a>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={4}>
          <DropdownButton
            id="dropdown-language"
            title={selectedLanguage}
            onSelect={handleSelect}
            variant="secondary"
          >
            <Dropdown.Item eventKey="Italiano">Italiano</Dropdown.Item>
            <Dropdown.Item eventKey="Inglese">Inglese</Dropdown.Item>
            <Dropdown.Item eventKey="Spagnolo">Spagnolo</Dropdown.Item>
            <Dropdown.Item eventKey="Francese">Francese</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Row className="mt-3">
          <Col>
            <span>LinkedIn Corporation © 2025 SC</span>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Footer;
