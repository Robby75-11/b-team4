import { Card, Col, Form, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "../redux/actions";
import { useEffect } from "react";

const Profilo =
  "https://cdn.calciomercato.com/images/2019-05/Whatsapp.senza.immagine.2019.1400x840.jpg";

const Copertina =
  "https://img.freepik.com/foto-premium/l-icona-su-sfondo-blu-concetto-di-lavoro-di-squadra-rete-e-comunita_524876-390.jpg";

const authorization = `bearer `;

const MainProfile = ({ userId }) => {
  const profile = useSelector((state) => state.profile.profile);
  const dispatch = useDispatch();

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

  useEffect(() => {
    fetchProfile(userId); // Recupera il profilo in base all'ID
  }, [userId]); // Esegui la fetch ogni volta che cambia l'ID

  return (
    <Card
      className="position-relative shadow-sm border border-2 rounded-2"
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
            <Card.Text className="text-secondary">
              {profile.area || "Area non disponibile"}
              <a href="#" className="text-decoration-none d-block">
                Informazioni di contatto
              </a>
            </Card.Text>
            <Card.Text className="text-primary">
              <a href="#" className="text-decoration-none">
                {Math.floor(Math.random() * 101)} collegamenti
              </a>
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default MainProfile;
