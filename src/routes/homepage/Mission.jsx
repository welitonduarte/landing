import { motion } from "framer-motion";
import "./../../css/sections/homepage/Mission.css";

export default function Mission() {
  return (
    <section
      className="missionSection"
      id="mission"
      aria-labelledby="mission-heading"
      role="region"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        onViewportEnter={() => console.log("Animation triggered!")}
      >
        <h2 id="mission-heading" className="missionTitle subheading">
          Dbamy o <br />
          naszych klientów
        </h2>
      </motion.div>

      <hr className="hrElement" aria-hidden="true" />

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.25 }}
        viewport={{ once: false, amount: 0.1 }}
        className="missionText__section"
      >
        <p className="missionText">
          Como uma jovem advogada ambiciosa, estou comprometida em fornecer assistência jurídica 
          inovadora e personalizada para atender às diversas necessidades dos meus clientes. 
          Priorizando a comunicação clara, a empatia e um profundo conhecimento da lei, 
          busco tornar o processo legal o mais transparente e tranquilo possível. 
          Saiba mais sobre os serviços que ofereço e como posso ajudá-lo(a) a enfrentar seus desafios jurídicos com confiança.
        </p>
      </motion.div>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.25 }}
        viewport={{ once: true, amount: 0.4 }}
        className="missionButton__section"
      >
        <button
          className="missionButton"
          onClick={() => {
            const element = document.getElementById("contact");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
          aria-label="Acesse a seção de contato."
        >
          <span aria-hidden="true">Contato</span>
        </button>
      </motion.div>
    </section>
  );
}
