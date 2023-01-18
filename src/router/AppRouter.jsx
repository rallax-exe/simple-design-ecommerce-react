import { Navigate, Route, Routes } from 'react-router-dom';
import { BlogPage, ContactoPage, GaleriaPage, MainPage, NosotrosPage, TiendaPage } from '../pages';
import { Footer, Header, Navbar } from '../ui';


export const AppRouter = () => {
    return (
        <>
            <Header />
            <Navbar />

            <Routes>

                <Route path="/nosotros/*" element={<NosotrosPage />} />
                <Route path="/blog/*" element={<BlogPage />} />
                <Route path="/tienda/*" element={<TiendaPage />} />
                <Route path="/galeria/*" element={<GaleriaPage />} />
                <Route path="/contacto/*" element={<ContactoPage />} />
                <Route path="/*" element={<MainPage />} />
                <Route path="/*" element={<Navigate to="/mainPage" />} />

            </Routes>

            <Footer />
        </>
    )
}
