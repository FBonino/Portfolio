import { Link } from "react-scroll";
import style from "./Home.module.css";
import { TiArrowSortedDown } from "react-icons/ti"
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Container = styled.div`
	background: ${props => props.theme.background};
	background-blend-mode: ${props => props.theme.backgroundBlend};
	color: ${props => props.theme.color};
`;

const Home = ({ theme }) => {
	const [t] = useTranslation("global");

	return (
		<Container className={style.container} id="home">
			<div>
				<h1 className={style.title}> {t("home.hi")} </h1>
				<h1 className={style.title}> Franco Bonino Fernandez </h1>
				<h1 className={style.title}> {t("home.dev")} </h1>
			</div>
			<div className={style.description}>
				<p style={{ marginBottom: "2rem" }}> {t("home.desc")} </p>
				<a href="mailto:boninoffranco@gmail.com" className={style.button}> {t("home.contact")} </a>
			</div>
			<div className={style.more}>
				<Link className={style.link} to="about" spy={true} smooth={true}> {t("home.more")} </Link>
				<br />
				<Link className={style.link} to="about" spy={true} smooth={true}> <TiArrowSortedDown className={style.arrow} size="42" color={theme === "dark" ? "white" : "black"} /> </Link>
			</div>
		</Container>
	)
}

export default Home;