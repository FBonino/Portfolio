import { useState } from "react";
import { Link } from "react-router-dom";
import ReactSwitch from "react-switch";
import style from "./Nav.module.css";
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaHome, FaFolderOpen } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IconContext } from "react-icons/lib";

const Nav = () => {
	const [light, setLight] = useState(false);

	return (
		<nav className={style.container}>
			<div className={`${style.subcontainer} ${style.landingDiv}`}>
				<Link to="/"> L </Link>
			</div>
			<div className={style.subcontainer}>
				<IconContext.Provider value={{ size: 28, color: "red" }}>
					<Link to="/"> < FaHome /> </Link>
					<Link to="/projects"> < FaFolderOpen /> </Link>
				</IconContext.Provider>
			</div>
			<div className={style.subcontainer}>
				<ReactSwitch onChange={() => setLight(!light)} checkedIcon={<FaSun />} uncheckedIcon={<FaMoon />} checked={light} />
			</div>
			<div className={style.subcontainer}>
				<IconContext.Provider value={{ size: 28, color: "red" }}>
					<a className={style.icon} href="https://www.linkedin.com/in/fbonino/"> < FaLinkedin /> </a>
					<a className={style.icon} href="https://github.com/FBonino/"> < FaGithub /> </a>
					<a className={style.icon} href="mailto:boninoffranco@gmail.com"> < SiGmail /> </a>
				</IconContext.Provider>
			</div>
		</nav>
	)
}

export default Nav;