import React, { useEffect, useState } from "react";
import { Card, Col, Form, Row, Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { PencilSquare } from "react-bootstrap-icons";
import { setProfile } from "../redux/actions";

const Profilo =
  "https://cdn.calciomercato.com/images/2019-05/Whatsapp.senza.immagine.2019.1400x840.jpg";

const Copertina =
  "https://img.freepik.com/foto-premium/l-icona-su-sfondo-blu-concetto-di-lavoro-di-squadra-rete-e-comunita_524876-390.jpg";

const authorization = `bearer `;

const MainProfile = ({ userId }) => {
  const profile = useSelector((state) => state.profile.profile);
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null); // Stato per l'immagine selezionata
  const [showModal, setShowModal] = useState(false); // Stato per il modale

  const fetchProfile = (id) => {
    const URL = `https://striveschool-api.herokuapp.com/api/profile/${id}`;
    fetch(URL, {
      headers: { Authorization: authorization },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Errore nella fetch");
        return res.json();
      })
      .then((data) => {
        dispatch(setProfile(data)); // Aggiorna lo stato Redux con i dati del profilo
      })
      .catch((error) => console.error("Errore:", error));
  };

  const handleImageUpload = (e) => {
    e.preventDefault();

    if (!selectedImage) {
      console.error("Nessuna immagine selezionata");
      return;
    }

    const URL = `https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`;

    const formData = new FormData();
    formData.append("profile", selectedImage); // Aggiungi l'immagine al FormData

    fetch(URL, {
      method: "POST",
      headers: {
        Authorization: authorization,
      },
      body: formData,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Errore durante il caricamento dell'immagine");
        }
        return res.json();
      })
      .then(() => {
        fetchProfile(userId); // Aggiorna il profilo dopo il caricamento
        setShowModal(false); // Chiudi il modale
      })
      .catch((err) => console.error("Errore:", err));
  };

  useEffect(() => {
    fetchProfile(userId); // Recupera il profilo in base all'ID
  }, [userId]);

  return (
    <Card className="shadow-sm border border-2 rounded-2">
      <Card.Img
        variant="top"
        src={Copertina}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Row className="align-items-center">
          <Col xs={12} md={4} className="text-center position-relative">
            <img
              src={profile.image || Profilo}
              alt="profile"
              className="rounded-circle"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            {/* Icona matita per aprire il modale */}
            <PencilSquare
              className="position-absolute"
              style={{
                top: "10px",
                right: "10px",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
              onClick={() => setShowModal(true)} // Mostra il modale
            />
          </Col>
          <Col xs={12} md={8}>
            <Card.Title className="fs-3">
              {`${profile.name || "Nome non disponibile"} ${
                profile.surname || ""
              }`}
            </Card.Title>
            <Card.Text>{profile.bio || "Biografia non disponibile"}</Card.Text>
            <Card.Text className="text-secondary">
              {profile.area || "Area non disponibile"}
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>

      {/* Modale per il caricamento dell'immagine */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Carica una nuova immagine</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleImageUpload}>
            <Form.Group controlId="formFile">
              <Form.Label>Seleziona un'immagine</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setSelectedImage(e.target.files[0])} // Aggiorna lo stato
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Carica Immagine
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Card>
  );
};

export default MainProfile;
