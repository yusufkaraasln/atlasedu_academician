import React from "react";
import BottomBar from "../components/BottomBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUpRightFromSquare,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Search.module.css";

function Search() {
  const [search, setSearch] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (e) => {
    setSearch(e.target.value)
    
  };
  console.log(search);

  return (
    <div className={styles.container}>
      <div className={styles.search}>
      <div className={styles.searchContainer}>
        <div className={styles.inputContainer}>

                {
         search === "" &&  <FontAwesomeIcon color="#b0b3b8" icon={faSearch} />

                }

          <input
            onChange={(e) => handleChange(e)}
            placeholder="Akademisyenlerde Ara..."
            className={styles.searchInput}
            type="text"
            style={search !== "" ? {marginLeft: 0}: null }
            value={search}
             
          />
        </div>
      {
        (search !=="") &&   <FontAwesomeIcon
        color="#b0b3b8"
        style={{
          cursor: "pointer",
        }}
        onClick={()=>setSearch("")}
        icon={faXmark}
      />
      }
      </div>
      </div>

      <div className={styles.academician}>
        <img src="https://yt3.ggpht.com/yti/AJo0G0ndf-o7Q03FoWBOo8UnNLZzVeuHGsRDjWKv0IQqjQ=s108-c-k-c0x00ffffff-no-rj" className={styles.acdImg} alt="" />
        <div className={styles.acdInfo}>
            <h3 className={styles.acdName}>Dr. Öğr. Üyesi Recep DURANAY</h3>
            <p className={styles.acdTitle}>Bilgisayar Mühendisliği Bölüm Başkanı.</p>
            <p className={styles.acdDepartment}>Bilgisayar Mühendisliği Öğretim Üyesi</p>
        </div>
      </div>
       
    

        <BottomBar />
    </div>
  );
}

export default Search;
