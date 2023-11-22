import HomePage from "./pages/home/home-page.jsx";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutPage from "./pages/about/about-page.jsx";
import ServicesPage from "./pages/services/services-page.jsx";
import GalleryPage from "./pages/gallery/gallery-page.jsx";
import BookPage from "./pages/book/book-page.jsx";
import PricingPage from "./pages/pricing/pricing-page.jsx";
import SuccessfullBooking from "./pages/process/successfull-booking.jsx";
import Gcash from "./pages/process/gcash.jsx";
import GcashNumber from "./pages/process/gcash-number.jsx";
import GcashCode from "./pages/process/gcash-code.jsx";

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
                <Route path="/pricing" element={<PricingPage />}/>
                <Route path="/successfull-booking" element={<SuccessfullBooking />}/>
                <Route path="/gcash" element={<Gcash />}/>
                <Route path="/gcash-number" element={<GcashNumber />}/>
                <Route path="/gcash-code" element={<GcashCode />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;