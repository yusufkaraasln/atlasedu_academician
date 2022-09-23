import React from "react";
import BottomBar from "../components/BottomBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import styles from "./Settings.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage, setDarkMode } from "../redux/settingsReducer";
import lang from "../utils/language.json";

function Settings() {
  const theme = useSelector((state) => state.settings.darkMode);
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);
  const tr = lang.tr;
  const en = lang.en;
  const handleClick = (type) => {
    if (type === "TR") {
      dispatch(setLanguage(tr));
    } else {
      dispatch(setLanguage(en));
    }
  };
  const handleTheme = () => {
    dispatch(setDarkMode());
  };
  console.log(theme);

  return (
    <div
    className={styles.settings}
    style={{
      background: theme
        ? "#18191a"
        : "linear-gradient(to bottom, #ffdfdf, #dae8ff)",
    }}
    >
      <div className={styles.settingsContainer}>
        <div className={styles.settingsItem}>
          <span
            style={{
              color: theme ? "#fff" : "#000",
            }}
            className={styles.settingSpan}
          >
            {settings.language.darkMode}
          </span>
          <div className={styles.switchContainer}>
            {theme ? (
              <FontAwesomeIcon
                onClick={() => handleTheme(true)}
                color={theme ? "#fff" : "#000"}
                className={styles.switch}

                icon={faSun}
              />
            ) : (
              <FontAwesomeIcon
                icon={faMoon}
                color={theme ? "#fff" : "#000"}
                className={styles.switch}
                onClick={() => handleTheme(false)}
              />
            )}
          </div>
        </div>
        <div className={styles.settingsItem}>
          <span
            style={{
              color: theme ? "#fff" : "#000",
            }}
            className={styles.settingSpan}
          >
            {settings.language.lang}
          </span>
          <div className={styles.switchContainer}>
            <ul className={styles.langContainer}>
              <li>
                <button
                  onClick={() => handleClick("TR")}
                  style={
                    settings.language === tr
                    ? { color: theme ? "#fff" : "#4e4e4e" }
                    : { color: theme ? "#4e4e4e" : "#fff" }
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
                    settings.language === en
                    ? { color: theme ? "#fff" : "#4e4e4e" }
                    : { color: theme ? "#4e4e4e" : "#fff" }
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
