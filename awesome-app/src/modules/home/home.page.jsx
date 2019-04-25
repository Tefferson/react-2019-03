import React from "react";
import { FaStopwatch, FaGamepad, FaCameraRetro, FaAtlas } from "react-icons/fa";
import MenuButtonComponent from "../../components/menu-button/menu-button.component";

const menuButtons = [
  {
    icon: <FaStopwatch />,
    path: "contador",
    title: "Contador"
  },
  {
    icon: <FaGamepad />,
    path: "jogo-da-velha",
    title: "Jogo da velha"
  },
  {
    icon: <FaCameraRetro />,
    path: "fotos",
    title: "Fotos"
  },
  {
    icon: <FaAtlas />,
    path: "fala",
    title: "Fala"
  }
];

class HomePage extends React.Component {
  render() {
    return (
      <div>
        {menuButtons.map(menu => (
          <MenuButtonComponent
            Icon={menu.icon}
            path={menu.path}
            title={menu.title}
          />
        ))}
      </div>
    );
  }
}

export default HomePage;
