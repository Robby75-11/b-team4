import "./App.css";
import NavBar from "./assets/components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
function App() {
  return (
    <>
      <NavBar style={{ position: "sticky", top: 0, zIndex: 1000 }} />
    </>
  );
}

export default App;
