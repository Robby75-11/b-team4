import "./App.css";
import NavBar from "./assets/components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MainProfile from "./component/MainProfile";
import Formazione from "./component/Formazione";
function App() {
  return (
    <>
      <NavBar style={{ position: "sticky", top: 0, zIndex: 1000 }} />
      <MainProfile />
      <Formazione />
    </>
  );
}

export default App;
