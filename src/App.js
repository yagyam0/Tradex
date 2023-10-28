import './App.css';
import Navbar from './Components/Navbar';
import { Suspense } from 'react';
import AllRoutes from './Routes/AllRoutes';
import Loader from './Components/Loader';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={<Loader />}>
          <AllRoutes />
      </Suspense>
    </div>
  );
}

export default App;
