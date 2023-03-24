import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

import About from "./routes/About";
import Home from "./routes/Home";
import Nav from './components/Nev';
import RouterPropTest from "./routes/RouterPropTest";
import RouterPropTestResult from "./routes/RouterPropTestResult";

function App() {
  return (
    <>
<Router>
  <Nav/>
  <Routes>
  <Route path="/"  element={<Home/>}/>
  <Route path="/About" element={<About/>}/>
  <Route path="/routerproptest"  element={<RouterPropTest/>}/>
  <Route path="/routerproptestresult"  element={<RouterPropTestResult/>}/>
  </Routes>
</Router>
    </>
  );
}

export default App;
