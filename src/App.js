import './App.scss';
import Header from './components/Header';
import TableUser from './components/TableUser';
import Container from 'react-bootstrap/Container';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <Header />
      <Container>
        <TableUser />
      </Container>
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
      {/* Same as */ }
      <ToastContainer />
    </>
  );
}

export default App;
