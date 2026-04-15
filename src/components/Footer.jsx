import { Link } from "react-router-dom";
import Logo from "./../assets/logo.svg";
import "./../css/components/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerSection footerInfo">
          <img className="footerLogo" src={Logo} alt="Logo kancelarii" />
          <p className="footerDescription">
            Presto serviços jurídicos presencialmente e remotamente, adaptando-me às necessidades de clientes em todo o Brasil.
          </p>
        </div>

        <div className="footerSection footerContact">
          <h3 className="footerHeading">Ana Sonaira</h3>
          <address className="footerAddress">
            <p>
              E-mail: <a href="mailto:martyna@gmail.com">anasonaira@gmail.com</a>
            </p>
            <p>
              Celular: <a href="tel:65996101750">(65) 9 9610-1750</a>
            </p>
          </address>
        </div>

        <div className="footerSection footerSpecialties">
          <h3 className="footerHeading">Áreas de Especialização</h3>
          <nav aria-label="Áreas de Especialização">
            <ul className="footerLinks">
              <li>
                <Link to="/prawo-cywilne">Direito Civil</Link>
              </li>
              <li>
                <Link to="/prawo-rodzinne">Direito de Família</Link>
              </li>
              <li>
                <Link to="/prawo-gospodarcze">Direito Empresarial</Link>
              </li>
              <li>
                <Link to="/prawo-pracy">Direito do Trabalho</Link>
              </li>
              <li>
                <Link to="/prawo-nieruchomosci">Direito Imobiliário</Link>
              </li>
              <li>
                <Link to="/prawo-danych">Direito de Proteção de Dados Pessoais</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="footerBottom">
        <p className="footerCredit">
          Designed and Coded by{" "}
          <strong>
            <a className="footerLink" href="https://landing-gamma-jade.vercel.app/">Weliton Duarte</a>
          </strong>
        </p>
      </div>
    </footer>
  );
}
