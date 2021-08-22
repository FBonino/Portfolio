import style from "./About.module.css";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Container = styled.div`
	background: ${props => props.theme.background};
	color: ${props => props.theme.color};
`;

const Profile = styled.img`
	box-shadow: 0 0 0.5rem ${props => props.theme.secondary};
`;

const About = () => {
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
			<div className={style.logos}>
				<img src="/assets/techs/javascript.svg" alt="javascript" />
				<img src="/assets/techs/typescript.svg" alt="typescript" />
				<img src="/assets/techs/react.svg" alt="react" />
				<img src="/assets/techs/redux.svg" alt="redux" />
				<img src="/assets/techs/html.svg" alt="html" />
				<img src="/assets/techs/css.svg" alt="css" />
				<img src="/assets/techs/nodejs.svg" alt="nodejs" style={{ transform: "scale(1.4)" }} />
				<img src="/assets/techs/express.svg" alt="express" style={{ transform: "scale(1.57)" }} />
				<img src="/assets/techs/postgresql.svg" alt="postgresql" />
				<img src="/assets/techs/prisma.svg" alt="prisma" />
				<img src="/assets/techs/sequelize.svg" alt="sequelize" />
				<img src="/assets/techs/python.svg" alt="python" />
				<img src="/assets/techs/cplusplus.svg" alt="cplusplus" />
				<img src="/assets/techs/git.svg" alt="git" />
			</div>
		</Container>
	)
}

export default About;