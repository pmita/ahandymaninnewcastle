//COMPONENTS
import Navbar from '../components/Navbar';
//LIBRARIES
import { Toaster } from 'react-hot-toast';
//STYLES  
import '../styles/App.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </>
  )
}

export default MyApp
