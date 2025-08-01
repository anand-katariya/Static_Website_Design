"use client";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ name: string; email: string; message: string }>();

  const onSubmit = (data: { name: string; email: string; message: string }) => {
    console.log(data);
    // Add your form submission logic here
  };

  return (
    <section className="py-20 px-4 gradient-bg-5">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-coffee-dark mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-coffee-medium font-body max-w-3xl mx-auto">
            Have a question, feedback, or just want to say hello? We&apos;d love
            to hear from you! Stop by for a coffee or reach out online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-coffee-dark text-cream rounded-2xl p-8 shadow-xl"
          >
            <h2 className="text-3xl font-display font-bold mb-8">Visit Us</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-2xl">📍</div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-2">
                    Address
                  </h3>
                  <p className="text-coffee-light font-body">
                    123 Coffee Street
                    <br />
                    Downtown District, CA 90210
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl">📞</div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-2">Phone</h3>
                  <p className="text-coffee-light font-body">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl">✉️</div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-2">Email</h3>
                  <p className="text-coffee-light font-body">
                    hello@brewandbean.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl">🕒</div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-2">Hours</h3>
                  <div className="text-coffee-light font-body space-y-1">
                    <p>Monday - Friday: 7AM - 8PM</p>
                    <p>Saturday: 8AM - 9PM</p>
                    <p>Sunday: 8AM - 6PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-coffee-light/20">
              <h3 className="font-display font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-coffee-light hover:text-caramel transition-colors text-2xl"
                >
                  📱
                </a>
                <a
                  href="#"
                  className="text-coffee-light hover:text-caramel transition-colors text-2xl"
                >
                  📷
                </a>
                <a
                  href="#"
                  className="text-coffee-light hover:text-caramel transition-colors text-2xl"
                >
                  🐦
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-coffee/10"
          >
            <h2 className="text-3xl font-display font-bold text-coffee-dark mb-8">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-coffee-dark mb-2 font-body"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: true })}
                  className="w-full px-4 py-3 bg-cream text-coffee-dark rounded-lg focus:ring-2 focus:ring-caramel focus:outline-none transition-all font-body border border-coffee/20"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500 font-body">
                    Name is required
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-coffee-dark mb-2 font-body"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  className="w-full px-4 py-3 bg-cream text-coffee-dark rounded-lg focus:ring-2 focus:ring-caramel focus:outline-none transition-all font-body border border-coffee/20"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500 font-body">
                    Valid email is required
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-coffee-dark mb-2 font-body"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register("message", { required: true })}
                  className="w-full px-4 py-3 bg-cream text-coffee-dark rounded-lg focus:ring-2 focus:ring-caramel focus:outline-none transition-all font-body border border-coffee/20"
                  placeholder="Tell us what's on your mind..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500 font-body">
                    Message is required
                  </p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-coffee-dark hover:bg-coffee-medium text-cream font-body font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Map or Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-xl border border-coffee/10"
        >
          <h3 className="text-2xl font-display font-bold text-coffee-dark mb-6 text-center">
            Find Us
          </h3>
          <div className="aspect-video bg-cream rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-coffee-medium font-body">
                Interactive map coming soon!
                <br />
                We&apos;re located in the heart of Downtown District.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
