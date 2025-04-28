import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-around p-3 sticky top-0 w-full bg-black text-white z-50">
      <Link to="/login" className="font-bold text-2xl">LOGO</Link>
      <div className="flex gap-4"> 
        <Link to="/home">Shop</Link>
        <Link to="/login">Log In</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;
