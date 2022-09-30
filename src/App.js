import { Routes, Route } from "react-router-dom";
import AddVideo from "./Backend/components/video/AddVideo";
import AllVideo from "./Backend/components/video/AllVideo";
import AdminHome from "./Backend/components/AdminHome";
import Dashboard from "./Backend/Dashboard";
import Footers from './Frontend/components/Footers';
import Headers from './Frontend/components/Headers';
import Home from './Frontend/pages/Home';
import Signin from "./Auth/Signin";
import RequireAuth from "./Auth/RequireAuth";
import useVideos from "./Hooks/useVideos";
import { createContext} from "react";

export const videoContext = createContext();

function App() {
  const {videos}=useVideos();
  return (
    <videoContext.Provider>
      <Headers></Headers>
      <Routes>
        {/* =================================
                    Frontend Routes
        ==================================*/}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Signin />} />


        {/* =================================
                    Backend Routes
        ==================================*/}
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<AdminHome/>}></Route>
          <Route path="video" element={<AllVideo />} /> 
          <Route path="add-video" element={<AddVideo />} /> 
        </Route>
      </Routes>
      <Footers></Footers>
    </videoContext.Provider>
  );
}

export default App;



