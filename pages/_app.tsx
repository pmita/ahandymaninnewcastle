//COMPONENTS
import Navbar from '../components/Navbar';
//STYLES  
import '../styles/App.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
