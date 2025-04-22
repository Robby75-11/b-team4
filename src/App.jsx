import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./component/SideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <div className="main-content">
          <Routes></Routes>
        </div>

        {/* Sidebar a destra */}
        <div className="sider-area ">
          <SideBar />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
