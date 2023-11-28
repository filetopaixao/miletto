import './assets/styles/main.scss';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Home from "./components/screens/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />}>
                  {/*<Route path="quem-somos" element={<Blogs />} />*/}
                  {/*<Route path="contact" element={<Contact />} />*/}
                  {/*<Route path="*" element={<NoPage />} />*/}
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
