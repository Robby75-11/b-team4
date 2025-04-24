import React from "react";
import {
  Card,
  ListGroup,
  Row,
  Col,
  Container,
  Button,
  Image,
} from "react-bootstrap";
import { Pencil, SendFill, PersonPlusFill } from "react-bootstrap-icons";
import { useEffect, useState } from "react";

const SideBar = ({ onProfileSelect }) => {
  const [filteredProfiles, setFilteredProfiles] = useState([]);

  const wantedUsers = [
    "Roberto Albergo",
    "Anna Firinu",
    "Marco Minisgallo",
    "Marco Teodoro Mancuso",
    "Alessandro Di Benedetto",
    "Roberto Ciancio",
  ];

  useEffect(() => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODBhMDYyNDFmMzVjZjAwMTU1MTdhNjAiLCJpYXQiOjE3NDU0ODczOTYsImV4cCI6MTc0NjY5Njk5Nn0.0U1k0IoAeLEqJhy1hR6gU54RmcFlQIj_tpxm74nuFgo",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const matching = data.filter((user) =>
          wantedUsers.includes(`${user.name} ${user.surname}`)
        );
        setFilteredProfiles(matching);
      })
      .catch((err) => console.error("Errore nel caricamento profili:", err));
  }, []);

  const people = [
    {
      name: "Stefania Spampinato",
      title: "Aspirante HR Recruiter...",
      imageUrl: "https://via.placeholder.com/40/e0e0e0/707070?Text=SS",
    },
    {
      name: "Cecilia Onorato",
      title: "HR Talent Acquisition...",
      imageUrl: "https://via.placeholder.com/40/f0f0f0/808080?Text=CO",
    },
    {
      name: "Sara Salafica",
      title: "HR Specialist Divisione Search and...",
      imageUrl: "https://via.placeholder.com/40/d0d0d0/606060?Text=SSa",
    },
    {
      name: "Alfredo Quattrocchi",
      title: "HR Intern",
      imageUrl: "https://via.placeholder.com/40/c0c0c0/505050?Text=AQ",
    },
    {
      name: "Denise Messina",
      title: "HR Specialist at BaxEnergy Italia...",
      imageUrl: "https://via.placeholder.com/40/b0b0b0/404040?Text=DM",
    },
  ];

  const pages = [
    {
      name: "freeCodeCamp",
      description: "E-learning",
      followers: "1.963.095 follower",
      connectionsWorking: "1 collegamento lavora qui",
      imageUrl: "https://via.placeholder.com/40/000000/ffffff?Text=(%E2%84%B3)",
    },
    {
      name: "Joinrs Italia",
      description: "Sviluppo di software",
      followers: "98.296 follower",
      connectionsFollowing: "20 collegamenti seguono questa pagina",
      imageUrl: "https://via.placeholder.com/40/ff6600/ffffff?Text=JO",
    },
  ];

  return (
    <Container>
      <Card className="mb-3">
        <ListGroup variant="flush">
          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            <div>
              <h6 className="mb-0">Lingua del profilo</h6>
              <p className="text-muted">Italiano</p>
            </div>
            <Pencil
              size={20}
              className="text-secondary"
              style={{ cursor: "pointer" }}
            />
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            <div>
              <h6 className="mb-0">Profilo pubblico e URL</h6>
              <p className="text-muted">
                www.linkedin.com/in/alessandro-di-benedetto-a40b572aa
              </p>
            </div>
            <Pencil
              size={20}
              className="text-secondary"
              style={{ cursor: "pointer" }}
            />
          </ListGroup.Item>
        </ListGroup>
      </Card>
      {/* utenti da rendere dinamici  */}

      <Card className="mb-3">
        <Card.Header>
          <h6 className="mb-0">Altri profili consultati</h6>
          <p className="text-muted">Solo per te</p>
        </Card.Header>
        <ListGroup variant="flush">
          {filteredProfiles.map((user) => (
            <ListGroup.Item key={user._id}>
              <Row className="align-items-center">
                <Col xs="auto">
                  <Image
                    src={user.image}
                    alt={`${user.name} ${user.surname}`}
                    roundedCircle
                    className="me-2"
                    width={40}
                    height={40}
                  />
                </Col>
                <Col>
                  <h6 className="mb-0">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault(); // Previene il comportamento predefinito del link
                        onProfileSelect(user._id); // Passa l'ID del profilo selezionato
                      }}
                      style={{
                        textDecoration: "none",
                        color: "black",
                        cursor: "pointer",
                      }}
                    >
                      {user.name} {user.surname}
                    </a>
                    <span className="text-primary fw-normal"> in </span>
                    <span className="text-muted">• 1°</span>
                  </h6>
                  <p className="text-muted text-truncate mb-0">{user.title}</p>
                </Col>
              </Row>
              <Button variant="outline-primary" size="sm" className="mt-2">
                <SendFill size={16} className="me-1" />
                Messaggio
              </Button>
            </ListGroup.Item>
          ))}

          {/* Blocco Premium */}
          <ListGroup.Item className="text-center">
            <Row className="align-items-center justify-content-center mb-2">
              <Col xs="auto">
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: "#ffc107",
                    borderRadius: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  🔑
                </div>
              </Col>
              <Col xs="auto" className="text-start">
                <h6 className="mb-0">Sblocca l'elenco completo</h6>
              </Col>
            </Row>
            <small className="text-muted mb-2 d-block">
              Scopri gli altri profili visitati spesso insieme al tuo
            </small>
            <Button variant="warning" size="sm" className="mb-2">
              Prova Premium per 0 EUR
            </Button>
            <small className="text-muted d-block">
              1 mese gratis con assistenza 24/7. Annulli in qualsiasi momento.
              Ti invieremo un promemoria 7 giorni prima della fine del periodo
              di prova.
            </small>
          </ListGroup.Item>
        </ListGroup>
      </Card>
      {/* seconda parte */}
      <Card className="mb-3">
        <Card.Header>
          <h6 className="mb-0">Persone che potresti conoscere</h6>
        </Card.Header>
        <ListGroup variant="flush">
          {people.map((person, index) => (
            <ListGroup.Item key={index}>
              <Row className="align-items-center">
                <Col xs="auto">
                  <Image
                    src="https://picsum.photos/seed/profilo1/100/100

"
                    alt={person.name}
                    roundedCircle
                    className="me-2 w-25"
                  />
                </Col>
                <Col>
                  <h6 className="mb-0">
                    {person.name}{" "}
                    <span className="text-primary fw-normal">in</span>
                  </h6>
                  <small className="text-muted text-truncate">
                    {person.title}
                  </small>
                </Col>
              </Row>
              <Button variant="outline-primary" size="sm" className="mt-2">
                <PersonPlusFill size={16} className="me-1" /> Collegati
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Card.Footer className="text-center">
          <Button variant="outline-secondary" size="sm">
            Mostra tutto
          </Button>
        </Card.Footer>
      </Card>
      <Card className="mb-3">
        <Card.Header>
          <h6 className="mb-0">Potrebbe interessarti</h6>
          <small className="text-muted">Pagine per te</small>
        </Card.Header>
        <ListGroup variant="flush">
          {pages.map((page, index) => (
            <ListGroup.Item key={index}>
              <Row className="align-items-center mb-2">
                <Col xs="auto">
                  <Image
                    src="https://picsum.photos/seed/profilo1/100/100"
                    alt={page.name}
                    rounded
                    className="me-2 "
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "cover",
                    }}
                  />
                </Col>
                <Col>
                  <h6 className="mb-0">{page.name}</h6>
                  <small className="text-muted">{page.description}</small>
                  <small className="text-muted">{page.followers}</small>
                </Col>
              </Row>
              {page.connectionsWorking && (
                <div className="d-flex align-items-center mb-2">
                  <Image
                    src="https://picsum.photos/seed/profilo1/100/100"
                    alt="User"
                    roundedCircle
                    className="me-1"
                    style={{
                      width: "20px",
                      height: "20px",
                      objectFit: "cover",
                    }}
                  />
                  <small className="text-muted">
                    {page.connectionsWorking}
                  </small>
                </div>
              )}
              {page.connectionsFollowing && (
                <div className="d-flex align-items-center mb-2">
                  <div className="d-flex">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <Image
                        key={i}
                        src="https://picsum.photos/seed/profilo1/100/100"
                        roundedCircle
                        className="me-1"
                        style={{
                          width: "20px",
                          height: "20px",
                          objectFit: "cover",
                        }}
                      />
                    ))}
                  </div>
                  <small className="text-muted">
                    {page.connectionsFollowing}
                  </small>
                </div>
              )}
              <Button variant="outline-primary" size="sm">
                + Segui
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Card.Footer className="text-center">
          <Button variant="outline-secondary" size="sm">
            Mostra tutto
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default SideBar;
