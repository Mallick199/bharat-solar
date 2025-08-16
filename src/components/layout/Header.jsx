import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Zap, Leaf, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '../../pages/solor/solar-energy_8820867.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/products-services' },
  { name: 'Technology', path: '/how-it-works' },
  { name: 'Projects', path: '/gallery' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/90 py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img 
                src={logo} 
                alt="Bharat Solar Solution Logo" 
                className={`h-12 w-12 object-contain transition-transform duration-300 group-hover:rotate-12 ${
                  isScrolled ? 'h-10 w-10' : 'h-12 w-12'
                }`}
              />
              {/* <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -bottom-1 -right-1 bg-yellow-400 rounded-full p-1"
              >
                <Zap className="h-3 w-3 text-white" />
              </motion.div> */}
            </div>
            
            <div className="flex flex-col">
            <motion.span 
  className={`font-bold tracking-tight ${
    isScrolled ? 'text-2xl' : 'text-3xl'
  }`}
>
<span className="relative inline-block overflow-hidden">
  <motion.div className="relative">
    {/* Container for animated letters */}
    <div className="flex">
      {"BHARAT SOLAR SOLUTION".split("").map((letter, index) => (
        <motion.span
          key={index}
          className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-amber-200 to-green-600"
          initial={{ 
            y: -20, 
            opacity: 0,
            backgroundPosition: '0% 50%'
          }}
          animate={{ 
            y: 0, 
            opacity: 1,
            backgroundPosition: '100% 50%'
          }}
          transition={{
            y: {
              duration: 0.3,
              delay: index * 0.1,
              ease: "backOut"
            },
            opacity: {
              duration: 0.4,
              delay: index * 0.1,
              ease: "circOut"
            },
            backgroundPosition: {
              duration: 6,
              repeat: Infinity,
              ease: "linear",
              delay: index * 0.02
            }
          }}
          style={{
            backgroundSize: '200% 200%',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)',
            fontSize: '22px',
            fontWeight: 'bold',
            WebkitTextFillColor: 'transparent',
            WebkitBackgroundClip: 'text'
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </div>

    {/* Shining overlay effect - now applied to each letter */}
    <div className="flex absolute inset-0 pointer-events-none">
      {"BHARAT SOLAR SOLUTION".split("").map((letter, index) => (
        <motion.span
          key={index}
          className="bg-gradient-to-r from-transparent via-white/50 to-transparent bg-clip-text text-transparent"
          initial={{ 
            x: '-100%',
            opacity: 0
          }}
          animate={{ 
            x: ['-100%', '100%'],
            opacity: [0, 0.7, 0]
          }}
          transition={{
            x: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1 + index * 0.05
            },
            opacity: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1 + index * 0.05
            }
          }}
          style={{
            backgroundSize: '200% 200%',
            fontSize: '20px',
            WebkitTextFillColor: 'transparent',
            WebkitBackgroundClip: 'text'
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </div>
  </motion.div>
    
  {/* Ashoka Chakra effect (blue wheel) */}
  <motion.span 
    className="absolute -right-6 top-1/2 -translate-y-1/2"
    animate={{
      rotate: 360
    }}
    transition={{
      duration: 16,
      repeat: Infinity,
      ease: "linear"
    }}
  >
    <svg 
      width={isScrolled ? 16 : 20} 
      height={isScrolled ? 16 : 20} 
      viewBox="0 0 24 24"
      className="text-blue-600"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
      {[...Array(24)].map((_, i) => (
        <line 
          key={i}
          x1="12" 
          y1="2" 
          x2="12" 
          y2="4" 
          stroke="currentColor" 
          strokeWidth="1"
          transform={`rotate(${i * 15} 12 12)`}
        />
      ))}
    </svg>
  </motion.span>
</span>
</motion.span>
              
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  location.pathname === link.path 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.span 
                    layoutId="nav-underline"
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
            
            {/* <div className="ml-4">
              <Link to="/quote-request">
                <Button 
                  variant="default" 
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-md hover:shadow-lg transition-all"
                >
                  <Zap className="mr-2 h-4 w-4" /> Free Consultation
                </Button>
              </Link>
            </div> */}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:bg-gray-100 rounded-full"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <nav className="flex flex-col space-y-2 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={toggleMobileMenu}
                    className={`px-4 py-3 text-base font-medium rounded-lg ${
                      location.pathname === link.path 
                        ? 'bg-blue-50 text-blue-600' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-2">
                  <Link to="/quote-request" onClick={toggleMobileMenu}>
                    <Button 
                      variant="default" 
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
                    >
                      <Zap className="mr-2 h-4 w-4" /> Free Consultation
                    </Button>
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;