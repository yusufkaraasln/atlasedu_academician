import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faHouse, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function BottomBar() {
  const Container = styled.div`
    position: fixed;
    bottom: 0;
    width: 90%;
    height: 50px;

    background-color: #242526;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    margin: auto;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #393a3b;
    border-left: 1px solid #393a3b;
    border-right: 1px solid #393a3b;
    z-index: 100;
    border-radius: 20px 20px 0 0;
  `;
  const Icon = styled.div`
    width: 30%;
    padding: 10px;
    gap: 10px;
    border-radius: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #b0b3b8;

    background-color: #3a3b3c;
  `;

  const location = window.location.pathname;
  console.log(location);

  return (
    <Container>
      <Icon
        style={{
          backgroundColor: location === "/" ? "#3a3b3c" : "#242526",
        }}
      >
        <Link to={"/"}>
          <FontAwesomeIcon
            color={location === "/" ? "#fff" : "#b0b3b8"}
            icon={faHouse}
          />
        </Link>
      </Icon>

      <Icon
        style={{
          backgroundColor: location === "/search" ? "#3a3b3c" : "#242526",
        }}
      >
        <Link to={"/search"}>
          <FontAwesomeIcon
            color={location === "/search" ? "#fff" : "#b0b3b8"}
            icon={faSearch}
          />
        </Link>
      </Icon>
      <Icon
        style={{
          backgroundColor: location === "/settings" ? "#3a3b3c" : "#242526",
          color: location === "/settings" ? "#fff" : "#b0b3b8",
        }}
      >
        <Link to={"/settings"}>
          <FontAwesomeIcon
            color={location === "/settings" ? "#fff" : "#b0b3b8"}
            icon={faGear}
          />
        </Link>
      </Icon>
    </Container>
  );
}

export default BottomBar;
