
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home"
import Favs from "./Routes/Favs"
import Detail from "./Routes/Detail"
import Layout from "./Layout/Layout";
import Contact from "./Routes/Contact"
import Form from "./Components/Form";
import { useDentistState } from "./Context/GlobalContext";


function App() {
  const { state } = useDentistState();

  return (
    <div className={`App ${state.theme ? "light" : "dark"}`}>
        <Routes>
        <Route path="/" element={ <Layout/>}> 
          <Route path="/" element= {<Home />} /> 
          <Route path="/favs" element= {<Favs />} /> 
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/contact" element= {<Contact />} /> 
        </Route>
        </Routes>
      </div>
  );
}

export default App;
