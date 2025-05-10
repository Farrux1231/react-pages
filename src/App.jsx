import { Route, Routes } from "react-router-dom";
import "./index.css";
// Components
import HomePage from "./pages/home";
import AboutUsPage from "./pages/about-us";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import PricingPage from "./pages/pricing";
import WorkPage from "./pages/work";
import BlogPage from "./pages/Blog";
import ContactPage from "./pages/contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
