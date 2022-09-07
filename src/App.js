import TopBar from "./Components/topbar/TopBar";
import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import Settings from "./Pages/settings/Settings";
import Single from "./Pages/single/Single";
import Write from "./Pages/write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const user = true;

  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/register' element={ user ? <Home/> : <Register/>} />
        <Route path='/login' element={ user ? <Home/> : <Login/>} />
        <Route path='/post/:postid' element={<Single/>} />
        <Route path='/write' element={ user ? <Write/> : <Register/>} />
        <Route path='/settings' element={ user ? <Settings/> : <Register />} />
      </Routes>
    </Router>
  );
}

export default App;
