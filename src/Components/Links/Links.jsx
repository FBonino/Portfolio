import style from "./Links.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IconContext } from "react-icons/lib";
import styled from "styled-components";

const Icon = styled.a`
	background: ${props => props.theme.background};
	border: 2px solid ${props => props.theme.secondary};
	&:hover {
		filter: brightness(1.25);
	}
`;

const Links = ({ theme }) => {
	return (
		<div className={style.container}>
			<IconContext.Provider value={{ size: 24, color: theme.secondary }}>
				<Icon className={style.icon} href="https://www.linkedin.com/in/fbonino/" aria-label="Linkedin"> < FaLinkedin /> </Icon>
				<Icon className={style.icon} href="https://github.com/FBonino/" aria-label="Github"> < FaGithub /> </Icon>
				<Icon className={style.icon} href="mailto:boninoffranco@gmail.com" aria-label="Gmail"> < SiGmail /> </Icon>
			</IconContext.Provider>
		</div>
	)
}

export default Links;