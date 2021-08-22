import style from "./Contact.module.css";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Container = styled.div`
	background: ${props => props.theme.background};
	color: ${props => props.theme.color};
`;

const Form = styled.div`
	background: ${props => props.theme.primary};
	border: 1px solid ${props => props.theme.color};
	box-shadow: 0 0 0.4rem ${props => props.theme.secondary};
	&:hover {
		box-shadow: 0 0 0.5rem ${props => props.theme.secondary};
	};
`;

const Input = styled.input`
	background: #DDDDDD;
	color: #222831;
	border: 3px solid ${props => props.theme.primary};
`;

const Area = styled.textarea`
	background: #DDDDDD;
	color: #222831;
	border: 3px solid ${props => props.theme.primary};
	resize: vertical;
	padding: 0.4rem;
`;

const Send = styled.button`
	padding: 0.5rem;
	border: none;
	background: ${props => props.theme.background};
	border-radius: 1rem;
	font-weight: 600;
	cursor: pointer;
	color: ${props => props.theme.color};
	&:hover {
		background-color: ${props => props.theme.secondary};
	}
`;

const Contact = () => {
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
			<h1 className={style.title}> {t("contact.title")} </h1>
			<Form className={style.form}>
				<form onSubmit={handleSubmit} autoComplete="off">
					<div className={style.formDiv}>
						<Input id="name" className={style.input} {...register("name")} required />
						<label className={style.floatingLabel} htmlFor="name"> {t("contact.name")} </label>
					</div>
					<div className={style.formDiv}>
						<Input id="email" className={style.input} {...register("email")} required />
						<label className={style.floatingLabel} htmlFor="email"> {t("contact.email")} </label>
					</div>
					<div className={style.formDiv}>
						<Input id="subject" className={style.input} {...register("subject")} required />
						<label className={style.floatingLabel} htmlFor="subject"> {t("contact.subject")} </label>
					</div>
					<div className={style.formDiv}>
						<Area className={style.area} id="message" cols="44" rows="10" style={{ resize: "vertical", padding: "0.4rem" }} {...register("text")} required />
						<label className={style.floatingLabel} htmlFor="message"> {t("contact.message")} </label>
					</div>
					<Send> {t("contact.send")} </Send>
				</form>
			</Form>
		</Container>
	)
}

export default Contact;