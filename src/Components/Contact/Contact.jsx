import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IconContext } from "react-icons/lib";
import style from "./Contact.module.css";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
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
				title: "Email sent",
				text: "The email was sent successfully. Thank you for contacting me, I will be in touch as soon as possible."
			}))
			.then(() => reset())
			.catch(err => Swal.fire({
				icon: "error",
				title: "Something went wrong",
				text: "An error ocurred and the email could not be sent."
			}))
	}

	return (
		<div className={style.container} id="contact">
			<div className={style.form}>
				<h3> Contact me </h3>
				<form onSubmit={handleSubmit} autoComplete="off">
					<div className={style.formDiv}>
						<input {...register("name")} required />
						<label className={style.floatingLabel}> Name </label>
					</div>
					<div className={style.formDiv}>
						<input {...register("email")} required />
						<label className={style.floatingLabel}> Email </label>
					</div>
					<div className={style.formDiv}>
						<input {...register("subject")} required />
						<label className={style.floatingLabel}> Subject </label>
					</div>
					<div className={style.formDiv}>
						<textarea {...register("text")} required />
						<label className={style.floatingLabel}> Text </label>
					</div>
					<input type="submit" value="Send" />
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