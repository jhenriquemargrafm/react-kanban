import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <span>Teste</span>
      <Link
        to={{ pathname: "https://jhenriquemargrafm.github.io" }}
        target="_blank"
      >Return to the portfolio
      </Link>
      <Link
        to={{ pathname: "https://github.com/jhenriquemargrafm/react-kanban" }}
        target="_blank"
      >Take a look at the github repository
      </Link>
    </div>
  );
}
