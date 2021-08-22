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
				</div>
			</div>
			<h3> {t("about.skills")} </h3>
			<div className={style.logos}>
				<div>
					<p> Javascript </p>
					<img src="/assets/techs/javascript.svg" alt="javascript" />
				</div>
				<div>
					<p> Typescript </p>
					<img src="/assets/techs/typescript.svg" alt="typescript" />
				</div>
				<div>
					<p> React </p>
					<img src="/assets/techs/react.svg" alt="react" />
				</div>
				<div>
					<p> Redux </p>
					<img src="/assets/techs/redux.svg" alt="redux" />
				</div>
				<div>
					<p> HTML </p>
					<img src="/assets/techs/html.svg" alt="html" />
				</div>
				<div>
					<p> CSS </p>
					<img src="/assets/techs/css.svg" alt="css" />
				</div>
				<div>
					<p> Node.js </p>
					<img src="/assets/techs/nodejs.svg" alt="nodejs" style={{ transform: "scale(1.4)" }} />
				</div>
				<div>
					<p> Express.js </p>
					<img src="/assets/techs/express.svg" alt="express" style={{ transform: "scale(1.57)" }} />
				</div>
				<div>
					<p> PostgreSQL </p>
					<img src="/assets/techs/postgresql.svg" alt="postgresql" />
				</div>
				<div>
					<p> Prisma </p>
					<img src="/assets/techs/prisma.svg" alt="prisma" />
				</div>
				<div>
					<p> Sequelize </p>
					<img src="/assets/techs/sequelize.svg" alt="sequelize" />
				</div>
				<div>
					<p> Python </p>
					<img src="/assets/techs/python.svg" alt="python" />
				</div>
				<div>
					<p> C++ </p>
					<img src="/assets/techs/cplusplus.svg" alt="cplusplus" />
				</div>
				<div>
					<p> Git </p>
					<img src="/assets/techs/git.svg" alt="git" />
				</div>
			</div>
		</Container>
	)
}

export default About;