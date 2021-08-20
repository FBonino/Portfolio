import style from "./Projects.module.css";
import weather from "../../assets/weather.webp";
import movies from "../../assets/movies.webp";
import countries from "../../assets/countries.webp";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { IconContext } from "react-icons/lib";

const Container = styled.div`
	background: ${props => props.theme.background};
	background-blend-mode: ${props => props.theme.backgroundBlend};
	color: ${props => props.theme.color};
`;

const Project = styled.div`
	box-shadow: 0 0 0.3rem ${props => props.theme.primary};
	background-color: ${props => props.theme.backgroundColor};
	color: ${props => props.theme.color};
`;

const Card = styled.div`
	background-color: ${props => props.theme.backgroundColor};
`;

const Link = styled.a`
	color: ${props => props.theme.color};
	border: 2px solid ${props => props.theme.color};
	&:hover {
		background-color: ${props => props.theme.primary};
	}
`;

const Techs = styled.div`
	background-color: ${props => props.theme.secondary};
	border-top: 2px solid ${props => props.theme.primary};
	color: ${props => props.theme.backgroundColor};
`;

const Projects = ({ theme }) => {
	const [t] = useTranslation("global");

	return (
		<Container className={style.container} id="projects">
			<IconContext.Provider value={{ size: 36, color: theme.color }}>
				<h1 className={style.title}> {t("projects.title")} </h1>
				<div className={style.projects}>
					<Project className={style.project}>
						<Card className={style.cardDiv}>
							<h1 className={style.projectTitle}> AltaBirra </h1>
							<div className={style.linksDiv}>
								<Link href="https://github.com/FBonino/Funtivity" className={style.links}>
									<FaGithub /> {t("projects.more")}
								</Link>
								<Link href="https://alta-birra.vercel.app" className={style.links}>
									<FiArrowUpRight /> {t("projects.visit")}
								</Link>
							</div>
							<Techs className={style.technologies}>
								<p> Typescript </p>
								<p> React </p>
								<p> Express.js </p>
								<p> Prisma </p>
							</Techs>
						</Card>
						<div className={style.cardImage}>
							<img className={style.projectImage} src={countries} alt="" />
						</div>
					</Project>
					<Project className={style.project}>
						<Card className={style.cardDiv}>
							<h1 className={style.projectTitle}> Funtivity </h1>
							<div className={style.linksDiv}>
								<Link href="https://github.com/FBonino/Funtivity" className={style.links}>
									<FaGithub /> {t("projects.more")}
								</Link>
								<Link href="http://funtivity.vercel.app" className={style.links}>
									<FiArrowUpRight /> {t("projects.visit")}
								</Link>
							</div>
							<Techs className={style.technologies}>
								<p> React </p>
								<p> Redux </p>
								<p> Node.js </p>
								<p> Express.js </p>
							</Techs>
						</Card>
						<div className={style.cardImage}>
							<img className={style.projectImage} src={countries} alt="" />
						</div>
					</Project>
					<Project className={style.project}>
						<Card className={style.cardDiv}>
							<h1 className={style.projectTitle}> MoviesApp </h1>
							<div className={style.linksDiv}>
								<Link href="https://github.com/FBonino/MoviesApp" className={style.links}>
									<FaGithub /> {t("projects.more")}
								</Link>
								<Link href="https://movies-app-fbonino.vercel.app" className={style.links}>
									<FiArrowUpRight /> {t("projects.visit")}
								</Link>
							</div>
							<Techs className={style.technologies}>
								<p> React </p>
								<p> Redux </p>
							</Techs>
						</Card>
						<div className={style.cardImage}>
							<img className={style.projectImage} src={movies} alt="" />
						</div>
					</Project>
					<Project className={style.project}>
						<Card className={style.cardDiv}>
							<h1 className={style.projectTitle}> WeatherApp </h1>
							<div className={style.linksDiv}>
								<Link href="https://github.com/FBonino/WeatherApp" className={style.links}>
									<FaGithub /> {t("projects.more")}
								</Link>
								<Link href="https://weather-app-fbonino.vercel.app" className={style.links}>
									<FiArrowUpRight /> {t("projects.visit")}
								</Link>
							</div>
							<Techs className={style.technologies}>
								<p> React </p>
								<p> CSS </p>
							</Techs>
						</Card>
						<div className={style.cardImage}>
							<img className={style.projectImage} src={weather} alt="" />
						</div>
					</Project>
				</div>
			</IconContext.Provider>
		</Container>
	)
}

export default Projects;