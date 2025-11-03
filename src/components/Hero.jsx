import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-black via-slate-900 to-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/sbnqZNZdJSLK7U2A/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white"
        >
          Drive Your Dream —
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-cyan-200 to-blue-400">Luxury Cars Await</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 max-w-2xl text-slate-200/90"
        >
          Explore a futuristic collection of performance vehicles with immersive 3D views,
          fluid interactions, and a premium shopping experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#listings" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-black bg-gradient-to-tr from-cyan-300 to-sky-400 shadow-lg shadow-sky-500/30 hover:shadow-sky-400/40 transition-transform hover:-translate-y-0.5">
            Browse Cars
          </a>
          <a href="#about" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-sky-200 ring-1 ring-white/20 hover:bg-white/5">
            About Us
          </a>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[120%] h-64 rounded-[50%] blur-3xl opacity-50 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.25),transparent_60%)]" />
    </section>
  );
}
