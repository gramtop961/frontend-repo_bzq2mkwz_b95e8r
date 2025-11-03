import { motion } from 'framer-motion';
import { Building2, MapPin, Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

export default function InfoSection() {
  return (
    <div className="relative bg-gradient-to-b from-slate-950 to-black">
      <section id="about" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white">About NovaDrive</h2>
            <p className="mt-4 text-slate-300">
              Since 2012, we have curated a selection of high-performance vehicles for enthusiasts and everyday drivers alike.
              Our mission is to deliver a seamless, premium experience powered by cutting-edge technology and transparent service.
            </p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {[
                { k: '2012', v: 'Founded' },
                { k: '2.5k+', v: 'Cars Sold' },
                { k: '4.9★', v: 'Customer Rating' },
              ].map((i) => (
                <div key={i.k} className="rounded-xl p-4 bg-white/5 ring-1 ring-white/10">
                  <div className="text-sky-300 text-xl font-semibold">{i.k}</div>
                  <div className="text-slate-300 text-sm">{i.v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative rounded-2xl p-8 bg-gradient-to-br from-slate-900 to-black ring-1 ring-white/10 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-60 h-60 rounded-full blur-3xl opacity-40 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.5),transparent_60%)]" />
            <div className="flex items-start gap-4">
              <span className="p-2 rounded-lg bg-white/10 ring-1 ring-white/10"><Building2 className="w-6 h-6 text-sky-300"/></span>
              <div>
                <h3 className="text-white font-semibold">Our Vision</h3>
                <p className="mt-2 text-slate-300 text-sm">We believe shopping for your next car should be inspiring and effortless. That’s why we blend design, performance, and immersive 3D to let you experience vehicles before you drive them.</p>
              </div>
            </div>

            <ol className="mt-6 space-y-4 text-slate-300 text-sm">
              <li className="flex gap-3"><span className="text-sky-300">—</span> 2012: Showroom debut with 30 handpicked models</li>
              <li className="flex gap-3"><span className="text-sky-300">—</span> 2017: Introduced on-site performance lab</li>
              <li className="flex gap-3"><span className="text-sky-300">—</span> 2023: Pioneered immersive 3D experiences</li>
            </ol>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl p-8 bg-gradient-to-br from-slate-900 to-black ring-1 ring-white/10">
            <h3 className="text-white text-2xl font-semibold">Contact Us</h3>
            <p className="text-slate-300 mt-2">Have questions or want to book a test drive? Send us a message and our team will reach out shortly.</p>
            <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="col-span-1 rounded-lg bg-white/5 ring-1 ring-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-sky-400/40" placeholder="Name" />
              <input type="email" className="col-span-1 rounded-lg bg-white/5 ring-1 ring-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-sky-400/40" placeholder="Email" />
              <input className="col-span-1 rounded-lg bg-white/5 ring-1 ring-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-sky-400/40" placeholder="Phone" />
              <input className="col-span-1 rounded-lg bg-white/5 ring-1 ring-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-sky-400/40" placeholder="Preferred Model" />
              <textarea rows={4} className="col-span-1 sm:col-span-2 rounded-lg bg-white/5 ring-1 ring-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-sky-400/40" placeholder="Message" />
              <button type="button" className="sm:col-span-2 justify-self-start rounded-lg px-5 py-3 text-sm font-medium text-black bg-gradient-to-tr from-cyan-300 to-sky-400 shadow shadow-sky-500/30 hover:shadow-sky-400/40">Send Message</button>
            </form>
            <div className="mt-6 grid sm:grid-cols-2 gap-4 text-slate-300 text-sm">
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-sky-300"/> 88 Skyline Ave, Neo City</div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-sky-300"/> hello@novadrive.io</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-sky-300"/> (555) 012-3456</div>
            </div>
            <div className="mt-6 flex gap-3">
              <a className="p-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-sky-200" href="#" aria-label="Instagram"><Instagram className="w-5 h-5"/></a>
              <a className="p-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-sky-200" href="#" aria-label="Facebook"><Facebook className="w-5 h-5"/></a>
              <a className="p-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-sky-200" href="#" aria-label="Twitter"><Twitter className="w-5 h-5"/></a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative min-h-[360px] rounded-2xl overflow-hidden ring-1 ring-white/10">
            <iframe
              title="Map"
              className="absolute inset-0 w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019271219955!2d-122.4194151846812!3d37.77492977975916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCity!5e0!3m2!1sen!2sus!4v1610000000000"
              allowFullScreen
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 text-slate-400 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} NovaDrive. All rights reserved.</div>
          <nav className="flex items-center gap-6">
            <a href="#home" className="hover:text-slate-200">Home</a>
            <a href="#listings" className="hover:text-slate-200">Cars</a>
            <a href="#about" className="hover:text-slate-200">About</a>
            <a href="#contact" className="hover:text-slate-200">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
