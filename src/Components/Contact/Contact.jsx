import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IconContext } from "react-icons/lib";
import style from "./Contact.module.css";

const Contact = () => {
	return (
		<div className={style.container} id="contact">
			<IconContext.Provider value={{ size: 28, color: "green" }}>
				<a className={style.icon} href="https://www.linkedin.com/in/fbonino/"> < FaLinkedin /> </a>
				<a className={style.icon} href="https://github.com/FBonino/"> < FaGithub /> </a>
				<a className={style.icon} href="mailto:boninoffranco@gmail.com"> < SiGmail /> </a>
			</IconContext.Provider>
		</div>
	)
}

export default Contact;