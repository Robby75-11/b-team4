import { Row, Col } from "react-bootstrap";

const Lingue = function () {
  return (
    <div
      className="border border-2 rounded-2 p-3 bg-white"
      style={{ borderColor: "#D2D2D2" }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <h1>Lingue</h1>
        <div>
          <Row className="d-flex align-items-center gap-2">
            <Col>
              <i
                className="bi bi-plus-lg text-black"
                onClick={() => console.log("Plus icon clicked")}
                style={{ cursor: "pointer" }}
              ></i>
            </Col>
            <Col>
              <i
                className="bi bi-pencil text-black"
                onClick={() => console.log("Pencil icon clicked")}
                style={{ cursor: "pointer" }}
              ></i>
            </Col>
          </Row>
        </div>
      </div>
      <div className=" border-bottom border-secondary">
        <div className="mt-3 lh-1">
          <p className="fw-bold">Francese</p>

          <p className="text-secondary">Conoscenza base</p>
        </div>
      </div>
      <div className=" border-bottom border-secondary">
        <div className="mt-3 lh-1">
          <p className="fw-bold">Inglese</p>

          <p className="text-secondary">Conoscenza professionale</p>
        </div>
      </div>
      <div>
        <div className="mt-3 lh-1">
          <p className="fw-bold">Italiano</p>

          <p className="text-secondary">Conoscenza Madrelingua</p>
        </div>
      </div>
    </div>
  );
};

export default Lingue;
