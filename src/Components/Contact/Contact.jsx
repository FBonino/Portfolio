import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IconContext } from "react-icons/lib";
import style from "./Contact.module.css";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Container = styled.div`
	background: ${props => props.theme.background};
	background-blend-mode: ${props => props.theme.backgroundBlend};
	color: ${props => props.theme.color};
`;

const Form = styled.div`
	border: 1px solid ${props => props.theme.color};
	box-shadow: 0 0 0.4rem ${props => props.theme.secondary};
	&:hover {
		box-shadow: 0 0 0.5rem ${props => props.theme.secondary};
	};
`;

const Icon = styled.a`
	background: ${props => props.theme.backgroundColor};
	border: 2px solid ${props => props.theme.secondary};
	&:hover {
		filter: brightness(1.25);
	}
`;

const Input = styled.input`
	background: ${props => props.theme.color};
	color: ${props => props.theme.backgroundColor};
	border: 2px solid ${props => props.theme.backgroundColor};
`;

const Area = styled.textarea`
	background: ${props => props.theme.color};
	color: ${props => props.theme.backgroundColor};
	border: 2px solid ${props => props.theme.backgroundColor};
	resize: vertical;
	padding: 0.4rem;
`;

const Label = styled.label`
	color: ${props => props.theme.backgroundColor};
`;

const Send = styled.button`
	padding: 0.5rem;
	border: none;
	background: ${props => props.theme.backgroundColor};
	border-radius: 1rem;
	font-weight: 600;
	cursor: pointer;
	color: ${props => props.theme.color};
	&:hover {
		background-color: ${props => props.theme.primary};
	}
`;

const Contact = ({ theme }) => {
	const [t] = useTranslation("global");
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
		<Container className={style.container} id="contact">
			<h1 style={{ marginTop: "7.5rem", marginBottom: "1rem" }}> {t("contact.title")} </h1>
			<Form className={style.form}>
				<form onSubmit={handleSubmit} autoComplete="off">
					<div className={style.formDiv}>
						<Input id="name" className={style.input} {...register("name")} required />
						<Label className={style.floatingLabel} for="name"> {t("contact.name")} </Label>
					</div>
					<div className={style.formDiv}>
						<Input id="email" className={style.input} {...register("email")} required />
						<Label className={style.floatingLabel} for="email"> {t("contact.email")} </Label>
					</div>
					<div className={style.formDiv}>
						<Input id="subject" className={style.input} {...register("subject")} required />
						<Label className={style.floatingLabel} for="subject"> {t("contact.subject")} </Label>
					</div>
					<div className={style.formDiv}>
						<Area id="message" cols="44" rows="10" style={{ resize: "vertical", padding: "0.4rem" }} {...register("text")} required />
						<Label className={style.floatingLabel} for="message"> {t("contact.message")} </Label>
					</div>
					<Send> {t("contact.send")} </Send>
				</form>
			</Form>
			<div className={style.icons}>
				<IconContext.Provider value={{ size: 28, color: theme.secondary }}>
					<Icon className={style.icon} href="https://www.linkedin.com/in/fbonino/" aria-label="Linkedin"> < FaLinkedin /> </Icon>
					<Icon className={style.icon} href="https://github.com/FBonino/" aria-label="Github"> < FaGithub /> </Icon>
					<Icon className={style.icon} href="mailto:boninoffranco@gmail.com" aria-label="Gmail"> < SiGmail /> </Icon>
				</IconContext.Provider>
			</div>
		</Container>
	)
}

export default Contact;