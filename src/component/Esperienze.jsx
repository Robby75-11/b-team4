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
                onClick={handleShowModal}
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
      <Row>
        {esperienze.length === 0 ? (
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
        ) : (
          /* <Col xs={12} className="mb-3">
            <Row>
              <Col xs={2}>
                <img
                  src={profile.image || "placeholder.jpg"}
                  alt="Company Logo"
                  style={{ height: "80px", width: "80px" }}
                  className="me-3 mt-3"
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
          </Col>*/
          esperienze.map((esperienza, index) => (
            <Col xs={12} className="mb-3" key={index}>
              <div className="d-flex border-bottom border-secondary">
                <div>
                  <img
                    src={
                      esperienza.image ||
                      "https://icon2.cleanpng.com/lnd/20240918/us/95fa3f338924288ba0d02cc7c9e561.webp"
                    }
                    alt="Company Logo"
                    style={{ height: "80px", width: "80px" }}
                    className="me-3 mt-3"
                  />
                </div>

                <div className="mt-3 lh-1">
                  <p className="fw-bold">
                    {esperienza.role || "Ruolo non disponibile"}
                  </p>
                  <p>{esperienza.company || "Azienda non disponibile"}</p>
                  <p className="text-secondary">
                    {new Date(esperienza.startDate).toLocaleDateString() ||
                      "Data inizio non disponibile"}{" "}
                    -{" "}
                    {esperienza.endDate
                      ? new Date(esperienza.endDate).toLocaleDateString()
                      : "Presente"}
                  </p>
                  <div className="fw-bold mt-5 mb-4">
                    {esperienza.area || "Area non disponibile"}
                  </div>
                </div>
              </div>
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
    </div>
  );
};

export default Esperienze;
