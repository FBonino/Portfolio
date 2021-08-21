import { lazy, useState } from "react";
import { Link } from "react-scroll";
import ReactSwitch from "react-switch";
import style from "./Nav.module.css";
import styled from "styled-components";
import Select, { components } from "react-select";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import { MdLanguage } from "react-icons/md";
import { FaSun, FaMoon } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
const Modal = lazy(() => import("./Modal"));
const NavModal = lazy(() => import("./ModalResponsive"));
const Links = lazy(() => import("../Links/Links"));

const Container = styled.nav`
	background: ${props => props.theme.background};
	color: ${props => props.theme.color};
	box-shadow: 0 0 0.75rem ${props => props.theme.secondary};
	filter: brightness(1.25);
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
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [language, setLanguage] = useState(localStorage.getItem("Language"));
	const options = [{ value: "en", icon: "/assets/en.webp" }, { value: "es", icon: "/assets/es.webp" }];

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
			<div className={style.notResponsive}>
				<div className={style.subcontainer}>
					<Link className={style.link} to="home" spy={true} smooth={true} delay={100} activeClass={style.active}>
						{t("nav.home")}
					</Link>
					<Link className={style.link} to="about" spy={true} smooth={true} delay={100} activeClass={style.active}>
						{t("nav.about")}
					</Link>
					<Link className={style.link} to="projects" spy={true} smooth={true} delay={100} activeClass={style.active}>
						{t("nav.projects")}
					</Link>
					<Link className={style.link} to="contact" spy={true} smooth={true} delay={100} activeClass={style.active}>
						{t("nav.contact")}
					</Link>
					<RouterLink to="/cv" className={style.link} style={{ color: "inherit" }}>
						CV<FiArrowUpRight size={16} />
					</RouterLink>
				</div>
				<div className={style.subcontainer}>
					<ReactSwitch
						onChange={handleTheme}
						checkedIcon={<FaSun className={style.switchIcon} />}
						uncheckedIcon={<FaMoon className={style.switchIcon} />}
						checked={theme === "dark"}
						offHandleColor="#222831"
						offColor="#FD7014"
						onHandleColor="#FAF3F3"
						onColor="#FD7014"
					/>
					<button className={style.languages} onClick={() => setIsOpen(true)} aria-label="Language">
						<MdLanguage size="32" color={themes.color} />
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
			</div>
			<div className={style.contact}>
				<Links theme={themes} />
			</div>
			<div className={style.responsive}>
				<button className={style.burger} onClick={() => setIsNavOpen(true)} aria-label="Menu">
					<GiHamburgerMenu size="32" color={themes.color} />
				</button>
				<NavModal open={isNavOpen} onClose={() => setIsNavOpen(false)}>
					<div className={style.modalContainer}>
						<ReactSwitch
							onChange={handleTheme}
							checkedIcon={<FaSun className={style.switchIcon} />}
							uncheckedIcon={<FaMoon className={style.switchIcon} />}
							checked={theme === "dark"}
							offHandleColor="#222831"
							offColor="#FD7014"
							onHandleColor="#FAF3F3"
							onColor="#FD7014"
						/>
						<button className={style.languages} onClick={() => setIsOpen(true)} aria-label="Language">
							<MdLanguage size="32" color={themes.color} />
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
						<br />
						<Link className={style.link} to="home" spy={true} smooth={true} onClick={() => setIsNavOpen(false)}>
							{t("nav.home")}
						</Link>
						<Link className={style.link} to="about" spy={true} smooth={true} onClick={() => setIsNavOpen(false)}>
							{t("nav.about")}
						</Link>
						<Link className={style.link} to="projects" spy={true} smooth={true} onClick={() => setIsNavOpen(false)}>
							{t("nav.projects")}
						</Link>
						<Link className={style.link} to="contact" spy={true} smooth={true} onClick={() => setIsNavOpen(false)}>
							{t("nav.contact")}
						</Link>
						<RouterLink to="/cv" className={style.link} style={{ color: "inherit" }} onClick={() => setIsNavOpen(false)}>
							CV<FiArrowUpRight size={16} />
						</RouterLink>
						<Links theme={themes} />
					</div>
				</NavModal>
			</div>
		</Container>
	)
}

export default Nav;