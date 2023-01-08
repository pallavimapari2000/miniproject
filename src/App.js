
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { NavigationBar } from "./NavigationBar";
import { Login } from "./Login";
// import { newlogin } from "./Login";
import { Signin } from "./Signin";
import { Contacthere } from "./Contacthere";
import { FAQ } from "./FAQ";
import { Jio } from "./Jio";
import { Airtel } from "./Airtel";
import { Vi } from "./Vi";
import { Footer} from "./Footer";
// import { payment } from "./payment";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
      <>
        <BrowserRouter>
          <NavigationBar></NavigationBar>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/Signin" element={<Signin></Signin>}></Route>
            <Route path="/Login" element={<Login></Login>}></Route>
            {/* <Route path="/newlogin" element={<newlogin></newlogin>}></Route> */}
            <Route path="/Contacthere" element={<Contacthere></Contacthere>}></Route> 
            <Route path="/FAQ" element={<FAQ></FAQ>}></Route> 
           <Route path="/Jio" element={<Jio></Jio>}></Route> 
           <Route path="/Airtel" element={<Airtel></Airtel>}></Route> 
            <Route path="/Vi" element={<Vi></Vi>}></Route> 
            {/* <Route path="/payment" element={<payment></payment>}></Route>  */}

          </Routes>
           <Footer></Footer> 
        </BrowserRouter>
      </>    
  );
}

export default App;