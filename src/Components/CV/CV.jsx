import { Link } from "react-router-dom";
import styled from "styled-components";
import style from "./CV.module.css";
import { useTranslation } from "react-i18next";
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';


const Container = styled.div`
	background: ${props => props.theme.background};
	color: ${props => props.theme.color};
`;

const StyledLink = styled(Link)`
	background: ${props => props.theme.color};
	color: ${props => props.theme.background};
	&:hover {
		background: ${props => props.theme.secondary};
		font-weight: 700;
		transform: scale(1.05);
	}
`;

const CV = () => {
	const [t] = useTranslation("global");

	return (
		<Container className={style.container}>
			<StyledLink to="/" className={style.link}> {t("cv.back")} </StyledLink>
			<div className={style.pdf}>
				<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
					<Viewer
						fileUrl="./assets/CV.pdf"
						theme="dark"
					/>
				</Worker>
			</div>
		</Container>
	)
}

export default CV;