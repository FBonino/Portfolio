import style from "./About.module.css";
import profile from "../../assets/profile.jpg"
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Carousel, { autoplayPlugin, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const Container = styled.div`
	background: ${props => props.theme.background};
	background-blend-mode: ${props => props.theme.backgroundBlend};
	color: ${props => props.theme.color};
`;

const About = ({ theme }) => {
	const [t] = useTranslation("global");
	return (
		<Container className={style.container} id="about">
			<h1 style={{ marginTop: "7.5rem", marginBottom: "1rem" }}> {t("about.title")} </h1>
			<div className={style.about}>
				<img className={style.profilePic} src={profile} alt="Profile pic" />
				<div className={style.info}>
					<h3> {t("about.who")} </h3>
					<p>	{t("about.description1")} </p>
					<p>	{t("about.description2")}	</p>
					<p>	{t("about.description3")}	</p>
					<div className={style.skills}>
						<p> ▶ Javascript </p>
						<p> ▶ React </p>
						<p> ▶ Node.js </p>
						<p> ▶ Express.js </p>
						<p> ▶ PostgreSQL </p>
						<p> ▶ Typescript </p>
					</div>
				</div>
			</div>
			<h3> {t("about.skills")} </h3>
			<Carousel
				className={style.logos}
				plugins={["infinite", { resolve: autoplayPlugin, options: { interval: 1000 } }, { resolve: slidesToShowPlugin, options: { numberOfSlides: 2 } }]}
			>
				<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" />
				<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" />
				<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" />
				<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" />
				<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" />
				<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" />
				<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" style={{ transform: "scale(1.4)" }} />
				<img src="https://www.nextontop.com/assets/img/services/web/expressjs.svg" background-color="#ffffff" alt="express" style={{ transform: "scale(1.57)" }} />
				<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" />
				<img src="https://images.tute.io/tute/topic/prisma.png" alt="prisma" style={{ transform: "scale(1.57)", filter: "brightness(3)" }} />
				<img src="https://static-00.iconduck.com/assets.00/file-type-sequelize-icon-443x512-ck0z81j3.png" alt="sequelize" />
				<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" />
				<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" />
				<img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" />
			</Carousel>
		</Container>
	)
}

export default About;