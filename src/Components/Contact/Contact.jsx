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
	background-color: ${props => props.theme.background};
	color: ${props => props.theme.color};
`;

const Form = styled.div`
	border: 1px solid ${props => props.theme.color};
	box-shadow: 0 0 0.25rem ${props => props.theme.secondary};
	&:hover {
		box-shadow: 0 0 0.4rem ${props => props.theme.secondary};
	};
`;

const Icon = styled.a`
	background-color: ${props => props.theme.color};
	border: 2px solid ${props => props.theme.secondary};
	&:hover {
		filter: brightness(1.25);
	}
`;

const Input = styled.input`
	background-color: ${props => props.theme.color};
	color: ${props => props.theme.background};
`;

const Area = styled.textarea`
	background-color: ${props => props.theme.color};
	color: ${props => props.theme.background};
	resize: vertical;
	padding: 0.4rem;
`;

const Label = styled.label`
	color: ${props => props.theme.background};
`;

const Send = styled.button`
	padding: 0.5rem;
	border: none;
	background-color: ${props => props.theme.color};
	border-radius: 1rem;
	font-weight: 600;
	cursor: pointer;
	color: ${props => props.theme.background};
	&:hover {
		filter: brightness(1.1);
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
			<Form className={style.form}>
				<h3> {t("contact.title")} </h3>
				<form onSubmit={handleSubmit} autoComplete="off">
					<div className={style.formDiv}>
						<Input className={style.input} {...register("name")} required />
						<Label className={style.floatingLabel}> {t("contact.name")} </Label>
					</div>
					<div className={style.formDiv}>
						<Input className={style.input} {...register("email")} required />
						<Label className={style.floatingLabel}> {t("contact.email")} </Label>
					</div>
					<div className={style.formDiv}>
						<Input className={style.input} {...register("subject")} required />
						<Label className={style.floatingLabel}> {t("contact.subject")} </Label>
					</div>
					<div className={style.formDiv}>
						<Area cols="44" rows="10" style={{ resize: "vertical", padding: "0.4rem" }} {...register("text")} required />
						<Label className={style.floatingLabel}> {t("contact.message")} </Label>
					</div>
					<Send> {t("contact.send")} </Send>
				</form>
			</Form>
			<div className={style.icons}>
				<IconContext.Provider value={{ size: 28, color: theme.secondary }}>
					<Icon className={style.icon} href="https://www.linkedin.com/in/fbonino/"> < FaLinkedin /> </Icon>
					<Icon className={style.icon} href="https://github.com/FBonino/"> < FaGithub /> </Icon>
					<Icon className={style.icon} href="mailto:boninoffranco@gmail.com"> < SiGmail /> </Icon>
				</IconContext.Provider>
			</div>
		</Container>
	)
}

export default Contact;