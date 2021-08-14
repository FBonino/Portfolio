import React from "react";
import style from "./About.module.css";
import profile from "../../assets/profile.jpg"
import { useTranslation } from "react-i18next";

const About = () => {
	const [t, i18n] = useTranslation("global");
	return (
		<div className={style.container} id="about">
			<h1> {t("about.title")} </h1>
			<div className={style.about}>
				<img className={style.profilePic} src={profile} alt="Profile pic" />
				<div className={style.info}>
					<h3> {t("about.who")} </h3>
					<p>
						{t("about.description")}
					</p>
				</div>
			</div>
			<div className={style.subcontainer}>
				<div className={style.skills}>
					<h4> {t("about.frontend")} </h4>
					<p> Javascript </p>
					<p> Typescript </p>
					<p> React </p>
					<p> Redux </p>
					<p> HTML </p>
					<p> CSS </p>
				</div>
				<div className={style.skills}>
					<h4> {t("about.backend")} </h4>
					<p> Javascript </p>
					<p> Typescript </p>
					<p> Node.js </p>
					<p> Express.js </p>
					<p> Sequelize </p>
					<p> Prisma </p>
				</div>
				<div className={style.skills}>
					<h4> {t("about.other")} </h4>
					<p> Python </p>
					<p> C++ </p>
					<p> SQL </p>
					<p> PostgreSQL </p>
					<p> Git </p>
				</div>
			</div>
		</div>
	)
}

export default About;