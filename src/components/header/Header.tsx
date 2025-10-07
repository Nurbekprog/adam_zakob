import { motion } from "framer-motion";
import Logo from "../../assets/images/logo.png";
import Menu_btn from "../../assets/images/menu_btn.png";
import "./Header.scss";
const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="container pt-65"
    >
      <ul className="nav flex place-content-between items-center">
        <li className="flex place-content-between gap-[100px] items-center">
          <img src={Logo} alt="Logo" />
          <li className="flex gap-15 d-none d-lg-block">
            <a href="/about" className="links">
              About
            </a>
            <a href="/services" className="links">
              Services
            </a>
            <a href="/works" className="links">
              Works
            </a>
            <a href="/blog" className="links">
              Blog
            </a>
          </li>
        </li>
        <li>
          <button className="menu_btn">
            <img src={Menu_btn} alt="" />
          </button>
        </li>
      </ul>
    </motion.div>
  );
};

export default Header;
