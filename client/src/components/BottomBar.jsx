import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faHouse, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function BottomBar() {
  const darkMode = useSelector((state) => state.settings.darkMode);
  const Container = styled.div`
    position: fixed;
    bottom: 0;
    width: 90%;
    height: 50px;

    background-color: ${darkMode ? "#242526" : "#fff"};
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    margin: auto;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid ${darkMode ? "#393a3b" : "none"};
    border-left: 1px solid ${darkMode ? "#393a3b" : "none"};
    border-right: 1px solid ${darkMode ? "#393a3b" : "none"};
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

  `;

  const location = window.location.pathname;

  return (
    <Container>
      <Icon
        style={{
          backgroundColor: (location === "/") ? (darkMode ? "#3a3b3c" : "#fff") : (darkMode ? "#242526" : "#fff"),
        }}
      >
        <Link to={"/"}>
          <FontAwesomeIcon
            color={(location === "/") ? (darkMode ? "#fff": "#242526") : (darkMode ? "#b0b3b8": "#a3a3a3")}
            icon={faHouse}
          />
        </Link>
      </Icon>

      <Icon
        style={{
          backgroundColor: (location === "/search") ? (darkMode ? "#3a3b3c" : "#fff") : (darkMode ? "#242526" : "#fff"),
        }}
      >
        <Link to={"/search"}>
          <FontAwesomeIcon
            color={(location === "/search") ? (darkMode ? "#fff": "#242526") : (darkMode ? "#b0b3b8": "#a3a3a3")}
            
            icon={faSearch}
          />
        </Link>
      </Icon>
      <Icon
        style={{
          backgroundColor: (location === "/settings") ? (darkMode ? "#3a3b3c" : "#fff") : (darkMode ? "#242526" : "#fff"),

          color: location === "/settings" ? "#fff" : "#b0b3b8",
        }}
      >
        <Link to={"/settings"}>
          <FontAwesomeIcon
            color={(location === "/settings") ? (darkMode ? "#fff": "#242526") : (darkMode ? "#b0b3b8": "#a3a3a3")}

            icon={faGear}
          />
        </Link>
      </Icon>
    </Container>
  );
}

export default BottomBar;
