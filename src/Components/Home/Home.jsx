import { Link } from "react-scroll";
import style from "./Home.module.css";
import { TiArrowSortedDown } from "react-icons/ti"
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Container = styled.div`
	background: ${props => props.theme.background};
	color: ${props => props.theme.color};
`;

const StyledLink = styled.a`
	background: ${props => props.theme.color};
	color: ${props => props.theme.background};
	&:hover {
		background: ${props => props.theme.secondary};
		font-weight: 700;
		transform: scale(1.05);
	}
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
				<StyledLink href="mailto:boninoffranco@gmail.com" className={style.button}> {t("home.contact")} </StyledLink>
			</div>
			<Link className={style.link} to="about" spy={true} smooth={true}>
				<div className={style.more} style={{ color: theme.color }}>
					{t("home.more")}
					<TiArrowSortedDown className={style.arrow} size="42" color={theme.color} />
				</div>
			</Link>
		</Container>
	)
}

export default Home;