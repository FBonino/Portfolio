import { Link } from "react-scroll";
import style from "./Home.module.css";
import { TiArrowSortedDown } from "react-icons/ti"
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Container = styled.div`
	background-color: ${props => props.theme.background};
	color: ${props => props.theme.color};
`;

const Home = ({ theme }) => {
	const [t] = useTranslation("global");

	return (
		<Container className={style.container} id="home">
			<h1 style={{ marginTop: "20rem" }}> Franco Bonino Fernandez </h1>
			<h2> {t("home.dev")} </h2>
			<Link className={style.link} to="about" spy={true} smooth={true}> {t("home.more")} </Link>
			<br />
			<Link className={style.link} to="about" spy={true} smooth={true}> <TiArrowSortedDown className={style.arrow} size="42" color={theme === "dark" ? "white" : "black"} /> </Link>
		</Container>
	)
}

export default Home;