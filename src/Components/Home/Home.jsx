import { Link } from "react-scroll";
import style from "./Home.module.css";
import { TiArrowSortedDown } from "react-icons/ti"
import { useTranslation } from "react-i18next";

const Home = () => {
	const [t, i18n] = useTranslation("global");

	return (
		<div className={style.container} id="home">
			<h1 style={{ marginTop: "20rem" }}> Franco Bonino Fernandez </h1>
			<h2> {t("home.dev")} </h2>
			<Link className={style.link} to="about" spy={true} smooth={true}> {t("home.more")} </Link>
			<br />
			<Link className={style.link} to="about" spy={true} smooth={true}> <TiArrowSortedDown className={style.arrow} size="42" /> </Link>
		</div>
	)
}

export default Home;