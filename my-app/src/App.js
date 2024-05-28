import './App.css';
import Home from './components/LandingPage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import CamHoa from './components/CamHoa';
import Hoihoa from './components/Hoihoa';
import ThuCong from './components/ThuCong';
import LamBanh from './components/LamBanh';
import Other from './components/Other';
import CreateEvent from './components/CreateEvent';
// import Workshopdetail from './components/Workshopdetail';
import Homepage from './components/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from "./Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import WorkshopList from "./components/WorkshopList";
import Detail from "./components/Detail";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/camhoa" element={<CamHoa />} />
          <Route path="/hoihoa" element={<Hoihoa />} />
          <Route path="/thucong" element={<ThuCong />} />
          <Route path="/lambanh" element={<LamBanh />} />
          <Route path="/Other" element={<Other />} />
          <Route path="/event" element={<CreateEvent />} />
          {/* <Route path="/detail" element={<Workshopdetail />} /> */}

          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/test" element={<WorkshopList />} />








        </Routes>
      </div>
    </BrowserRouter>
  );
}



