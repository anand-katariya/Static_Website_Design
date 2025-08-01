"use client";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "The Art of Coffee Brewing",
    excerpt:
      "Discover the secrets behind the perfect cup of coffee and learn about different brewing methods.",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    date: "December 15, 2024",
    category: "Coffee Guide",
  },
  {
    id: 2,
    title: "Our Journey to Sustainability",
    excerpt:
      "How we're making our cafe more eco-friendly and supporting ethical coffee farming.",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "December 10, 2024",
    category: "Sustainability",
  },
  {
    id: 3,
    title: "The Perfect Pastry Pairing",
    excerpt:
      "Learn which pastries complement different coffee flavors for the ultimate experience.",
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "December 5, 2024",
    category: "Food & Drink",
  },
  {
    id: 4,
    title: "Meet Our Baristas",
    excerpt:
      "Get to know the talented team behind every perfect cup of coffee at Brew & Bean.",
    image:
      "https://images.unsplash.com/photo-1561043433-9265f73e685f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "November 30, 2024",
    category: "Team",
  },
  {
    id: 5,
    title: "Seasonal Coffee Trends",
    excerpt:
      "Explore the latest coffee trends and seasonal drinks that are taking the world by storm.",
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "November 25, 2024",
    category: "Trends",
  },
  {
    id: 6,
    title: "Creating the Perfect Cafe Atmosphere",
    excerpt:
      "How we design our space to create the perfect environment for coffee lovers and conversation.",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "November 20, 2024",
    category: "Design",
  },
];

// Categories for future filtering functionality
// const categories = [
//   "All",
//   "Coffee Guide",
//   "Sustainability",
//   "Food & Drink",
//   "Team",
//   "Trends",
//   "Design",
// ];

export default function Blog() {
  return (
    <section className="py-20 px-4 gradient-bg-6">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-coffee-dark mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-coffee-medium font-body max-w-3xl mx-auto">
            Stories, tips, and insights from the world of coffee. Stay updated
            with the latest trends and learn more about our passion for great
            coffee.
          </p>
        </motion.div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-coffee-dark text-cream text-xs font-body font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-coffee-medium font-body mb-2">
                  {post.date}
                </div>
                <h3 className="text-xl font-display font-bold text-coffee-dark mb-3">
                  {post.title}
                </h3>
                <p className="text-coffee-medium font-body leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <button className="text-caramel font-body font-semibold hover:text-coffee-dark transition-colors">
                  Read More →
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-coffee-dark text-cream rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-display font-bold mb-4">
            📧 Stay Updated
          </h3>
          <p className="text-lg font-body mb-6">
            Subscribe to our newsletter for the latest coffee tips and cafe
            updates!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-cream text-coffee-dark rounded-lg focus:ring-2 focus:ring-caramel focus:outline-none font-body"
            />
            <button className="px-6 py-3 bg-caramel text-coffee-dark font-body font-semibold rounded-lg hover:bg-cream transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
