"use client";
import { motion } from "framer-motion";

export default function About() {
  const features = [
    {
      icon: "☕",
      title: "Artisan Coffee",
      description: "Handcrafted with premium beans from around the world",
    },
    {
      icon: "🥐",
      title: "Fresh Pastries",
      description:
        "Baked daily with traditional recipes and quality ingredients",
    },
    {
      icon: "🌱",
      title: "Ethically Sourced",
      description: "Supporting sustainable farming and fair trade practices",
    },
    {
      icon: "🏠",
      title: "Cozy Atmosphere",
      description: "A warm, welcoming space perfect for work and relaxation",
    },
  ];

  return (
    <section className="gradient-bg-2 py-20 px-4">
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
            Our Story
          </h1>
          <p className="text-xl text-coffee-medium font-body max-w-3xl mx-auto">
            From a simple dream of creating the perfect cup of coffee to
            becoming your favorite neighborhood cafe, our journey has been
            filled with passion, dedication, and lots of love for great coffee.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Brew & Bean Cafe Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-coffee-dark/20"></div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-coffee-dark mb-6">
              Where Every Cup Tells a Story
            </h2>
            <p className="text-lg text-coffee-medium font-body mb-8 leading-relaxed">
              Founded in 2020, Brew & Bean began as a small coffee cart with big
              dreams. What started as a passion project has grown into a beloved
              community hub where friends gather, ideas flourish, and memories
              are made over the perfect cup of coffee.
            </p>

            <p className="text-lg text-coffee-medium font-body mb-8 leading-relaxed">
              We believe that great coffee is more than just a drink—it&apos;s
              an experience. That&apos;s why we source the finest beans, train
              our baristas to perfection, and create a space where everyone
              feels welcome and inspired.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-white/70 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border border-coffee/10"
                >
                  <div className="text-2xl">{feature.icon}</div>
                  <div>
                    <h3 className="font-display font-bold text-coffee-dark mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-coffee-medium font-body text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-display font-bold text-coffee-dark mb-12">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-coffee/10">
              <div className="text-4xl mb-4">💚</div>
              <h4 className="text-xl font-display font-bold text-coffee-dark mb-3">
                Sustainability
              </h4>
              <p className="text-coffee-medium font-body">
                We&apos;re committed to reducing our environmental impact
                through eco-friendly practices and sustainable sourcing.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-coffee/10">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="text-xl font-display font-bold text-coffee-dark mb-3">
                Community
              </h4>
              <p className="text-coffee-medium font-body">
                Building meaningful connections and supporting our local
                community through partnerships and events.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-coffee/10">
              <div className="text-4xl mb-4">✨</div>
              <h4 className="text-xl font-display font-bold text-coffee-dark mb-3">
                Quality
              </h4>
              <p className="text-coffee-medium font-body">
                Every cup, every pastry, every interaction is crafted with
                attention to detail and uncompromising standards.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
