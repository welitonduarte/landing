import { Link } from "react-router-dom";
import "./../../../css/components/header/menu/MenuExp.css";

const lawLinks = [
  { label: "Direito Civil", path: "/prawo-cywilne" },
  { label: "Direito de Família", path: "/prawo-rodzinne" },
  { label: "Direito Empresarial", path: "/prawo-gospodarcze" },
  { label: "Direito do Trabalho", path: "/prawo-pracy" },
  { label: "Direito Imobiliário", path: "/prawo-nieruchomosci" },
  { label: "Direito de Proteção de Dados Pessoais", path: "/prawo-danych" },
];

export default function MenuExp() {
  return (
    <div className="submenuWrapper">
      <ul
        className="submenuList"
        role="menu"
        aria-label="Submenu áreas do direito"
      >
        {lawLinks.map(({ label, path }) => (
          <li key={path} className="submenuItem" role="none">
            <hr aria-hidden="true" />
            <Link
              to={path}
              className="submenuLink"
              role="menuitem"
              tabIndex={0}
              aria-label={`Ir para a página ${label}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
