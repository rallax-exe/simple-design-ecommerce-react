import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';



export const EcommerceApp = () => {
  return (
    <>

      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
      { /*
        <Header />
        <NavBar />

        <MainPage />
        
        <Footer />
      */}
    </>
  )
}
