import { useState, useEffect } from 'react';
import { Menu, X, Car, Phone } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkBase = 'text-slate-200 hover:text-white transition-colors';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-black/40 border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 group">
            <span className="p-2 rounded-lg bg-gradient-to-br from-sky-500/30 to-cyan-400/30 ring-1 ring-white/10">
              <Car className="w-5 h-5 text-sky-300" />
            </span>
            <span className="text-white font-semibold tracking-wide group-hover:text-sky-200 transition-colors">NovaDrive</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className={linkBase}>Home</a>
            <a href="#listings" className={linkBase}>Cars</a>
            <a href="#about" className={linkBase}>About</a>
            <a href="#contact" className={`${linkBase} inline-flex items-center gap-2`}><Phone className="w-4 h-4"/> Contact</a>
          </nav>

          <button aria-label="Toggle menu" className="md:hidden text-white" onClick={() => setOpen(o => !o)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur-md">
          <div className="px-4 py-4 space-y-3">
            <a onClick={() => setOpen(false)} href="#home" className={linkBase}>Home</a>
            <a onClick={() => setOpen(false)} href="#listings" className={linkBase}>Cars</a>
            <a onClick={() => setOpen(false)} href="#about" className={linkBase}>About</a>
            <a onClick={() => setOpen(false)} href="#contact" className={linkBase}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
