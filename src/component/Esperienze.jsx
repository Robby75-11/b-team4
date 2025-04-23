import React, { useEffect, useState } from "react";
import { Row, Col, Container, Modal, Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";

const URL =
  "https://striveschool-api.herokuapp.com/api/profile/680767b1d451810015ce83d8/experiences";
const authorization =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA3NjdiMWQ0NTE4MTAwMTVjZTgzZDgiLCJpYXQiOjE3NDUzOTgxODYsImV4cCI6MTc0NjYwNzc4Nn0.hQJA7Fri0PEaMrJQ5Jsd9c_ucAmS_bVgv0BzVjV1tFo";

const Esperienze = () => {
  const profile = useSelector((state) => state.profile.profile); // Accedi direttamente al profilo
  const [esperienze, setEsperienze] = useState([]); // Stato per salvare le esperienze
  const [showModal, setShowModal] = useState(false); // Stato per gestire il modale
  const [addEsperienza, setAddEsperienza] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  }); // Stato per i dati del form

  const fetchEsperienze = () => {
    fetch(URL, {
      headers: {
        Authorization: authorization,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nella fetch");
        }
        return response.json();
      })
      .then((data) => {
        setEsperienze(data); // Salva i dati nello stato
        console.log("Esperienze recuperate:", data);
      })
      .catch((error) => {
        console.error("Errore:", error);
      });
  };

  // Fetch delle esperienze al caricamento del componente
  useEffect(() => {
    fetchEsperienze();
  }, []);

  // Funzione per gestire l'apertura del modale
  const handleShowModal = () => setShowModal(true);

  // Funzione per gestire la chiusura del modale
  const handleCloseModal = () => setShowModal(false);

  // Funzione per gestire il cambiamento dei campi del form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddEsperienza({ ...addEsperienza, [name]: value });
  };

  // Funzione per inviare la chiamata POST
  const handleSubmit = (e) => {
    e.preventDefault();

    // Formatta i dati prima di inviarli
    const formattedExperience = {
      ...addEsperienza,
      endDate: addEsperienza.endDate || null,
    };

    console.log("Dati inviati:", formattedExperience);

    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization,
      },
      body: JSON.stringify(formattedExperience),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nella fetch");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Esperienza aggiunta:", data);
        fetchEsperienze(); // Aggiorna la lista delle esperienze
        handleCloseModal(); // Chiudi il modale
      })
      .catch((error) => {
        console.error("Errore:", error);
      });
  };
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
            onClick={handleShowModal}
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
        {esperienze.length === 0 ? (
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
        ) : (
          esperienze.map((esperienza, index) => (
            <Col xs={12} className="mb-3" key={index}>
              <Row>
                <Col xs={2}>
                  <img
                    src={
                      esperienza.image ||
                      "https://icon2.cleanpng.com/lnd/20240918/us/95fa3f338924288ba0d02cc7c9e561.webp"
                    }
                    alt="Company Logo"
                    className="w-100"
                  />
                </Col>

                <Col xs={9}>
                  <h5 className="text-black">
                    {esperienza.role || "Ruolo non disponibile"}
                  </h5>
                  <p>{esperienza.company || "Azienda non disponibile"}</p>
                  <p>
                    {new Date(esperienza.startDate).toLocaleDateString() ||
                      "Data inizio non disponibile"}{" "}
                    -{" "}
                    {esperienza.endDate
                      ? new Date(esperienza.endDate).toLocaleDateString()
                      : "Presente"}
                  </p>
                  <p>{esperienza.area || "Area non disponibile"}</p>
                </Col>
              </Row>
            </Col>
          ))
        )}
      </Row>

      {/* Modale per aggiungere una nuova esperienza */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi Esperienza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Ruolo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il ruolo"
                name="role"
                value={addEsperienza.role}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Azienda</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il nome dell'azienda"
                name="company"
                value={addEsperienza.company}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Data di Inizio</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={addEsperienza.startDate}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Data di Fine</Form.Label>
              <Form.Control
                type="date"
                name="endDate"
                value={addEsperienza.endDate}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Inserisci una descrizione"
                name="description"
                value={addEsperienza.description}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Area</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci l'area"
                name="area"
                value={addEsperienza.area}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Salva
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );

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
            onClick={handleShowModal}
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
        {esperienze.length === 0 ? (
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
        ) : (
          esperienze.map((esperienza, index) => (
            <Col xs={12} className="mb-3" key={index}>
              <Row>
                <Col xs={2}>
                  <img
                    src={
                      esperienza.image ||
                      "https://icon2.cleanpng.com/lnd/20240918/us/95fa3f338924288ba0d02cc7c9e561.webp"
                    }
                    alt="Company Logo"
                    className="w-100"
                  />
                </Col>

                <Col xs={9}>
                  <h5 className="text-black">
                    {esperienza.role || "Ruolo non disponibile"}
                  </h5>
                  <p>{esperienza.company || "Azienda non disponibile"}</p>
                  <p>
                    {new Date(esperienza.startDate).toLocaleDateString() ||
                      "Data inizio non disponibile"}{" "}
                    -{" "}
                    {esperienza.endDate
                      ? new Date(esperienza.endDate).toLocaleDateString()
                      : "Presente"}
                  </p>
                  <p>{esperienza.area || "Area non disponibile"}</p>
                </Col>
              </Row>
            </Col>
          ))
        )}
      </Row>*/
};

export default Esperienze;
