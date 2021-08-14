import { Link } from "react-scroll";
import ReactSwitch from "react-switch";
import Modal from "./Modal";
import { FaSun, FaMoon } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import style from "./Nav.module.css";
import Select, { components } from "react-select";
import en from "../../assets/en.jpg";
import es from "../../assets/es.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";


const { Option } = components;

const Icon = props => (
	<Option {...props}>
		<img src={props.data.icon} style={{ width: "32px" }} alt={props.data.value} />
	</Option>
)

const selectStyle = {
	option: styles => ({
		...styles,
		cursor: "pointer"
	}),
	menu: () => ({
		width: 60
	}),
	menuList: () => ({
		padding: 0
	})
}

const Nav = () => {
	const [t, i18n] = useTranslation("global");
	const [isOpen, setIsOpen] = useState(false);
	const [isDark, setIsDark] = useState(!!localStorage.getItem("DarkMode"));
	const [language, setLanguage] = useState(localStorage.getItem("Language"));
	const options = [{ value: "en", icon: en }, { value: "es", icon: es }];

	const handleTheme = () => {
		setIsDark(!isDark);
		localStorage.setItem("DarkMode", isDark.toString());
	}

	const handleLanguage = event => {
		setLanguage(event.value);
		i18n.changeLanguage(event.value);
		localStorage.setItem("Language", event.value);
		setIsOpen(false);
	}

	return (
		<nav className={style.container}>
			<div className={style.subcontainer}>
				<Link className={style.link} to="home" spy={true} smooth={true} delay={250} activeClass={style.active}> {t("nav.home")} </Link>
				<Link className={style.link} to="about" spy={true} smooth={true} delay={250} activeClass={style.active}> {t("nav.about")} </Link>
				<Link className={style.link} to="projects" spy={true} smooth={true} delay={250} activeClass={style.active}> {t("nav.projects")} </Link>
				<Link className={style.link} to="contact" spy={true} smooth={true} delay={250} activeClass={style.active}> {t("nav.contact")} </Link>
			</div>
			<div className={style.subcontainer}>
				<ReactSwitch onChange={handleTheme} checkedIcon={<FaMoon className={style.switchIcon} />} uncheckedIcon={<FaSun className={style.switchIcon} />} checked={isDark} />
				<button style={{ marginLeft: "2rem", marginRight: "1.5rem", cursor: "pointer" }} className={style.languages} onClick={() => setIsOpen(true)}> <BiWorld size="32" /> </button>
				<Modal open={isOpen} onClose={() => setIsOpen(false)}>
					<Select
						value={options.filter(option => option.value === language)}
						options={options}
						components={{ Option: Icon, Control: () => null }}
						styles={selectStyle}
						onChange={handleLanguage}
						isClearable={false}
						isSearchable={false}
						menuIsOpen={true}
					/>
				</Modal>
			</div>
		</nav>
	)
}

export default Nav;