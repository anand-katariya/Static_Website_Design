"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    quote:
      "The best coffee I've ever had! The atmosphere is so cozy and the staff is incredibly friendly. I come here every morning for my daily dose of happiness.",
    name: "Sarah Johnson",
    role: "Regular Customer",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Amazing pastries and the coffee is absolutely divine. This place has become my go-to spot for meetings and casual hangouts. Highly recommended!",
    name: "Michael Chen",
    role: "Local Business Owner",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "The attention to detail in every cup is remarkable. You can taste the passion they put into their craft. The seasonal drinks are always a treat!",
    name: "Emma Rodriguez",
    role: "Coffee Enthusiast",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "Perfect spot for studying and working. The WiFi is fast, the coffee is excellent, and the background music creates the perfect ambiance.",
    name: "David Wilson",
    role: "Student",
    rating: 5,
  },
  {
    id: 5,
    quote:
      "I love how they source their beans ethically and support local farmers. The taste is incredible and I feel good about every purchase I make here.",
    name: "Lisa Thompson",
    role: "Environmental Advocate",
    rating: 5,
  },
];

export default function Testimonials() {
  useEffect(() => {
    // Initialize Swiper when component mounts
    import("swiper").then(() => {
      // Swiper is now available globally
    });
  }, []);

  return (
    <section className="py-20 px-4 gradient-bg-1">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-coffee-dark mb-4">
            What Our Customers Say
          </h2>
          <p className="text-coffee-medium font-body text-lg max-w-2xl mx-auto">
            Join hundreds of satisfied customers who make Brew & Bean their
            daily coffee destination
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <div className="bg-white rounded-xl shadow-lg p-6 transition-all hover:scale-[1.02] h-full flex flex-col border border-coffee/10">
                  {/* Rating Stars */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-caramel"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote Icon */}
                  <svg
                    className="w-8 h-8 text-caramel mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>

                  <p className="text-coffee-dark mb-6 flex-grow font-body leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  <div className="border-t border-coffee/10 pt-4">
                    <p className="font-display font-bold text-coffee-dark">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-coffee-medium font-body">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
