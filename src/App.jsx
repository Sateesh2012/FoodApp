import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Scuccess from "./Pages/Scuccess";
import Error from "./Pages/Error";
import ProtectedRoute from "./Comonent/ProtectedRoute";


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/success" element={<ProtectedRoute element={<Scuccess />} />} />
      <Route path="/*" element={<Error />} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App