import React, { useState } from "react";

function Navbar({ currentPage, setCurrentPage }) {
  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      {["Home", "About", "Contact"].map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          style={{
            marginRight: 10,
            fontWeight: currentPage === page ? "bold" : "normal",
            cursor: "pointer",
          }}
        >
          {page}
        </button>
      ))}
    </nav>
  );
}

function PageContent({ currentPage }) {
  let content = "";
  if (currentPage === "Home") content = "Welcome to Home";
  else if (currentPage === "About") content = "About Us";
  else if (currentPage === "Contact") content = "Contact Us";

  return (
    <div style={{ padding: 20 }}>
      <h1>{content}</h1>
    </div>
  );
}

export default function SPA() {
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <PageContent currentPage={currentPage} />
    </>
  );
}
