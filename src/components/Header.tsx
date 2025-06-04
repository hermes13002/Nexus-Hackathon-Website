import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-800 py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/Nexus_logo.png"
              alt="Nexus Logo"
              className="h-10 w-auto mr-2"
              style={{ maxHeight: 40 }}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {['about', 'why', 'timeline', 'testimonials', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className={`text-sm font-medium font-spacegrotesk transition-colors hover:text-white ${
                      isScrolled ? 'text-orange-500' : 'text-white'
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Register Button */}
          <a
            href="https://forms.gle/z258wJh7Vas1W3ZF9"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-orange-500 font-spacegrotesk hover:bg-orange-600 text-white px-5 py-2 rounded-full transition-colors shadow-md"
          >
            Register Your Team
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl focus:outline-none font-spacegrotesk"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-orange-500' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-orange-500' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg font-spacegrotesk shadow-lg p-4 absolute left-4 right-4 top-16">
            <ul className="space-y-3">
              {['about', 'why', 'timeline', 'testimonials', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left font-spacegrotesk text-gray-800 hover:text-orange-500 py-2 transition-colors"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </li>
              ))}
              <li>
                <div className="flex flex-col space-y-2">
                  <a
                    href="https://forms.gle/z258wJh7Vas1W3ZF9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center font-spacegrotesk bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full transition-colors"
                  >
                    Register Your Team
                  </a>
                  <a
                    href="https://drive.google.com/drive/folders/1RBu_yvnFR0QdVTZKPMxxtDJUC_XS2Tqd?usp=drive_link"
                    download
                    className="block w-full text-center font-spacegrotesk bg-white-500 hover:bg-white-600 text-orange-500 px-4 py-2 rounded-full transition-colors border border-orange-500"
                  >
                    Download Guide
                  </a>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;