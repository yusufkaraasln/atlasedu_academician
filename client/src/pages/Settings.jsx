import React from "react";
import styled, { keyframes } from "styled-components";
import BottomBar from "../components/BottomBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Settings.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../redux/settingsReducer";
import lang from "../utils/language.json";

function Settings() {
  const [dark, setDark] = React.useState(false);
  
  const [language, setLang] = React.useState("TR");
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);
  const tr = lang.tr;
  const en = lang.en;
  const handleClick = (type) => {
    setLang(type);
    if (type === "TR") {
      dispatch(setLanguage(tr));
    } else {
      dispatch(setLanguage(en));
    }
  };

  return (
    <div className={styles.settings}>
      <div className={styles.settingsContainer}>
        <div className={styles.settingsItem}>
          <span className={styles.settingSpan}>
            {settings.language.darkMode}
          </span>
          <div className={styles.switchContainer}>
            {dark ? (
              <FontAwesomeIcon
                onClick={() => setDark(false)}
                className={styles.switch}
                icon={faSun}
              />
            ) : (
              <FontAwesomeIcon
                icon={faMoon}
                className={styles.switch}
                onClick={() => setDark(true)}
              />
            )}
          </div>
        </div>
        <div className={styles.settingsItem}>
          <span className={styles.settingSpan}>{settings.language.lang}</span>
          <div className={styles.switchContainer}>
            <ul className={styles.langContainer}>
              <li>
                <button
                  onClick={() => handleClick("TR")}
                  style={
                    language === "TR"
                      ? { color: "#fff" }
                      : {
                          color: "#4e4e4e",
                        }
                  }
                  className={styles.lang}
                >
                  TR
                </button>
              </li>
              <li>
                <span
                  style={{
                    color: "#b0b3b8",
                    lineHeight: "1.6rem",
                  }}
                >
                  |
                </span>
              </li>
              <li>
                <button
                  style={
                    language === "EN" ? { color: "#fff" } : { color: "#4e4e4e" }
                  }
                  onClick={() => handleClick("EN")}
                  className={styles.lang}
                >
                  EN
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <BottomBar />
    </div>
  );
}

export default Settings;
