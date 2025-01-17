import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage.js';
import BookNowPage from './pages/BookNowPage.js';
import Contact from './pages/ContactForm';
// Uncomment and import additional components if needed
// import Login from './pages/LoginForm.js';
import LoginA from './pages/LoginForm_A.js';
import LoginU from './pages/LoginForm_U .js';
// import LoginUser from './pages/LoginUser.js';
import RegistrationForm from './pages/RegistrationForm.js';
// import RegisterUser from './pages/RegisterUser.js';
import Payment from './pages/Payment.js';

function App() {
  return (
    <Router>
      <>
        <Navbar /> {/* Include Navbar */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book" element={<BookNowPage />} />
          <Route Path ="/payment" element ={<Payment />} />
          <Route path="/contact" element={<Contact />} />
         
          <Route path="/loginA" element={<LoginA />} />
          <Route path="/loginU" element={<LoginU />} />
          {/* <Route path="/login" element={<Login />} /> */}
          {/* Uncomment these routes as needed */}
          
          <Route path="/RegistrationForm" element={<RegistrationForm />} />
          {/* <Route path="/registermaid" element={<RegisterMaid />} /> */}
        </Routes>
        <Footer /> 
        
      </>
    </Router>
  );
}

export default App;
