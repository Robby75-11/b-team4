import { Card, Col, Form, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "../redux/actions";
import { useEffect } from "react";

const Profilo =
  "https://cdn.calciomercato.com/images/2019-05/Whatsapp.senza.immagine.2019.1400x840.jpg";

const Copertina =
  "https://img.freepik.com/foto-premium/l-icona-su-sfondo-blu-concetto-di-lavoro-di-squadra-rete-e-comunita_524876-390.jpg";

const URL = "https://striveschool-api.herokuapp.com/api/profile/me";

const authorization =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA3NjdiMWQ0NTE4MTAwMTVjZTgzZDgiLCJpYXQiOjE3NDUzOTgxODYsImV4cCI6MTc0NjYwNzc4Nn0.hQJA7Fri0PEaMrJQ5Jsd9c_ucAmS_bVgv0BzVjV1tFo";

const MainProfile = function () {
  const profile = useSelector((state) => state.profile.profile);

  const dispatch = useDispatch();
  const uploadProfileImage = (file) => {
    const formData = new FormData();
    formData.append("profile", file);

    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${profile._id}/picture`,
      {
        method: "POST",
        headers: {
          Authorization: authorization,
        },
        body: formData,
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Errore nel caricamento dell'immagine");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Immagine caricata con successo:", data);
        // Ricarica il profilo per aggiornare l'immagine
        return fetch(URL, {
          headers: { Authorization: authorization },
        });
      })
      .then((response) => response.json())
      .then((updatedProfile) => {
        dispatch(setProfile(updatedProfile));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetch(URL, {
      headers: { Authorization: authorization },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Errore nella fetch");
        return res.json();
      })
      .then((data) => {
        dispatch(setProfile(data));
      })
      .catch((error) => console.error("Errore:", error));
  }, [dispatch]);

  return (
    <Card
      className="position-relative  shadow-sm  border border-2 rounded-2 "
      style={{ borderColor: "#D2D2D2" }}
    >
      <div className="image-container-left">
        <img
          src={profile.image || Profilo}
          className="profile-image"
          alt="profile"
        />
        <Form.Control
          type="file"
          onChange={(e) => uploadProfileImage(e.target.files[0])}
          className="mt-2"
        />
      </div>
      <Card.Img
        variant="top"
        src={Copertina}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Row>
          <Col sx={8}>
            <Card.Title className="mt-5 fs-3">
              {`${profile.name || "Nome non disponibile"} ${
                profile.surname || ""
              }`}
            </Card.Title>
            <Card.Text>{profile.bio || "Biografia non disponibile"}</Card.Text>
            <Card.Text className="text-secondary ">
              {profile.area || "Area non disponibile"}
              <a href="#" className=" text-decoration-none d-block">
                Informazioni di contatto
              </a>
            </Card.Text>
            <Card.Text className="text-primary">
              <a href="#" className=" text-decoration-none ">
                {Math.floor(Math.random() * 101)} collegamenti
              </a>
            </Card.Text>
          </Col>
          <Col sx={4}>
            <div className="d-flex mt-5 pt-5 ms-4">
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
            className="text-white btn-outline-primary me-2 mt-2 "
            style={{ borderRadius: 32 }}
          >
            Disponibile per
          </Button>

          <Button
            variant="secondary"
            className="text-primary btn-outline-primary me-2 mt-2 bg-white"
            style={{ borderRadius: 32 }}
          >
            Aggiungi sezione del profilo
          </Button>
          <Button
            variant="white"
            className="text-primary btn-outline-primary me-2 mt-2 bg-white"
            style={{ borderRadius: 32 }}
          >
            Migliora profilo
          </Button>
          <Button
            variant="white"
            className="text-black btn-outline-secondary me-2 mt-2 bg-white"
            style={{ borderRadius: 32 }}
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
