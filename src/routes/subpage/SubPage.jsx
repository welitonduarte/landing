import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "./../../assets/logo.svg";
import SubPageImg from "./../../assets/subpageImg.jpg";
import "./../../css/sections/SubPage.css";

export default function SubPage({ title, items, description, subTitle }) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="subpageSection">
      <div className="logoSubpageWrapper">
        <Link to="/">
          <img className="logoSubpage" src={Logo} />
        </Link>
      </div>
      <main className="subpageContent">
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="introSection"
        >
          <div className="textSubpage">
            <h1 className="headingSubpage">{title}</h1>
            <hr className="dividerGold" />
            <p className="descriptionText">{description}</p>
          </div>

          <div className="imageSubpageWrapper">
            <img
              className="imageSubpage"
              src={SubPageImg}
              alt="law office desk"
              loading="lazy"
            />
          </div>
        </motion.section>

        <section className="detailsSection">
          <h2 className="subheadingSubpage">{subTitle}</h2>
          <hr className="dividerGold" />
          <ul className="listSubpage">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
