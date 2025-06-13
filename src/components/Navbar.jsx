import { useState } from "react";

export const Navbar = ({ setCategory }) => {
  const [active, setActive] = useState("technology");

  const categories = [
    "technology",
    "business",
    "health",
    "sports",
    "entertainment",
    "science"
  ];

  const handleClick = (cat) => {
    setCategory(cat);
    setActive(cat);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 shadow">
      <div className="container-fluid d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between">
        
        <div>
          <a className="navbar-brand fw-bold fs-3" href="#">
            <span className="badge bg-light text-dark px-3 py-2 shadow-sm">Iso News</span>
          </a>
          <div className="ms-2 mt-1">
            <span
              className="badge rounded-pill bg-gradient text-light px-3 py-2"
              style={{
                background: "linear-gradient(135deg, #ff6a00, #ee0979)",
                fontSize: "0.85rem",
                fontWeight: "500",
                boxShadow: "0 0 10px rgba(255, 106, 0, 0.5)",
              }}
            >
              🚀 Developed by <strong>Santosh Kumar</strong>
            </span>
          </div>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse mt-3 mt-md-0" id="navbarNav">
          <ul className="navbar-nav ms-md-auto d-flex gap-2">
            {categories.map((cat) => (
              <li className="nav-item" key={cat}>
                <button
                  className={`btn btn-sm ${
                    active === cat ? "btn-danger" : "btn-outline-light"
                  } text-capitalize`}
                  onClick={() => handleClick(cat)}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
