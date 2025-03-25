import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Manifesto } from "./pages/Manifesto/Manifesto";
import { Catalogue } from "./pages/Catalogue/Catalogue";
import { ProductDetail } from "./pages/ProductDetails/ProductDetails";
import { Store } from "./pages/Store/Store";
import { Newsletter } from "./pages/Newsletter/Newsletter";
import { Contact } from "./pages/Contact/Contact";
import './App.css'
import { CatalogueSlider } from "./pages/Catalogue/Catalogue-slider";


export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Manifesto />} />
                    <Route path="catalogue" element={<Catalogue />} />
                    <Route path="/catalogue/:id" element={<ProductDetail />} />
                    <Route path="catalogueslider" element={<CatalogueSlider />} />
                    <Route path="store" element={<Store />} />
                    <Route path="newsletter" element={<Newsletter />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
