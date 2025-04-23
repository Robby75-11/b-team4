import { Card, ListGroup, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import enelLogo from "../assets/enel D.png";
import linkedinLogo from "../assets/logo linkedn.png";

const SideBar = () => {
  return (
    <Card className="mb-4 shadow-sm d-none d-sm-block">
      <Card.Body className="d-flex flex-column align-items-center">
        <h5 className="mb-3">In primo piano</h5>
        <ListGroup variant="flush" className="w-100 text-center">
          <ListGroup.Item>
            <Link to="/" className="text-decoration-none text-dark ">
              🏠 Home
            </Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to="/network" className="text-decoration-none text-dark">
              👥 Rete
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-center">
            <Dropdown>
              <Dropdown.Toggle
                variant="light"
                className=" text-dark  border-0 "
                style={{ minWidth: "150px" }}
              >
                💼 Lavoro
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ minWidth: "150px", textAlign: "center" }}>
                <Dropdown.Item as={Link} to="/jobs">
                  Annunci di lavoro
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/jobs/saved">
                  Salvati
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/jobs/applications">
                  Candidature
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/jobs/settings">
                  Impostazioni lavoro
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to="/messaging" className="text-decoration-none text-dark">
              💬 Papa Francesco è morto
              <div>
                <small>un giorno fa - 413 lettori</small>
                <br />
                <small>Oggi è la giornata della Terra</small>
                <br />
                <small>Google chiude i suoi domini locali</small>
              </div>
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-center">
            <Dropdown>
              <Dropdown.Toggle
                variant="light"
                className="text-dark border-0"
                style={{ minWidth: "200px" }}
              >
                📺 Vedi Altro
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ minWidth: "200px", textAlign: "center" }}>
                <Dropdown.Item>Dal mondo del lavoro - VIDEO</Dropdown.Item>
                <Dropdown.Item>Scienza e Tecnologia - VIDEO</Dropdown.Item>
                <Dropdown.Item>Economia e Finanza - VIDEO</Dropdown.Item>
                <Dropdown.Item>
                  Trattenere i talenti si fa più difficile
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </ListGroup.Item>
          <h4 className="mt-4">🎮 I giochi di oggi</h4>

          <ListGroup.Item className="d-flex flex-column align-items-center">
            <span style={{ fontSize: "1.5rem" }}>🐍</span>
            <Link to="/snake" className="text-decoration-none text-dark">
              Snake
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex flex-column align-items-center">
            <span style={{ fontSize: "1.5rem" }}>♟️</span>
            <Link to="/scacchi" className="text-decoration-none text-dark">
              Scacchi
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex flex-column align-items-center">
            <span style={{ fontSize: "1.5rem" }}>🎰</span>
            <Link to="/pinball" className="text-decoration-none text-dark">
              Pinball
            </Link>
          </ListGroup.Item>
        </ListGroup>
        <ListGroup.Item className="d-flex flex-column align-items-center mt-3 text-center">
          <img
            src={enelLogo}
            alt="Enel Logo"
            style={{ width: "50px", height: "50px", objectFit: "contain" }}
          />

          <span className="fw-semibold">E-Distribuzione</span>
          <small className="text-muted">
            Energia alla portata di tutti
            <br />
            Segui insieme a noi il viaggio dell'energia elettrica
          </small>
        </ListGroup.Item>
        <ListGroup.Item className="mt-4">
          <h6 className="text-center fw-bold mb-3">Persone da seguire</h6>

          {/* Persona 1 */}
          <div className="d-flex flex-column align-items-center mb-3">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Profilo 1"
              className="rounded-circle"
              style={{ width: "60px", height: "60px", objectFit: "cover" }}
            />
            <strong className="mt-2">Luca Bianchi</strong>
            <small>28 anni - Sviluppatore Frontend</small>
            <div className="text-muted text-center">
              <small>Email: luca.b@example.com</small>
              <br />
              <small>Tel: +39 345 123 4567</small>
              <br />
              <small>LinkedIn: /luca-bianchi</small>
            </div>
          </div>

          {/* Persona 2 */}
          <div className="d-flex flex-column align-items-center mb-3">
            <img
              src="https://randomuser.me/api/portraits/women/45.jpg"
              alt="Profilo 2"
              className="rounded-circle"
              style={{ width: "60px", height: "60px", objectFit: "cover" }}
            />
            <strong className="mt-2">Giulia Verdi</strong>
            <small>34 anni - UX Designer</small>
            <div className="text-muted text-center">
              <small>Email: giulia.v@example.com</small>
              <br />
              <small>Tel: +39 347 987 6543</small>
              <br />
              <small>LinkedIn: /giulia-verdi</small>
            </div>
          </div>

          {/* Persona 3 */}
          <div className="d-flex flex-column align-items-center mb-3">
            <img
              src="https://randomuser.me/api/portraits/men/65.jpg"
              alt="Profilo 3"
              className="rounded-circle"
              style={{ width: "60px", height: "60px", objectFit: "cover" }}
            />
            <strong className="mt-2">Marco Neri</strong>
            <small>40 anni - Project Manager</small>
            <div className="text-muted text-center">
              <small>Email: marco.n@example.com</small>
              <br />
              <small>Tel: +39 349 321 7654</small>
              <br />
              <small>LinkedIn: /marco-neri</small>
            </div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="mt-4">
          <h6 className="text-center fw-bold mb-3">Informazioni</h6>
          <ul className="list-unstyled text-center">
            <li>
              <a href="#" className="text-muted">
                Accessibilità
              </a>
            </li>
            <li>
              <a href="#" className="text-muted">
                Centro assistenza
              </a>
            </li>
            <li>
              <a href="#" className="text-muted">
                Privacy e condizioni
              </a>
            </li>
            <li>
              <a href="#" className="text-muted">
                Opzioni per gli annunci pubblicitari
              </a>
            </li>
            <li>
              <a href="#" className="text-muted">
                Pubblicità
              </a>
            </li>
            <li>
              <a href="#" className="text-muted">
                Servizi alle aziende
              </a>
            </li>
            <li>
              <a href="#" className="text-muted">
                Scarica l’app LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="text-muted">
                Altro
              </a>
            </li>
          </ul>
          <div className="d-flex justify-content-center align-items-center mt-2">
            <img
              src={linkedinLogo}
              alt="LinkedIn Logo"
              style={{ width: "20px", height: "20px", marginRight: "8px" }}
            />
            <small className="d-block text-center text-muted">
              LinkedIn Corporation © 2025
            </small>
          </div>
        </ListGroup.Item>
      </Card.Body>
    </Card>
  );
};

export default SideBar;
