"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const menuCategories = [
  { id: "coffee", name: "Coffee & Espresso", icon: "☕", color: "coffee-dark" },
  { id: "tea", name: "Tea & Beverages", icon: "🫖", color: "sage" },
  { id: "food", name: "Food & Pastries", icon: "🥐", color: "honey" },
  { id: "desserts", name: "Desserts", icon: "🍰", color: "rose-gold" },
];

const menuItems = {
  coffee: [
    {
      id: 1,
      name: "Espresso",
      description: "Single shot of our signature blend",
      price: "$3.50",
      image:
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 2,
      name: "Cappuccino",
      description: "Espresso with steamed milk and milk foam",
      price: "$4.50",
      image:
        "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      name: "Latte",
      description: "Espresso with steamed milk and a light layer of foam",
      price: "$4.75",
      image:
        "https://images.unsplash.com/photo-1561043433-9265f73e685f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 4,
      name: "Americano",
      description: "Espresso with hot water",
      price: "$3.75",
      image:
        "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 5,
      name: "Mocha",
      description: "Espresso with chocolate and steamed milk",
      price: "$5.25",
      image:
        "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 6,
      name: "Flat White",
      description: "Espresso with velvety microfoam",
      price: "$4.75",
      image:
        "https://images.unsplash.com/photo-1561043433-9265f73e685f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  ],
  tea: [
    {
      id: 7,
      name: "Earl Grey",
      description: "Classic black tea with bergamot",
      price: "$3.50",
      image:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 8,
      name: "Chai Latte",
      description: "Spiced tea with steamed milk",
      price: "$4.75",
      image:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 9,
      name: "Green Tea",
      description: "Fresh and light Japanese sencha",
      price: "$3.25",
      image:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 10,
      name: "Hot Chocolate",
      description: "Rich Belgian chocolate with steamed milk",
      price: "$4.50",
      image:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  ],
  food: [
    {
      id: 11,
      name: "Croissant",
      description: "Buttery, flaky French pastry",
      price: "$3.75",
      image:
        "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 12,
      name: "Pain au Chocolat",
      description: "Chocolate-filled French pastry",
      price: "$4.25",
      image:
        "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 13,
      name: "Avocado Toast",
      description: "Sourdough with avocado, sea salt, and red pepper flakes",
      price: "$8.50",
      image:
        "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 14,
      name: "Breakfast Sandwich",
      description: "Egg, cheese, and bacon on brioche",
      price: "$9.75",
      image:
        "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 15,
      name: "Quiche Lorraine",
      description: "Classic French quiche with bacon and cheese",
      price: "$7.50",
      image:
        "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  ],
  desserts: [
    {
      id: 16,
      name: "Tiramisu",
      description: "Classic Italian dessert with coffee and mascarpone",
      price: "$6.50",
      image:
        "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 17,
      name: "Chocolate Cake",
      description: "Rich chocolate layer cake with ganache",
      price: "$5.75",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 18,
      name: "Cheesecake",
      description: "New York style with berry compote",
      price: "$6.25",
      image:
        "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 19,
      name: "Macarons",
      description: "Assorted French macarons (6 pieces)",
      price: "$8.50",
      image:
        "https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  ],
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("coffee");

  const getCategoryColor = (categoryId: string) => {
    const category = menuCategories.find((cat) => cat.id === categoryId);
    return category?.color || "coffee-dark";
  };

  const getCategoryButtonClass = (categoryId: string, isActive: boolean) => {
    if (isActive) {
      const colorMap: { [key: string]: string } = {
        coffee: "bg-coffee-dark text-cream",
        tea: "bg-sage text-cream",
        food: "bg-honey text-coffee-dark",
        desserts: "bg-rose-gold text-coffee-dark",
      };
      return `${colorMap[categoryId] || "bg-coffee-dark text-cream"} shadow-lg`;
    } else {
      return "bg-milk text-coffee-dark hover:bg-cappuccino border border-coffee-light/30 shadow-coffee";
    }
  };

  return (
    <section className="py-20 px-4 gradient-bg-3 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-rose-gold rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-20 w-32 h-32 bg-sage rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-24 h-24 bg-lavender rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-coffee-dark mb-6">
            Our <span className="text-caramel">Menu</span>
          </h1>
          <p className="text-xl text-slate font-body max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated selection of artisan coffee, fresh
            pastries, and delicious treats. Every item is crafted with passion
            and the finest ingredients.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-full font-body font-semibold transition-all duration-300 hover-lift ${getCategoryButtonClass(
                category.id,
                activeCategory === category.id
              )}`}
            >
              <span className="text-2xl">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {menuItems[activeCategory as keyof typeof menuItems].map(
            (item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-milk rounded-2xl shadow-coffee overflow-hidden hover-lift group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/40 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-cream/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-coffee-dark font-body font-bold text-sm">
                      {item.price}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-display font-bold text-coffee-dark">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-slate font-body leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-coffee-light/30">
                    <span className="text-lg font-body font-bold text-caramel">
                      {item.price}
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </motion.div>

        {/* Special Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center glass rounded-2xl p-8 border border-cream/50"
        >
          <h3 className="text-2xl font-display font-bold mb-4 text-coffee-dark">
            ✨ Daily Specials
          </h3>
          <p className="text-lg font-body mb-4 text-slate">
            Ask about our daily specials and seasonal offerings!
          </p>
          <p className="font-body text-coffee-medium">
            All our coffee beans are ethically sourced and freshly roasted
            in-house.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
