const Formazione = function () {
  return (
    <div
      className="border border-secondary rounded-2 p-3"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <h1>Formazione</h1>
      <div className="d-flex border-bottom border-secondary">
        <div>
          <img
            src="https://yt3.googleusercontent.com/AeGg_taSTyxxbIjZVOh3xHP72pThytyJeR7ml9goafJ1SWV2YVtifEnjDD6k-JoOY8UQo-Y6jQc=s900-c-k-c0x00ffffff-no-rj"
            style={{ height: "80px", width: "80px" }}
            className="me-3 mt-3"
          />
        </div>
        <div className="mt-3 lh-1">
          <p className="fw-bold">Università degli studi di Genova</p>
          <p>Laurea Magistrale, Neuroengineering and Neurotechnologies</p>
          <p className="text-secondary">set 2024</p>
          <div className="fw-bold mt-5 mb-4">
            <i className="bi bi-gem"></i> Matlab e Python
          </div>
        </div>
      </div>
      <div className="d-flex border-bottom border-secondary">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_OycgKJA4_iwlh1cnrMufGzfkHrjy6YRAYg&s"
            style={{ height: "80px", width: "80px" }}
            className="me-3 mt-3"
          />
        </div>
        <div className="mt-3 lh-1">
          <p className="fw-bold">Università degli studi di Padova</p>
          <p>Laurea Triennale, Ingegneria Biomedica</p>
          <p className="text-secondary">set 2020 - set 2024</p>
          <div className="fw-bold mt-5 mb-4">
            <i className="bi bi-gem"></i> Matlab
          </div>
        </div>
      </div>
      <div className="d-flex ">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuWBbL6RTm38tGO-SLuDDcM_rsLooU6jjM2g&s"
            style={{ height: "80px", width: "80px" }}
            className="me-3 mt-3"
          />
        </div>
        <div className="mt-3 lh-1">
          <p className="fw-bold">Liceo Scientifico Mariano IV</p>
          <p>Diploma</p>
          <p className="text-secondary">set 2015 - giu 2020</p>
        </div>
      </div>
    </div>
  );
};

export default Formazione;
