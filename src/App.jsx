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
    <>
      <NavBar />
      <Container
        style={{
          backgroundColor: "#F4F2EE",
          minHeight: "100vh",
          display: "flex",
          paddingTop: "20px",
          gap: 10,
          flexDirection: "column",
        }}
      >
        <MainProfile />
        <Esperienze />
        <Formazione />
        <Lingue />
        <Competenze />

        <Footer />
      </Container>
    </>
  );
}

export default App;
