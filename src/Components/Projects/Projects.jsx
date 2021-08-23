import style from "./Projects.module.css";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { IconContext } from "react-icons/lib";

const Container = styled.div`
	background: ${props => props.theme.background};
	color: ${props => props.theme.color};
`;

const Project = styled.div`
	box-shadow: 0 0 0.3rem ${props => props.theme.primary};
	background-color: ${props => props.theme.background};
`;

const Card = styled.div`
	background-color: ${props => props.theme.primary};
`;

const Techs = styled.div`
	background-color: ${props => props.theme.secondary};
	border-top: 2px solid ${props => props.theme.primary};
	color: black;
`;

const Projects = () => {
	const [t] = useTranslation("global");

	return (
		<Container className={style.container} id="projects">
			<IconContext.Provider value={{ size: 36, color: "#DDDDDD" }}>
				<h1 className={style.title}> {t("projects.title")} </h1>
				<div className={style.projects}>
					<Project className={style.project}>
						<Card className={style.cardDiv}>
							<h1 className={style.projectTitle}> AltaBirra </h1>
							<div className={style.linksDiv}>
								<a href="https://github.com/LeaMarco/AltaBirra" className={style.links}>
									<FaGithub /> {t("projects.more")}
								</a>
								<a href="https://altabirra.vercel.app" className={style.links}>
									<FiArrowUpRight /> {t("projects.visit")}
								</a>
							</div>
							<Techs className={style.technologies}>
								<p> Typescript </p>
								<p> React </p>
								<p> Node.js </p>
								<p> Express.js </p>
								<p> Prisma </p>
							</Techs>
						</Card>
						<div className={style.cardImage}>
							<img className={style.projectImage} src={"/assets/birra.webp"} alt="" />
						</div>
					</Project>
					<Project className={style.project}>
						<Card className={style.cardDiv}>
							<h1 className={style.projectTitle}> Funtivity </h1>
							<div className={style.linksDiv}>
								<a href="https://github.com/FBonino/Funtivity" className={style.links}>
									<FaGithub /> {t("projects.more")}
								</a>
								<a href="http://funtivity.vercel.app" className={style.links}>
									<FiArrowUpRight /> {t("projects.visit")}
								</a>
							</div>
							<Techs className={style.technologies}>
								<p> React </p>
								<p> Redux </p>
								<p> Node.js </p>
								<p> Express.js </p>
							</Techs>
						</Card>
						<div className={style.cardImage}>
							<img className={style.projectImage} src={"/assets/countries.webp"} alt="" />
						</div>
					</Project>
					<Project className={style.project}>
						<Card className={style.cardDiv}>
							<h1 className={style.projectTitle}> MoviesApp </h1>
							<div className={style.linksDiv}>
								<a href="https://github.com/FBonino/MoviesApp" className={style.links}>
									<FaGithub /> {t("projects.more")}
								</a>
								<a href="https://movies-app-fbonino.vercel.app" className={style.links}>
									<FiArrowUpRight /> {t("projects.visit")}
								</a>
							</div>
							<Techs className={style.technologies}>
								<p> React </p>
								<p> Redux </p>
							</Techs>
						</Card>
						<div className={style.cardImage}>
							<img className={style.projectImage} src={"/assets/movies.webp"} alt="" />
						</div>
					</Project>
					<Project className={style.project}>
						<Card className={style.cardDiv}>
							<h1 className={style.projectTitle}> WeatherApp </h1>
							<div className={style.linksDiv}>
								<a href="https://github.com/FBonino/WeatherApp" className={style.links}>
									<FaGithub /> {t("projects.more")}
								</a>
								<a href="https://weather-app-fbonino.vercel.app" className={style.links}>
									<FiArrowUpRight /> {t("projects.visit")}
								</a>
							</div>
							<Techs className={style.technologies}>
								<p> React </p>
								<p> CSS </p>
							</Techs>
						</Card>
						<div className={style.cardImage}>
							<img className={style.projectImage} src={"/assets/weather.webp"} alt="" />
						</div>
					</Project>
				</div>
			</IconContext.Provider>
		</Container>
	)
}

export default Projects;