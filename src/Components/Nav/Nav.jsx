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
import styled from "styled-components";

const Container = styled.nav`
	background-color: ${props => props.theme.background};
	color: ${props => props.theme.color};
	box-shadow: 0 0 0.75rem ${props => props.theme.secondary};
	filter: brightness(1.5);
	opacity: 0.9;
`;

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

const Nav = ({ theme, setTheme, themes }) => {
	const [t, i18n] = useTranslation("global");
	const [isOpen, setIsOpen] = useState(false);
	const [language, setLanguage] = useState(localStorage.getItem("Language"));
	const options = [{ value: "en", icon: en }, { value: "es", icon: es }];

	const handleTheme = () => {
		let temp = theme === "light" ? "dark" : "light";
		localStorage.setItem("Theme", temp);
		setTheme(temp);
	}

	const handleLanguage = event => {
		setLanguage(event.value);
		i18n.changeLanguage(event.value);
		localStorage.setItem("Language", event.value);
		setIsOpen(false);
	}

	return (
		<Container className={style.container}>
			<div className={style.subcontainer}>
				<Link className={style.link} to="home" spy={true} smooth={true} delay={500} activeClass={style.active}>
					{t("nav.home")}
				</Link>
				<Link className={style.link} to="about" spy={true} smooth={true} delay={500} activeClass={style.active}>
					{t("nav.about")}
				</Link>
				<Link className={style.link} to="projects" spy={true} smooth={true} delay={500} activeClass={style.active}>
					{t("nav.projects")}
				</Link>
				<Link className={style.link} to="contact" spy={true} smooth={true} delay={500} activeClass={style.active}>
					{t("nav.contact")}
				</Link>
			</div>
			<div className={style.subcontainer}>
				<ReactSwitch
					onChange={handleTheme}
					checkedIcon={<FaSun className={style.switchIcon} />}
					uncheckedIcon={<FaMoon className={style.switchIcon} />}
					checked={theme === "dark"}
					offHandleColor="#222831"
					offColor="#30475E"
					onHandleColor="#FAF3F3"
					onColor="#F05454"
				/>
				<button className={style.languages} onClick={() => setIsOpen(true)}>
					<BiWorld size="32" color={themes.color} />
				</button>
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
		</Container>
	)
}

export default Nav;