import "./../../../css/components/header/menu/MenuList.css";

export default function MenuList() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "mission", label: "Missão" },
    { id: "expertise", label: "O que eu faço?" },
    { id: "about", label: "Sobre mim" },
    { id: "testimonials", label: "Opiniões" },
    { id: "contact", label: "Contato" },
  ];

  return (
    <ul className="menuSection">
      {menuItems.map((item) => (
        <li key={item.id}>
          <button
            className="menuBtn"
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  );
};
