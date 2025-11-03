import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gauge, Sparkles, X } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const CARS = [
  {
    id: 'nx-9',
    name: 'Apex NX-9',
    price: 129000,
    year: 2025,
    features: ['AWD', '0-60mph in 2.9s', 'Autopilot+'],
    color: 'Electric Blue',
  },
  {
    id: 'valor-gt',
    name: 'Valor GT',
    price: 98000,
    year: 2024,
    features: ['Twin Turbo', 'Carbon Package', 'Adaptive Aero'],
    color: 'Graphite Black',
  },
  {
    id: 'seraph-x',
    name: 'Seraph X',
    price: 147500,
    year: 2025,
    features: ['Hybrid Performance', 'AR HUD', 'Laser Matrix'],
    color: 'Liquid Silver',
  },
  {
    id: 'ion-r',
    name: 'ION R',
    price: 76000,
    year: 2024,
    features: ['800V Fast Charge', 'Track Mode', 'Mag-Ride'],
    color: 'Midnight',
  },
];

function formatPrice(n) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n);
}

export default function CarListings() {
  const [activeId, setActiveId] = useState(null);
  const cars = useMemo(() => CARS, []);

  return (
    <section id="listings" className="relative py-24 bg-gradient-to-b from-black to-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(80%_60%_at_50%_0%,rgba(59,130,246,0.12),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Available Models</h2>
            <p className="mt-2 text-slate-300">Interact with 3D previews and discover specifications.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cars.map((car, idx) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-slate-900/80 to-black shadow-xl hover:shadow-sky-500/10"
            >
              <div className="relative h-40 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 via-cyan-400/10 to-transparent" />
                <div className="absolute right-3 top-3 text-sky-200/90">
                  <Gauge className="w-5 h-5" />
                </div>
                <div className="absolute bottom-2 left-2 text-xs text-sky-100/80 inline-flex items-center gap-1">
                  <Sparkles className="w-4 h-4" /> 3D Preview
                </div>
                <div className="h-full w-full bg-[conic-gradient(at_30%_60%,#67e8f9_0deg,#60a5fa_120deg,#0ea5e9_240deg,#67e8f9_360deg)] opacity-30 group-hover:opacity-40 transition-opacity" />
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold tracking-wide">{car.name}</h3>
                  <span className="text-sky-300 text-sm">{car.year}</span>
                </div>
                <p className="mt-1 text-sky-200 font-semibold">{formatPrice(car.price)}</p>
                <ul className="mt-3 text-sm text-slate-300 space-y-1 min-h-[60px]">
                  {car.features.map((f) => (
                    <li key={f} className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />{f}</li>
                  ))}
                </ul>
                <div className="mt-5 flex gap-3">
                  <button
                    onClick={() => setActiveId(car.id)}
                    className="flex-1 rounded-lg px-4 py-2.5 text-sm font-medium text-black bg-gradient-to-tr from-cyan-300 to-sky-400 shadow shadow-sky-500/30 hover:shadow-sky-400/40"
                  >
                    View in 3D
                  </button>
                  <a href="#contact" className="rounded-lg px-4 py-2.5 text-sm font-medium text-sky-200 ring-1 ring-white/10 hover:bg-white/5">Contact</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeId && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 120, damping: 18 }}
              className="relative w-full max-w-5xl h-[70vh] rounded-2xl overflow-hidden border border-white/10 bg-black"
            >
              <button
                aria-label="Close"
                onClick={() => setActiveId(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-black/60 text-white/90 hover:text-white ring-1 ring-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute inset-0">
                <Spline scene="https://prod.spline.design/sbnqZNZdJSLK7U2A/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5 pointer-events-none">
                <div className="max-w-3xl text-slate-200">
                  <h4 className="text-white font-semibold">Interactive 3D Preview</h4>
                  <p className="text-sm opacity-90">Drag to rotate and explore. This is an optimized live 3D scene to demonstrate the viewing experience.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
