import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { isLoggedIn } from "../auth";

function CheckTokenExpiration() {
  useEffect(() => {
    if (isLoggedIn()) {
      const token = JSON.parse(localStorage.getItem("data")).token;
      const decodedToken = jwt_decode(token);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        // Token has expired, log out user
        localStorage.removeItem("data");
        <Navigate to={"/login"} />;
      }
    } else {
      // No token found, log out user
      <Navigate to={"/"} />;
    }
  }, []);

  return null;
}

export default CheckTokenExpiration;
