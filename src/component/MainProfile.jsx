import { Card, Col, Container, Row, Button } from "react-bootstrap";

const Profilo =
  "https://cdn.calciomercato.com/images/2019-05/Whatsapp.senza.immagine.2019.1400x840.jpg";
const Copertina =
  "https://img.freepik.com/foto-premium/l-icona-su-sfondo-blu-concetto-di-lavoro-di-squadra-rete-e-comunita_524876-390.jpg";

const MainProfile = function () {
  return (
    <Card className="position-relative m-1 shadow-sm border border-secondary rounded-3">
      <div className="image-container-left">
        <img
          src="https://cdn.calciomercato.com/images/2019-05/Whatsapp.senza.immagine.2019.1400x840.jpg"
          className="profile-image"
          alt="profile"
        />
      </div>
      <Card.Img
        variant="top"
        src="https://img.freepik.com/foto-premium/l-icona-su-sfondo-blu-concetto-di-lavoro-di-squadra-rete-e-comunita_524876-390.jpg"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Row>
          <Col sx={8} md={8} lg={8}>
            <Card.Title className="mt-5 fs-3">Mario Rossi</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Text className="text-secondary ">
              Roma, Lazio, Italia -{" "}
              <a href="#" className=" text-decoration-none ">
                Informazioni di contatto
              </a>
            </Card.Text>
            <Card.Text className="text-primary">
              <a href="#" className=" text-decoration-none ">
                n collegamenti
              </a>
            </Card.Text>
          </Col>
          <Col sx={4} md={4} lg={4}>
            <div className="d-flex mt-5 ms-4">
              <div>
                <img
                  src="https://media.licdn.com/dms/image/v2/C4E0BAQFKOkXzr7_7dQ/company-logo_200_200/company-logo_200_200/0/1679997075169/resultconsulting_logo?e=2147483647&v=beta&t=NU8mvoBLmgDrYK3i1K03_P02bljk6LrQmD4y1cOcQBs"
                  alt="logo"
                  style={{ height: "15px", width: "15px" }}
                  className="me-2"
                />
              </div>
              <div>
                <p>Result Consulting</p>
              </div>
            </div>
          </Col>
        </Row>
        <div className="mt-2 mb-2">
          <Button
            variant="primary"
            className="text-white btn-outline-primary me-2 mt-2 rounded-start rounded-end"
          >
            Disponibile per
          </Button>
          <Button
            variant="white"
            className="text-primary btn-outline-primary me-2 mt-2 rounded-start rounded-end"
          >
            Aggiungi sezione del profilo
          </Button>
          <Button
            variant="white"
            className="text-primary btn-outline-primary me-2 mt-2 rounded-start rounded-end"
          >
            Migliora profilo
          </Button>
          <Button
            variant="white"
            className="text-secondary btn-outline-secondary me-2 mt-2 rounded-start rounded-end"
          >
            Risorse
          </Button>
        </div>
        <Row>
          <Col sx={6} md={6} lg={6}>
            <div
              className="d-flex flex-column border border-secondary border-1  mt-3 mb-3 p-2 lh-1 rounded-2"
              style={{ height: "120px" }}
            >
              <p className="fw-bold">Disponibile a lavorare</p>
              <p>Aggiungi qualifiche e località per cui sei disponibile</p>
              <div className="mt-auto">
                <a href="#" className=" text-decoration-none ">
                  Mostra dettagli
                </a>
              </div>
            </div>
          </Col>
          <Col sx={6} md={6} lg={6}>
            <div
              className="d-flex flex-column border border-secondary border-1  mt-3 mb-3 p-2 lh-1 rounded-2"
              style={{ height: "120px" }}
            >
              <div>
                <p className="fw-bold lh-2">
                  Fai sapere che stai facendo selezione e attrai candidati
                  qualificati
                </p>
              </div>

              <div className="mt-auto">
                <a href="#" className=" text-decoration-none ">
                  Inizia
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default MainProfile;
