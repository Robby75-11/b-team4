import {
  Navbar,
  Nav,
  Container,
  Dropdown,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../img/linkedin-logo-1629183836.png";

function NavBar() {
  return (
    <Navbar style={{ backgroundColor: "#FFFFFF" }} expand="lg">
      <Container>
        <Navbar.Brand
          href="#home"
          className="d-flex align-items-center gap-2"
          style={{ marginRight: "auto" }}
        >
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
          <Form>
            <Row>
              <Col xs="auto" className="d-flex align-items-center">
                <div className="position-relative">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className="pr-5"
                  />
                  <i
                    className="bi bi-search position-absolute top-50 end-0 translate-middle-y me-2"
                    style={{ pointerEvents: "none" }}
                  ></i>
                </div>
              </Col>
            </Row>
          </Form>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex gap-3" style={{ marginLeft: "auto" }}>
            <Nav.Link href="#home" className="text-center">
              <i className="bi bi-house-door-fill d-block"></i>
              Home
            </Nav.Link>
            <Nav.Link href="#network" className="text-center">
              <i className="bi bi-people d-block"></i>
              My Network
            </Nav.Link>
            <Nav.Link href="#jobs" className="text-center">
              <i className="bi bi-briefcase d-block"></i>
              Jobs
            </Nav.Link>
            <Nav.Link href="#messaging" className="text-center">
              <i className="bi bi-chat-dots d-block"></i>
              Messaging
            </Nav.Link>
            <Nav.Link href="#notifications" className="text-center">
              <i className="bi bi-bell-fill d-block"></i>
              Notifications
            </Nav.Link>

            <Dropdown align="end">
              <Dropdown.Toggle
                variant="light"
                id="dropdown-basic"
                className="text-center border-rigth"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRight: "1px solid #ccc",
                }}
              >
                <i class="bi bi-person-circle d-block"></i>
                Me
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#account">
                  <strong>Account</strong>
                </Dropdown.Item>
                <Dropdown.Item href="#premium">
                  Prova 1 mese di Premium per 0 EUR
                </Dropdown.Item>
                <Dropdown.Item href="#settings">
                  Impostazioni e privacy
                </Dropdown.Item>
                <Dropdown.Item href="#help">Guida</Dropdown.Item>
                <Dropdown.Item href="#language">Lingua</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#manage">
                  <strong>Gestisci</strong>
                </Dropdown.Item>
                <Dropdown.Item href="#posts">Post e attività</Dropdown.Item>
                <Dropdown.Item href="#job-account">
                  Account per la pubblicazione di offerte di lavoro
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#logout">Esci</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown align="end">
              <Dropdown.Toggle
                variant="light"
                id="dropdown-business"
                className="text-center"
                style={{
                  backgroundColor: "#FFFFFF",
                }}
              >
                <i className="bi bi-building-fill d-block text-center"></i>
                Per le aziende
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Header>
                  <strong>Le mie app</strong>
                </Dropdown.Header>
                <Dropdown.Item href="#clients">
                  Trova nuovi clienti
                </Dropdown.Item>
                <Dropdown.Item href="#groups">Gruppi</Dropdown.Item>
                <Dropdown.Header>Talent</Dropdown.Header>
                <Dropdown.Item href="#talent">Talent Insights</Dropdown.Item>
                <Dropdown.Item href="#job-offer">
                  Pubblica un’offerta di lavoro
                </Dropdown.Item>
                <Dropdown.Header>Vendite</Dropdown.Header>

                <Dropdown.Item href="#freelance">
                  Trova i migliori freelance
                </Dropdown.Item>
                <Dropdown.Header>Marketing</Dropdown.Header>

                <Dropdown.Item href="#advertise">Pubblicizza</Dropdown.Item>
                <Dropdown.Header>Learning</Dropdown.Header>

                <Dropdown.Item href="#business">
                  Scopri altro per il business
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#hire">Assumi su LinkedIn </Dropdown.Item>
                <Dropdown.Item href="#sell">Vendi con LinkedIn</Dropdown.Item>
                <Dropdown.Item href="#free-job-offer">
                  Offerta di lavoro gratuita
                </Dropdown.Item>
                <Dropdown.Item href="#advertise-linkedin">
                  Fai pubblicità su LinkedIn
                </Dropdown.Item>
                <Dropdown.Item href="#premium">
                  Inizia con Premium
                </Dropdown.Item>
                <Dropdown.Item href="#learn">Impara con LinkedIn</Dropdown.Item>
                <Dropdown.Item href="#admin-center">
                  Centro per amministratori
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item
                  href="#company-page"
                  className="text-center d-flex align-items-center gap-2"
                >
                  Crea una pagina aziendale
                  <i class="bi bi-plus-lg"></i>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
