import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />}>Home</Route>
          <Route path='/resume' element={<Resume />}>Resume</Route>
          <Route path='/contact' element={<Contact />}>Conatct</Route>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}


export default App;
