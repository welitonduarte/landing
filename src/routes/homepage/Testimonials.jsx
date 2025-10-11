import { motion } from "framer-motion";
import "./../../css/sections/homepage/Testimonials.css";

const testimonials = [
  {
    quote:
      "Pani Martyna Winiarska wykazała się ogromnym profesjonalizmem i zaangażowaniem. Dzięki jej pomocy moja sprawa zakończyła się sukcesem.",
    name: "Anna K.",
    rating: 5,
  },
  {
    quote:
      "Świetny kontakt i jasne wyjaśnienia wszystkich kwestii prawnych. Czułem, że jestem w dobrych rękach.",
    name: "Krzysztof P.",
    rating: 5,
  },
  {
    quote:
      "Kancelaria godna zaufania – rzetelne podejście i pełna transparentność. Zdecydowanie polecam.",
    name: "Ewa M.",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="testimonialsSection" id="testimonials">
      <motion.h2
        className="testimonialsTitle"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Opinie Klientów
      </motion.h2>

      <div className="testimonialsGrid">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            className="testimonialCard"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <p className="testimonialQuote">“{item.quote}”</p>
            <div className="testimonialName">— {item.name}</div>
            <div className="testimonialStars">
              {"★".repeat(item.rating)}
              {"☆".repeat(5 - item.rating)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
