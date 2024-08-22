import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="font-poppins">
      <Link
        to="/"
        className={
          location.pathname === "/" ? "text-blue-500 " : "text-gray-400"
        }
      >
        Home <span className="breadcrumb-arrow">&gt;</span>&nbsp;
      </Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return (
          <Link
            key={to}
            to={to}
            className={
              location.pathname === to ? "text-blue-500" : "text-gray-400"
            }
          >
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </Link>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
