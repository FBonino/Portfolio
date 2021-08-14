import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IconContext } from "react-icons/lib";
import style from "./Contact.module.css";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

const Contact = () => {
	const [t, i18n] = useTranslation("global");
	const { register, watch, reset } = useForm({ mode: "onBlur" });
	const nameValue = watch("name");
	const emailValue = watch("email");
	const subjectValue = watch("subject");
	const textValue = watch("text");

	const handleSubmit = event => {
		event.preventDefault();
		emailjs.send("service_0f5q1ra", "template_nt4gj8q", { nameValue, emailValue, subjectValue, textValue }, "user_dWfYE0e4Lv9qxG2aeFvA2")
			.then(() => Swal.fire({
				icon: "success",
				title: t("contact.success.title"),
				text: t("contact.success.text")
			}))
			.then(() => reset())
			.catch(err => Swal.fire({
				icon: "error",
				title: t("contact.error.title"),
				text: t("contact.error.text")
			}))
	}

	return (
		<div className={style.container} id="contact">
			<div className={style.form}>
				<h3> {t("contact.title")} </h3>
				<form onSubmit={handleSubmit} autoComplete="off">
					<div className={style.formDiv}>
						<input className={style.input} {...register("name")} required />
						<label className={style.floatingLabel}> {t("contact.name")} </label>
					</div>
					<div className={style.formDiv}>
						<input className={style.input} {...register("email")} required />
						<label className={style.floatingLabel}> {t("contact.email")} </label>
					</div>
					<div className={style.formDiv}>
						<input className={style.input} {...register("subject")} required />
						<label className={style.floatingLabel}> {t("contact.subject")} </label>
					</div>
					<div className={style.formDiv}>
						<textarea cols="44" rows="10" style={{ resize: "vertical", padding: "0.4rem" }} {...register("text")} required />
						<label className={style.floatingLabel}> {t("contact.message")} </label>
					</div>
					<input type="submit" value={t("contact.send")} />
				</form>
			</div>
			<div className={style.icons}>
				<IconContext.Provider value={{ size: 28, color: "green" }}>
					<a className={style.icon} href="https://www.linkedin.com/in/fbonino/"> < FaLinkedin /> </a>
					<a className={style.icon} href="https://github.com/FBonino/"> < FaGithub /> </a>
					<a className={style.icon} href="mailto:boninoffranco@gmail.com"> < SiGmail /> </a>
				</IconContext.Provider>
			</div>
		</div>
	)
}

export default Contact;