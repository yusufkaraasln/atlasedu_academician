import axios from "axios";
import { useEffect, useState } from "react";
function App() {

  const [users,setUsers] = useState([]);

  useEffect(() => {


    const getUsers = async (faculty) => {
      try {
        const { data } = await axios.get(
          "http://localhost:8080/api/academicians/faculty/"+faculty
        );
            setUsers(data)


      } catch (error) {}
    };

    getUsers("dis")

  }, []);

  return <div className="App">

      {
        users.map(item=>(
          <div className="">
            <img style={{
              height: "100px",
              width: "100px",
              borderRadius: "50%"

            }} src={item.image} alt="" />
            <span>{item.name}</span>
          </div>

        ))
      }


  </div>;
}

export default App;
