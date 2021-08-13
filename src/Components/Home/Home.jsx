import { Link } from "react-scroll";
import style from "./Home.module.css";
import { TiArrowSortedDown } from "react-icons/ti"

const Home = () => {
	return (
		<div className={style.container} id="home">
			<h1 style={{ marginTop: "20rem" }}> Franco Bonino Fernandez </h1>
			<h2> Full Stack Developer </h2>
			<Link className={style.link} to="about" spy={true} smooth={true}> More about me </Link>
			<br />
			<Link className={style.link} to="about" spy={true} smooth={true}> <TiArrowSortedDown size="42" /> </Link>
		</div>
	)
}

export default Home;