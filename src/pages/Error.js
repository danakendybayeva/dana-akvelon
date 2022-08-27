import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Error() {
  // This page is for Not Found pages, with useNavigate we can move back to Home page
  const navigate = useNavigate();

  function goHome(e) {
    e.preventDefault();
    navigate("/");
  }
  return (
    <div>
      <Header />
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center">
          <h1 className="display-1 fw-bold">404</h1>
          <p className="fs-3">
            {" "}
            <span className="text-danger">Opps!</span> Page not found.
          </p>
          <p className="lead">The page you’re looking for doesn’t exist.</p>
          <a href="index.html" className="btn btn-primary" onClick={goHome}>
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default Error;
