//COMPONENTS
import Navbar from '../components/Navbar';
//LIBRARIES
import { Toaster } from 'react-hot-toast';
//STYLES  
import '../styles/App.scss';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <Toaster />
    </>
  )
}

export default MyApp
