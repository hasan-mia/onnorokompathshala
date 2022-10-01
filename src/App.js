import { Routes, Route } from "react-router-dom";
import AddVideo from "./Backend/components/video/AddVideo";
import AllVideo from "./Backend/components/video/AllVideo";
// import AdminHome from "./Backend/components/AdminHome";
import Dashboard from "./Backend/Dashboard";
import Footers from './Frontend/components/Footers';
import Headers from './Frontend/components/Headers';
import Home from './Frontend/pages/Home';
import Signin from "./Auth/Signin";
import RequireAuth from "./Auth/RequireAuth";
import useVideos from "./Hooks/useVideos";
import { createContext} from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SigngleVideo from "./Frontend/components/SigngleVideo";
import EditVideo from "./Backend/components/video/EditVideo";
// video context
export const videoContext = createContext();

function App() {
  // all videos
  const {videos, isLoad, setIsLoad}=useVideos();
  return (
    <videoContext.Provider value={{videos, isLoad, setIsLoad}}>
      <Headers></Headers>
      <Routes>
        {/* =================================
                    Frontend Routes
        ==================================*/}
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<SigngleVideo />} />
        <Route path="/login" element={<Signin />} />


        {/* =================================
                    Backend Routes
        ==================================*/}
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<AllVideo/>}></Route>
          <Route path="video" element={<AllVideo />} /> 
          <Route path="add-video" element={<AddVideo />} />
          <Route path="edit-video/:id" element={<EditVideo />} /> 
        </Route>
      </Routes>
      <ToastContainer/>
      <Footers></Footers>
    </videoContext.Provider>
  );
}

export default App;



