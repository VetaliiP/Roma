import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Catalogue } from "./pages/Catalogue/Catalogue";
import { ProductDetail } from "./pages/ProductDetails/ProductDetails";
import { Contact } from "./pages/Contact/Contact";
import './App.css'



export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="catalogue" element={<Catalogue />} />
                    <Route path="/catalogue/:id" element={<ProductDetail />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
