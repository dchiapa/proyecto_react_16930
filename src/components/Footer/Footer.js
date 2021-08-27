import React from "react";
import "./css/Footer.css";

export const Footer = () => {
  return (
    <footer>
      <p>
        &copy;{" "}
        <a
          href="https://diegochiapa.com.ar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Diego Chiapa
        </a>{" "}
        - 2021
      </p>
    </footer>
  );
};
