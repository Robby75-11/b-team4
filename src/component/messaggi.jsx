import React, { useState } from "react";

const Messaggi = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const messages = [
    {
      id: 1,
      sender: "Gioia Saverino",
      type: "InMail",
      subject: "OPPORTUNITÀ LAVORATIVA_PROMOTER GDS",
      date: "Dec 4, 2024",
    },
  ];

  return (
    <div
      className={`position-fixed bottom-0 end-0 bg-white border rounded shadow ${
        isVisible ? "p-3" : "p-1"
      }`}
      style={{
        width: isVisible ? "400px" : "250px",
        height: isVisible ? "450px" : "50px",
        transition: "all 0.3s ease",
      }}
    >
      <div
        className="d-flex justify-content-between align-items-center bg-primary text-white p-2 rounded"
        onClick={toggleVisibility}
        style={{ cursor: "pointer" }}
      >
        <div className="d-flex align-items-center">
          <i className="bi bi-chat-dots me-2"></i>
          <h6 className="mb-0">Messaging</h6>
        </div>
        <i
          className={`bi ${isVisible ? "bi-chevron-down" : "bi-chevron-up"}`}
        ></i>
      </div>
      {isVisible && (
        <div className="mt-2">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Search messages"
          />
          <div className="overflow-auto" style={{ maxHeight: "800px" }}>
            {messages.map((message) => (
              <div
                key={message.id}
                className="d-flex align-items-center border-bottom py-2"
              >
                <div
                  className="rounded-circle bg-secondary text-white d-flex justify-content-center align-items-center me-3"
                  style={{ width: "40px", height: "40px" }}
                >
                  <i className="bi bi-person"></i>
                </div>
                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between">
                    <strong>{message.sender}</strong>
                    <small className="text-muted">{message.date}</small>
                  </div>
                  <div>
                    <span className="text-muted">{message.type}</span> -{" "}
                    <span>{message.subject}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Messaggi;
