import React from "react";
import style from "./About.module.css";
import profile from "../assets/profile.jpg"

const About = () => {

	return (
		<div className={style.container} id="about">
			<h1> About Me </h1>
			<div className={style.about}>
				<img className={style.profilePic} src={profile} alt="Profile pic" />
				<h3> Who am I? </h3>
				<p>
					I am a Full Stack Developer specialized in Javascript.
				</p>
			</div>
			<div className={style.subcontainer}>
				<div className={style.skills}>
					<h4> Skills </h4>
					<p> Javascript </p>
					<p> React </p>
					<p> Redux </p>
					<p> Node.js </p>
					<p> Express.js </p>
				</div>
				<div className={style.info}>
					<h4> Interests </h4>
					<p> Chess </p>
					<p> Reading </p>
				</div>
			</div>
		</div>
	)
}

export default About;