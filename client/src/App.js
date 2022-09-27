import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Settings from "./pages/Settings";
import Single from "./pages/Single";
import TopTen from "./pages/TopTen";
import { v4 as uuidv4 } from "uuid";
import "./styles/ScreenError.css"
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
  const anonId = localStorage.getItem("anonId");
  useEffect(() => {
    if (!anonId) {
      localStorage.setItem("anonId", uuidv4());
    }
  }, [anonId]);


  return (
    <Router>
 


      <div className="mobileview">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/sir/:id" element={<Single />}></Route>
        <Route path="/top/:type" element={<TopTen />}></Route>
        <Route path="/*" element={<ErrorPage />}></Route>
      </Routes>

      </div>

      <div className="mobileWarning">
        <h1 className="headerWarning">Üzgünüz </h1>
        <p className="contentWarning">
          Şuanda geliştirme aşamasında olduğundan Iphone 5 veya denk cihazlardan
          küçük çözünürlükteki kullanım ve laptop & masaüstü gibi büyük
          cihazlardaki kullanım henüz desteklenmemektedir. Anlayışınız için teşekkür
          ederiz ve desteklenen boyutlardaki mobil cihazlardan uygulamaya giriş yapmanızı tavsiye ederiz.
        </p>
      </div>




       
     
    </Router>
  );
}

export default App;
