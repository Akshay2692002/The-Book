import React from "react";
// import GithubLogo from "./img/Github.svg";
import "../src/sass/style.css";

const Header = () => {
  return (
    <>
      <div>
        <strong>
          <h2
            className="heading-name"
            style={{
              background: "none",
              // borderRadius: "1rem",
              marginBottom: 50,
              // color: "#333",
              color:' white',
              textAlign: "center",
              // fontWeight: "bold", //No need of bold because headings are itself bold
              fontFamily: "Scheherazade New",
              textShadow: "5px 5px 5px black",
            }}
          >
             Book Library for all Book Lovers
          </h2>
        </strong>
      </div>
    </>
  );
};

export default Header;
