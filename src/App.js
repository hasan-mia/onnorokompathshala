import { Routes, Route } from "react-router-dom";
import Dashboard from "./Backend/pages/Dashboard";
import Footers from './Frontend/components/Footers';
import Headers from './Frontend/components/Headers';
import Home from './Frontend/pages/Home';

function App() {
  return (
    <>
      <Headers></Headers>
      <Routes>
        {/* =================================
                    Frontend Routes
        ==================================*/}
        <Route path="/" element={<Home />} />


        {/* =================================
                    Backend Routes
        ==================================*/}
        <Route path="/admin" element={<Dashboard />}>
          <Route index element={<Dashboard></Dashboard>}></Route>
          {/* <Route path="profile" element={<Profile />} />  */}
        </Route>
      </Routes>
      <Footers></Footers>
    </>
  );
}

export default App;
