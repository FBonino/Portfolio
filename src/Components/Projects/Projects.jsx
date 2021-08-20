import style from "./Projects.module.css";
import weather from "../../assets/weather.webp";
import movies from "../../assets/movies.webp";
import countries from "../../assets/countries.webp";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { FiArrowUpRight } from "react-icons/fi";

const Container = styled.div`
	background: ${props => props.theme.background};
	background-blend-mode: ${props => props.theme.backgroundBlend};
	color: ${props => props.theme.color};
`;

const Project = styled.div`
	height: 22vh;
	width: 20vw;
	min-width: 17rem;
	min-height: 10rem;
	box-shadow: 0 0 0.4rem ${props => props.theme.color};
	margin: 4vw;
	backgroundColor: ${props => props.theme.backgroundColor};
	color: ${props => props.theme.color};
	position: relative;
`;

const Projects = ({ theme }) => {
	const [t] = useTranslation("global");

	return (
		<Container className={style.container} id="projects">
			<h1 className={style.title}> {t("projects.title")} </h1>
			<div className={style.projects}>
				<Project className={style.project}>
					<div className={style.cardDiv}>
						<h1> AltaBirra </h1>
						<div className={style.linksDiv}>
							<a href="https://alta-birra.vercel.app" className={style.links}>
								< FiArrowUpRight /> {t("projects.visit")}
							</a>
							<a href="https://github.com/FBonino/Funtivity" className={style.links}>
								<img src="https://image.flaticon.com/icons/png/32/733/733609.png" alt="" height="16px" width="16px" /> {t("projects.more")}
							</a>
						</div>
						<div className={style.technologies}>
							<p> Typescript </p>
							<p> React </p>
							<p> Express.js </p>
							<p> Prisma </p>
						</div>
					</div>
					<div className={style.cardImage}>
						<img className={style.projectImage} src={countries} alt="" />
					</div>
				</Project>
				<Project className={style.project}>
					<div className={style.cardDiv}>
						<h1> Funtivity </h1>
						<div className={style.linksDiv}>
							<a href="http://funtivity.vercel.app" className={style.links}>
								< FiArrowUpRight /> {t("projects.visit")}
							</a>
							<a href="https://github.com/FBonino/Funtivity" className={style.links}>
								<img src="https://image.flaticon.com/icons/png/32/733/733609.png" alt="" height="16px" width="16px" /> {t("projects.more")}
							</a>
						</div>
						<div className={style.technologies}>
							<p> React </p>
							<p> Redux </p>
							<p> Node.js </p>
							<p> Express.js </p>
						</div>
					</div>
					<div className={style.cardImage}>
						<img className={style.projectImage} src={countries} alt="" />
					</div>
				</Project>
				<Project className={style.project}>
					<div className={style.cardDiv}>
						<h1> MoviesApp </h1>
						<div className={style.linksDiv}>
							<a href="https://movies-app-fbonino.vercel.app" className={style.links}>
								< FiArrowUpRight /> {t("projects.visit")}
							</a>
							<a href="https://github.com/FBonino/MoviesApp" className={style.links}>
								<img src="https://image.flaticon.com/icons/png/32/733/733609.png" alt="" height="16px" width="16px" /> {t("projects.more")}
							</a>
						</div>
						<div className={style.technologies}>
							<p> React </p>
							<p> Redux </p>
						</div>
					</div>
					<div className={style.cardImage}>
						<img className={style.projectImage} src={movies} alt="" />
					</div>
				</Project>
				<Project className={style.project}>
					<div className={style.cardDiv}>
						<h1> WeatherApp </h1>
						<div className={style.linksDiv}>
							<a href="https://weather-app-fbonino.vercel.app" className={style.links}>
								< FiArrowUpRight /> {t("projects.visit")}
							</a>
							<a href="https://github.com/FBonino/WeatherApp" className={style.links}>
								<img src="https://image.flaticon.com/icons/png/32/733/733609.png" alt="" height="16px" width="16px" /> {t("projects.more")}
							</a>
						</div>
						<div className={style.technologies}>
							<p> React </p>
							<p> CSS </p>
						</div>
					</div>
					<div className={style.cardImage}>
						<img className={style.projectImage} src={weather} alt="" />
					</div>
				</Project>
			</div>
		</Container>
	)
}

export default Projects;