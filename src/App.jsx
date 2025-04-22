import "./App.css";
import NavBar from "./component/NavBar";
import Esperienze from "./component/Esperienze";
import Footer from "./component/Footer";
import MainProfile from "./component/MainProfile";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container } from "react-bootstrap";
import Competenze from "./component/Competenze";
import Formazione from "./component/Formazione";
import Lingue from "./component/Lingue";
import SideBar from "./component/SideBar";
function App() {
  return (
    <Container style={{ backgroundColor: "#F4F2EE", minHeight: "100vh" }}>
      <NavBar />
      <br />
      <Esperienze />
      <br />
      <MainProfile />
      <SideBar />
      <Formazione />
      <Lingue />
      <Competenze />
      <br />
      <Footer />
    </Container>
  );
}

export default App;
