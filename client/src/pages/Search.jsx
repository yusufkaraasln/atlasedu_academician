import React, { useEffect } from "react";
import BottomBar from "../components/BottomBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUpRightFromSquare,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Search.module.css";
import axios from "axios";
import { useSelector } from "react-redux";

function Search() {
  const darkMode = useSelector((state) => state.settings.darkMode);
  const [search, setSearch] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [results, setResults] = React.useState([]);
  const settings = useSelector((state) => state.settings);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  console.log(search);

  useEffect(() => {
    const searchAcdm = async () => {
      const res = await axios.get(`/search/?query=${search}`);
      setResults(res.data);
    };

    if (search.length > 2) {
      searchAcdm();
    }
  }, [search]);
  console.log(results);

  return (
    <div
      style={{
        background: darkMode
          ? "#18191a"
          : "linear-gradient(to bottom, #ffdfdf, #dae8ff)",
      }}
      className={styles.container}
    >
      <div
        style={{
          background: darkMode ? "#18191a" : "transparent",
        }}
      className={styles.search}>
        <div 
          style={{
            background: darkMode ? "#3a3b3c" : "#fff",
          }}
        className={styles.searchContainer}>
          <div className={styles.inputContainer}>
            {search === "" && (
              <FontAwesomeIcon color={
                darkMode ? "#b0b3b8" : "#242526"
              } icon={faSearch} />
            )}

            <input
              onChange={(e) => handleChange(e)}
              placeholder={settings.language.placeholder}
              className={styles.searchInput}
              type="text"
              style={search !== "" ? { marginLeft: 0 } : null}
              value={search}
            />
          </div>
          {search !== "" && (
            <FontAwesomeIcon
              color="#b0b3b8"
              style={{
                cursor: "pointer",
              }}
              onClick={() => setSearch("")}
              icon={faXmark}
            />
          )}
        </div>
      </div>

      {search.length > 2 &&
        results.length > 0 &&
        results.map((result, key) => (
          <div 
            style={{
              background: darkMode ? "#242526" : "#fff",
              border: !darkMode &&  "none",
            }}
          key={key} className={styles.academician}>
            <img src={result.image} className={styles.acdImg} alt="" />
            <div className={styles.acdInfo}>
              <h3
                style={{
                  color: darkMode ? "#fff" : "#888",
                }}
              className={styles.acdName}>{result.name}</h3>
              <p className={styles.acdTitle}>{result.info}</p>
              <p className={styles.acdDepartment}>{result.desc}</p>
            </div>
          </div>
        ))}

      <BottomBar />
    </div>
  );
}

export default Search;
