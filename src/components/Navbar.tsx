import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-20 px-6 py-6 bg-[#0C203B]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-4">
  <img
    src="/Logo.jpg"
    alt="StraightBooks Logo"
    className="h-12 w-auto rounded-lg shadow-lg"
  />
  <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent">
    StraightBooks
  </span>
</Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
        <Link to="/" className="text-slate-300 hover:text-amber-400 transition-colors font-medium">Home</Link>
        <Link to="/about" className="text-slate-300 hover:text-amber-400 transition-colors font-medium">About Us</Link>
          {/* <Link to="/services" className="text-slate-300 hover:text-amber-400 transition-colors font-medium">Services</Link> */}
          <Link to="/pricing" className="text-slate-300 hover:text-amber-400 transition-colors font-medium">Pricing</Link>
          <Link to="/contact" className="text-slate-300 hover:text-amber-400 transition-colors font-medium">Contact</Link>
        </div>

        {/* Contact + Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <a href="mailto:Contact@straightbooks.co.uk" className="hidden md:flex items-center space-x-2 text-sm text-slate-300 hover:text-amber-400">
            <Mail className="h-4 w-4" />
            <span>Contact@straightbooks.co.uk</span>
          </a>
          <a href="tel:+447398147870" className="hidden sm:flex items-center space-x-2 text-sm text-slate-300 hover:text-amber-400">
            <Phone className="h-4 w-4" />
            <span>+44 7398 147870</span>
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center backdrop-blur-sm border border-amber-500/20"
          >
            {isMenuOpen ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-t border-amber-500/20">
          <div className="px-6 py-6 space-y-4">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block w-full text-left text-slate-300 hover:text-amber-400 font-medium">Home</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block w-full text-left text-slate-300 hover:text-amber-400 font-medium">About Us</Link>
            {/* <Link to="/services" onClick={() => setIsMenuOpen(false)} className="block w-full text-left text-slate-300 hover:text-amber-400 font-medium">Services</Link> */}
            <Link to="/pricing" onClick={() => setIsMenuOpen(false)} className="block w-full text-left text-slate-300 hover:text-amber-400 font-medium">Pricing</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block w-full text-left text-slate-300 hover:text-amber-400 font-medium">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
