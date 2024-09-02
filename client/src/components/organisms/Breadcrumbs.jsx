import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="font-poppins lg:px-0 md:px-12 px-4">
      <Link
        to="/"
        className={
          location.pathname === "/" ? "text-blue-500" : "text-gray-400"
        }
      >
        Home <span className="breadcrumb-arrow">&gt;</span>&nbsp;
      </Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const displayValue =
          index === 0 ? value.charAt(0).toUpperCase() + value.slice(1) : value;

        return (
          <React.Fragment key={to}>
            <Link
              to={to}
              className={
                location.pathname === to ? "text-blue-500" : "text-gray-400"
              }
            >
              {displayValue}
            </Link>
            {index < pathnames.length - 1 && (
              <span className="breadcrumb-arrow">&nbsp;&gt;&nbsp;</span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
