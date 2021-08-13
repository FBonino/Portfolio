import style from "./Modal.module.css";

const Modal = ({ open, onClose, children }) => {
	return !open
		? null
		: (
			<>
				<div className={style.background} onClick={onClose} />
				<div className={style.container}>
					{children}
				</div>
			</>
		)
}

export default Modal;