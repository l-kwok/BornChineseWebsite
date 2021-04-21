import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/Landing.css";
import aos from "aos";
const Landing = ({ isMobile }) => {
	useEffect(() => {
		aos.init({ duration: 1500, offset: 200, easing: "ease-in-out-quat" });
	});
	return (
		<div id="landing">
			<Container fluid className="evenRows">
				<Row>
					<Col className="my-auto" xs={{ span: 11, offset: 1 }}>
						<h1 id="landingTitle">
							Help stop<br></br> anti-Asian racism.
						</h1>
					</Col>
				</Row>
				<Row className="d-flex align-items-end">
					<Col className="d-flex justify-content-center">
						<svg
							id="landing-chevron"
							xmlns="http://www.w3.org/2000/svg"
							width="50"
							height="50"
							fill="white"
							class="bi bi-chevron-down"
							viewBox="0 0 16 16"
						>
							<path
								fill-rule="evenodd"
								d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
							/>
						</svg>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Landing;
