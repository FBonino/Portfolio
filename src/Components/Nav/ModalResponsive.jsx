import style from "./ModalResponsive.module.css";
import styled from "styled-components";

const Container = styled.div`
	background-color: ${props => props.theme.background};
	color: ${props => props.theme.color};
`;

const Modal = ({ open, onClose, children }) => {
	return !open
		? null
		: (
			<>
				<div className={style.background} onClick={onClose} />
				<Container className={style.container}>
					{children}
				</Container>
			</>
		)
}

export default Modal;