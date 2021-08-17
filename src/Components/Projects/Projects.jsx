import { useState } from "react";
import style from "./Projects.module.css";
import ReactCardFlip from 'react-card-flip';
import weather from "../../assets/weather.png";
import movies from "../../assets/movies.png";
import countries from "../../assets/countries.png";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Container = styled.div`
	background-color: ${props => props.theme.background};
	color: ${props => props.theme.color};
`;

const Projects = ({ theme }) => {
	const [t] = useTranslation("global");
	const [birraFlipped, setBirraFlipped] = useState(false);
	const [countriesFlipped, setContriesFlipped] = useState(false);
	const [moviesFlipped, setMoviesFlipped] = useState(false);
	const [weatherFlipped, setWeatherFlipped] = useState(false);
	const containerStyle = {
		height: "22vh",
		width: "20vw",
		minWidth: "17em",
		minHeight: "10em",
		boxShadow: `0 0 0.4em ${theme.color}`,
		margin: "1vh 2vw",
		backgroundColor: theme.background,
		color: theme.color
	};

	return (
		<Container className={style.container} id="projects">
			<h1> {t("projects.title")} </h1>
			<div className={style.subcontainer}>
				<div className={style.projects}>
					<ReactCardFlip containerStyle={containerStyle} isFlipped={birraFlipped} flipSpeedFrontToBack={0.8} flipSpeedBackToFront={0.4} infinite={true}>
						<div className={style.cardDiv} onClick={() => setBirraFlipped(true)}>
							<img className={style.projectImage} src={countries} alt="" />
						</div>
						<div className={style.cardDiv} onMouseLeave={() => setBirraFlipped(false)}>
							<h1> AltaBirra </h1>
							<div className={style.linksDiv}>
								<a href="https://alta-birra.vercel.app" className={style.links}>
									<img src="https://image.flaticon.com/icons/png/32/733/733609.png" alt="" height="32px" width="32px" /> {t("projects.visit")}
								</a>
								<a href="https://github.com/FBonino/Funtivity" className={style.links}>
									<img src="https://image.flaticon.com/icons/png/32/733/733609.png" alt="" height="32px" width="32px" /> {t("projects.more")}
								</a>
							</div>
						</div>
					</ReactCardFlip>
					<ReactCardFlip containerStyle={containerStyle} isFlipped={countriesFlipped} flipSpeedFrontToBack={0.8} flipSpeedBackToFront={0.4} infinite={true}>
						<div className={style.cardDiv} onClick={() => setContriesFlipped(true)}>
							<img className={style.projectImage} src={countries} alt="" />
						</div>
						<div className={style.cardDiv} onMouseLeave={() => setContriesFlipped(false)}>
							<h1> Funtivity </h1>
							<div className={style.linksDiv}>
								<a href="http://funtivity.vercel.app" className={style.links}>
									<img src="https://image.flaticon.com/icons/png/32/733/733609.png" alt="" height="32px" width="32px" /> {t("projects.visit")}
								</a>
								<a href="https://github.com/FBonino/Funtivity" className={style.links}>
									<img src="https://image.flaticon.com/icons/png/32/733/733609.png" alt="" height="32px" width="32px" /> {t("projects.more")}
								</a>
							</div>
						</div>
					</ReactCardFlip>
				</div>
			</div>
			<div className={style.subcontainer}>
				<div className={style.projects}>
					<ReactCardFlip containerStyle={containerStyle} isFlipped={moviesFlipped} flipSpeedFrontToBack={0.8} flipSpeedBackToFront={0.4} infinite={true}>
						<div className={style.cardDiv} onClick={() => setMoviesFlipped(true)}>
							<img className={style.projectImage} src={movies} alt="" />
						</div>
						<div className={style.cardDiv} onMouseLeave={() => setMoviesFlipped(false)}>
							<h1> MoviesApp </h1>
							<div className={style.linksDiv}>
								<a href="https://movies-app-fbonino.vercel.app" className={style.links}>
									<img src="https://image.flaticon.com/icons/png/32/733/733609.png" alt="" height="32px" width="32px" /> {t("projects.visit")}
								</a>
								<a href="https://github.com/FBonino/MoviesApp" className={style.links}>
									<img src="https://image.flaticon.com/icons/png/32/733/733609.png" alt="" height="32px" width="32px" /> {t("projects.more")}
								</a>
							</div>
						</div>
					</ReactCardFlip>
					<ReactCardFlip containerStyle={containerStyle} isFlipped={weatherFlipped} flipSpeedFrontToBack={0.8} flipSpeedBackToFront={0.4} infinite={true}>
						<div className={style.cardDiv} onClick={() => setWeatherFlipped(true)}>
							<img className={style.projectImage} src={weather} alt="" />
						</div>
						<div className={style.cardDiv} onMouseLeave={() => setWeatherFlipped(false)}>
							<h1> WeatherApp </h1>
							<div className={style.linksDiv}>
								<a href="https://weather-app-fbonino.vercel.app" className={style.links}>
									<img src="https://image.flaticon.com/icons/png/32/733/733609.png" alt="" height="32px" width="32px" /> {t("projects.visit")}
								</a>
								<a href="https://github.com/FBonino/WeatherApp" className={style.links}>
									<img src="https://image.flaticon.com/icons/png/32/733/733609.png" alt="" height="32px" width="32px" /> {t("projects.more")}
								</a>
							</div>
						</div>
					</ReactCardFlip>
				</div>
			</div>
		</Container>
	)
}

export default Projects;