import style from "./About.module.css";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Carousel, { autoplayPlugin, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const Container = styled.div`
	background: ${props => props.theme.background};
	color: ${props => props.theme.color};
`;

const Profile = styled.img`
	box-shadow: 0 0 0.5rem ${props => props.theme.secondary};
`;

const StyledCarousel = styled(Carousel)`
	background-color: ${props => props.theme.primary};
	border: 3px solid ${props => props.theme.secondary};
`;

const About = ({ theme }) => {
	const [t] = useTranslation("global");
	return (
		<Container className={style.container} id="about">
			<h1 className={style.title}> {t("about.title")} </h1>
			<div className={style.about}>
				<Profile className={style.profilePic} src={"/assets/profile.webp"} alt="Profile pic" />
				<div className={style.info}>
					<h2> {t("about.who")} </h2>
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
			<StyledCarousel
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
				<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sequelize/sequelize-original.svg" alt="sequelize" />
				<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" />
				<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" />
				<img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" />
			</StyledCarousel>
		</Container>
	)
}

export default About;