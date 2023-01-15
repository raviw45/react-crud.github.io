import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './components/Home';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
        <Routes >
              <Route path='/login' element={<Login />}  />
              <Route path='/' element={<Home />}  />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
