import React from "react";
import Nav from "../components/nav/Nav";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, 2000);
  }, []);
  return (
    <>
      <Nav />
      <div>
        <h1>404</h1>
        <h1>Page Not Found</h1>
      </div>
    </>
  );
}

export default NotFound;
