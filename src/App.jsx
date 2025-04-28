import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListingPage from './pages/ProductListingPage';
import SignUp from './pages/SignUp';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginForm from './pages/LoginForm';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<ProductListingPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
