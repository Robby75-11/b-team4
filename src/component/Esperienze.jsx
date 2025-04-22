import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "../redux/actions";
import { Row, Col, Container } from "react-bootstrap";

const URL = "https://striveschool-api.herokuapp.com/api/profile/me";
const authorization =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA3NjdiMWQ0NTE4MTAwMTVjZTgzZDgiLCJpYXQiOjE3NDUzMTU3NjIsImV4cCI6MTc0NjUyNTM2Mn0.OWx9zeZE9btF7nPn_CDpHjse4Frk6cxi9iNO3EctW9A";

const Esperienze = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile); // Accedi direttamente al profilo

  useEffect(() => {
    fetch(URL, {
      headers: {
        Authorization: `Bearer ${authorization}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nella fetch");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(setProfile(data)); // Salva direttamente i dati del profilo
        console.log("Dati del profilo:", data);
      })
      .catch((error) => {
        console.error("Errore:", error);
      });
  }, [dispatch]);

  return (
    <Container fluid>
      <Row>
        <Col xs={10}>
          <h2>Esperienze</h2>
        </Col>
        <Col xs={1}>
          <i className="bi bi-plus-lg text-black"></i>
        </Col>
        <Col xs={1}>
          <i className="bi bi-pencil text-black"></i>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="mb-3">
          <Row>
            <Col xs={2}>
              <img
                src="https://icon2.cleanpng.com/lnd/20240918/us/95fa3f338924288ba0d02cc7c9e561.webp"
                alt={`company-logo`}
                className="w-100"
              />
            </Col>

            <Col xs={9}>
              <h5 className="text-black">{profile.title}</h5>
              <p>mese anno - mese anno</p>
              <p>{profile.area}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Esperienze;
