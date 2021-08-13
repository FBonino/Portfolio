import { Link } from "react-scroll";
import ReactSwitch from "react-switch";
import Modal from "./Modal";
import { FaSun, FaMoon } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import style from "./Nav.module.css";
import Select, { components } from "react-select";
import en from "../assets/en.jpg";
import es from "../assets/es.png";
import { useState } from "react";


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
	const [isOpen, setIsOpen] = useState(false);
	let darkMode = eval(localStorage.getItem("DarkMode"));
	let language = localStorage.getItem("Language");
	const options = [{ value: "English", icon: en }, { value: "Spanish", icon: es }];

	return (
		<nav className={style.container}>
			<div className={style.subcontainer}>
				<Link className={style.link} to="home" spy={true} smooth={true} delay={250} activeClass={style.active}> Home </Link>
				<Link className={style.link} to="about" spy={true} smooth={true} delay={250} activeClass={style.active}> About Me </Link>
				<Link className={style.link} to="projects" spy={true} smooth={true} delay={250} activeClass={style.active}> Projects </Link>
				<Link className={style.link} to="contact" spy={true} smooth={true} delay={250} activeClass={style.active}> Contact </Link>
			</div>
			<div className={style.subcontainer}>
				<ReactSwitch onChange={() => localStorage.setItem("DarkMode", (darkMode).toString())} checkedIcon={<FaMoon />} uncheckedIcon={<FaSun />} checked={darkMode} />
				<button style={{ margin: "0 1.5rem" }} className={style.languages} onClick={() => setIsOpen(true)}> <BiWorld size="32" /> </button>
				<Modal open={isOpen} onClose={() => setIsOpen(false)}>
					<Select
						value={options.filter(option => option.value.toLowerCase() === language)}
						options={options}
						components={{ Option: Icon, Control: () => null }}
						styles={selectStyle}
						onChange={event => { localStorage.setItem("Language", event.value.toLowerCase()); setIsOpen(false) }}
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