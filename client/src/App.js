
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Settings from "./pages/Settings";
import Single from "./pages/Single";

function App() {
  // const [users,setUsers] = useState([]);

  // useEffect(() => {

  //   const getUsers = async (faculty) => {
  //     try {
  //       const { data } = await axios.get(
  //         "http://localhost:8080/api/academicians/faculty/"+faculty
  //       );
  //           setUsers(data)
  //           console.log(data.length);

  //     } catch (error) {}
  //   };

  //   getUsers("sbf")

  // }, []);
  const location = window.location.pathname;
  console.log(location);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/sir/:id" element={<Single/>}></Route>
        <Route path="/*" element={<ErrorPage/>} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
