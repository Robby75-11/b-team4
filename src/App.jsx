import React from "react";
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
import Messaggi from "./component/messaggi";

function App() {
  return (
    <>
      <NavBar />
      <Container
        style={{
          backgroundColor: "#F4F2EE",
          minHeight: "100vh",
          paddingTop: "20px",
        }}
      >
        <div className="row">
          <div
            className="col-12 col-md-9"
            style={{ display: "flex", flexDirection: "column", gap: 10 }}
          >
            <MainProfile />
            <Esperienze />
            <Formazione />
            <Lingue />
            <Competenze />
          </div>
          <div className="col-3 d-none d-sm-block">
            <SideBar />
          </div>
        </div>

        <div>
          <Messaggi />
        </div>
        <Footer />
      </Container>
    </>
  );
}

export default App;
