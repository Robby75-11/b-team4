import React, { useEffect, useState } from "react";
import { Row, Col, Modal, Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

const URL =
  "https://striveschool-api.herokuapp.com/api/profile/680767b1d451810015ce83d8/experiences";
const authorization =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA3NjdiMWQ0NTE4MTAwMTVjZTgzZDgiLCJpYXQiOjE3NDUzOTgxODYsImV4cCI6MTc0NjYwNzc4Nn0.hQJA7Fri0PEaMrJQ5Jsd9c_ucAmS_bVgv0BzVjV1tFo";

const Esperienze = () => {
  const profile = useSelector((state) => state.profile.profile);
  const dispatch = useDispatch();
  const [esperienze, setEsperienze] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedExperienceId, setSelectedExperienceId] = useState(null);
  const [addEsperienza, setAddEsperienza] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  const fetchEsperienze = () => {
    fetch(URL, {
      headers: {
        Authorization: authorization,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Errore nel recupero delle esperienze");
        }
        return res.json();
      })
      .then((data) => {
        setEsperienze(data);
        dispatch({ type: "SET_ESPERIENZE", payload: data });
      })
      .catch(console.error);
  };

  useEffect(() => {
    fetchEsperienze();
  }, []);

  const handleShowModal = () => {
    setAddEsperienza({
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      area: "",
    });
    setSelectedExperienceId(null);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedExperienceId(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddEsperienza({ ...addEsperienza, [name]: value });
  };
  const handleDeleteExperience = async () => {
    if (!selectedExperienceId) return;

    try {
      const response = await fetch(`${URL}/${selectedExperienceId}`, {
        method: "DELETE",
        headers: {
          Authorization: authorization,
        },
      });

      if (!response.ok) {
        throw new Error("Errore durante l'eliminazione");
      }

      // Refetch esperienze dopo DELETE
      const res = await fetch(URL, {
        headers: {
          Authorization: authorization,
        },
      });
      const updatedData = await res.json();

      dispatch({ type: "SET_ESPERIENZE", payload: updatedData });
      setEsperienze(updatedData);
      handleCloseModal();
      alert("L'esperienza è stata eliminata");
    } catch (error) {
      console.error("Errore DELETE:", error);
      alert("Errore durante l'eliminazione");
    }
  };
  const handleEditExperience = (exp) => {
    setAddEsperienza({
      role: exp.role || "",
      company: exp.company || "",
      startDate: exp.startDate ? exp.startDate.slice(0, 10) : "",
      endDate: exp.endDate ? exp.endDate.slice(0, 10) : "",
      description: exp.description || "",
      area: exp.area || "",
    });
    setSelectedExperienceId(exp._id);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedExperience = {
      ...addEsperienza,
      endDate: addEsperienza.endDate || null,
    };

    const method = selectedExperienceId ? "PUT" : "POST";
    const url = selectedExperienceId ? `${URL}/${selectedExperienceId}` : URL;

    fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization,
      },
      body: JSON.stringify(formattedExperience),
    })
      .then((res) => res.json())
      .then(() => {
        fetchEsperienze();
        handleCloseModal();
      })
      .catch(console.error);
  };

  return (
    <div
      className="border border-2 rounded-2 p-3"
      style={{ backgroundColor: "#FFFFFF", borderColor: "#D2D2D2" }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <h1>Esperienze</h1>
        <i
          className="bi bi-plus-lg text-black"
          onClick={handleShowModal}
          style={{ cursor: "pointer" }}
        ></i>
      </div>

      <Row>
        {esperienze.length === 0 ? (
          <Col xs={12}>
            <p className="text-muted fst-italic">Nessuna esperienza presente</p>
          </Col>
        ) : (
          esperienze.map((esperienza, index) => (
            <Col xs={12} className="mb-3" key={index}>
              <div className="d-flex border-bottom border-secondary">
                <div>
                  <img
                    src={
                      esperienza.image ||
                      "https://icon2.cleanpng.com/lnd/20240918/us/95fa3f338924288ba0d02cc7c9e561.webp"
                    }
                    alt="Logo Aziendale"
                    style={{ height: "80px", width: "80px" }}
                    className="me-3 mt-3"
                  />
                </div>
                <div className="mt-3 lh-1 w-100">
                  <div className="d-flex justify-content-between">
                    <p className="fw-bold">{esperienza.role}</p>
                    <i
                      className="bi bi-pencil text-black"
                      onClick={() => handleEditExperience(esperienza)}
                      style={{ cursor: "pointer" }}
                    ></i>
                  </div>
                  <p>{esperienza.company}</p>
                  <p className="text-secondary">
                    {new Date(esperienza.startDate).toLocaleDateString()} -{" "}
                    {esperienza.endDate
                      ? new Date(esperienza.endDate).toLocaleDateString()
                      : "Presente"}
                  </p>
                  <div className="fw-bold mt-5 mb-4">{esperienza.area}</div>
                </div>
              </div>
            </Col>
          ))
        )}
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedExperienceId ? "Modifica" : "Aggiungi"} Esperienza
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {["role", "company", "description", "area"].map((field) => (
              <Form.Group className="mb-3" key={field}>
                <Form.Label>
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder={`Inserisci ${field}`}
                  name={field}
                  value={addEsperienza[field]}
                  onChange={handleInputChange}
                />
              </Form.Group>
            ))}
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
            <div className="d-flex justify-content-between align-items-center">
              <Button variant="primary" type="submit">
                {selectedExperienceId ? "Aggiorna" : "Salva"}
              </Button>
              {selectedExperienceId && (
                <Button variant="danger" onClick={handleDeleteExperience}>
                  Elimina
                </Button>
              )}
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Esperienze;
