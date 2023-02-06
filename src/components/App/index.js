import { Route, Routes, useLocation} from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Gallery from '../Gallery';
import ImagePage from '../ImagePage';
import '../../components/App/app.scss';
import { useEffect } from 'react';

function App() {

  const location = useLocation();
  useEffect(()=> {
    window.scrollTo({
      top:0,
      left:0,
      behavior:'smooth'
    });
  }, [location]);

  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route
          path="/"
          element={<Gallery />}
        />
        <Route
          path="/image/:slug"
          element={<ImagePage />}
        />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
