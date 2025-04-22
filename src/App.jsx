import "./App.css";
import NavBar from "./component/NavBar";
import Esperienze from "./component/Esperienze";
import Footer from "./component/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container } from "react-bootstrap";
import Competenze from "./component/Competenze";

function App() {
  return (
    <Container style={{ backgroundColor: "#F4F2EE", minHeight: "100vh" }}>
      <NavBar />
      <br />
      <Esperienze />
      <br />
      <Competenze />
      <br />
      <Footer />
    </Container>
  );
}

export default App;
