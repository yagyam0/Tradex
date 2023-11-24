import './App.css';
import Navbar from './Components/Navbar';
import { Suspense } from 'react';
import AllRoutes from './Routes/AllRoutes';
import Loader from './Components/Loader';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={<Loader />}>
          <AllRoutes />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
