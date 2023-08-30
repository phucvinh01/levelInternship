import './App.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Layout from './Layout/Layout';
import UserPage from './pages/UserPage';
import TodoPage from './pages/TodoPage';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="/todos" element={ <TodoPage /> } />
          <Route path="/table" element={ <UserPage /> } />
          <Route path="*" element={ <ErrorPage /> } />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={ 5000 }
        hideProgressBar={ false }
        newestOnTop={ false }
        closeOnClick
        rtl={ false }
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
