"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-pretty-gradient w-full py-20 md:py-32 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-caramel rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-honey rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-20 h-20 bg-sage rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-16 h-16 bg-lavender rounded-full animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold text-coffee-dark mb-6 leading-tight">
            Welcome to <span className="text-caramel">Brew & Bean</span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate mb-10 font-body leading-relaxed"
          >
            Where every cup tells a story. Experience artisan coffee, fresh
            pastries, and warm conversations in our cozy corner of the world.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="btn-primary">View Our Menu</button>
            <button className="btn-outline">Book a Table</button>
          </motion.div>
        </motion.div>

        {/* Hero Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 flex justify-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
            {/* Coffee Cup Image */}
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="Artisan Coffee"
                className="w-full h-64 object-cover rounded-2xl shadow-coffee group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/40 to-transparent rounded-2xl group-hover:from-coffee-dark/30 transition-colors duration-300"></div>
              <div className="absolute bottom-4 left-4 text-cream">
                <h3 className="font-display font-bold text-lg">
                  Artisan Coffee
                </h3>
                <p className="font-body text-sm">Handcrafted with love</p>
              </div>
            </div>

            {/* Pastry Image */}
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Fresh Pastries"
                className="w-full h-64 object-cover rounded-2xl shadow-caramel group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/40 to-transparent rounded-2xl group-hover:from-coffee-dark/30 transition-colors duration-300"></div>
              <div className="absolute bottom-4 left-4 text-cream">
                <h3 className="font-display font-bold text-lg">
                  Fresh Pastries
                </h3>
                <p className="font-body text-sm">Baked daily</p>
              </div>
            </div>

            {/* Cafe Interior Image */}
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Cozy Atmosphere"
                className="w-full h-64 object-cover rounded-2xl shadow-rose-gold group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/40 to-transparent rounded-2xl group-hover:from-coffee-dark/30 transition-colors duration-300"></div>
              <div className="absolute bottom-4 left-4 text-cream">
                <h3 className="font-display font-bold text-lg">
                  Cozy Atmosphere
                </h3>
                <p className="font-body text-sm">Perfect for conversations</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-caramel rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">☕</span>
            </div>
            <h3 className="text-xl font-display font-bold text-coffee-dark mb-2">
              Fresh Roasted
            </h3>
            <p className="text-slate font-body">
              Our beans are roasted fresh every week
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌱</span>
            </div>
            <h3 className="text-xl font-display font-bold text-coffee-dark mb-2">
              Ethically Sourced
            </h3>
            <p className="text-slate font-body">
              Supporting sustainable coffee farming
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-rose-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">❤️</span>
            </div>
            <h3 className="text-xl font-display font-bold text-coffee-dark mb-2">
              Made with Love
            </h3>
            <p className="text-slate font-body">
              Every cup crafted with passion
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
