import HomePage from "./pages/home/home-page.jsx";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutPage from "./pages/about/about-page.jsx";
import ServicesPage from "./pages/services/services-page.jsx";
import GalleryPage from "./pages/gallery/gallery-page.jsx";
import BookPage from "./pages/book/book-page.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />}/>
                <Route path="/home" element={<HomePage />}/>
                <Route path="/about" element={<AboutPage />}/>
                <Route path="/services" element={<ServicesPage />}/>
                <Route path="/gallery" element={<GalleryPage />}/>
                <Route path="/book" element={<BookPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;