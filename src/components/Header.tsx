import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/contato', label: 'Contato' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="bg-secondary border-b-2 border-gold sticky top-0 z-40">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-2 w-32">
          <img
            src="/logo.png"
            alt="Celsão Auto Peças"
            className="h-12 w-auto object-contain"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.style.display = 'none';
              const span = document.createElement('span');
              span.textContent = 'Celsão';
              span.style.cssText = 'color:#e7c30b;font-weight:900;font-size:1.1rem;letter-spacing:-0.5px;';
              img.parentNode?.insertBefore(span, img.nextSibling);
            }}
          />
        </Link>

        <nav className="hidden md:flex flex-1 justify-center items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm uppercase tracking-wide transition-colors ${
                pathname === l.to
                  ? 'text-gold font-bold underline underline-offset-8 decoration-gold decoration-2'
                  : 'text-white/65 hover:text-white'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-secondary border-t border-gold/20 px-4 pb-4 flex flex-col gap-3">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`text-sm uppercase tracking-wide py-2 ${
                pathname === l.to ? 'text-gold font-bold' : 'text-white/65'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
