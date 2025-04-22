const Lingue = function () {
  return (
    <div className="border border-secondary rounded-2 p-3">
      <h1>Lingue</h1>
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
