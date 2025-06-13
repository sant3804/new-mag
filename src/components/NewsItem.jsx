export const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card text-light bg-gradient mb-4 mx-2 shadow-sm"
      style={{
        width: "22rem",
        minHeight: "500px",
        borderRadius: "15px",
        overflow: "hidden",
        backgroundColor: "#1e1e2f"
      }}
    >
      <img
        src={src || "https://via.placeholder.com/350x200?text=No+Image"}
        className="card-img-top"
        alt={title || "News"}
        style={{
          height: "200px",
          objectFit: "cover"
        }}
      />
      <div className="card-body d-flex flex-column px-3 py-3">
        <h5 className="card-title fw-bold mb-2">
          {title ? title.slice(0, 60) + "..." : "Untitled News"}
        </h5>
        <p className="card-text mb-3" style={{ fontSize: "1.0rem", color: "#ccc", flex: "0 1 auto" }}>
          {description
            ? description.slice(0, 100) + "..."
            : "No description available."}
        </p>
        <div className="mt-auto">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary fw-semibold w-100"
          >
            Read More →
          </a>
        </div>
      </div>
    </div>
  );
};
