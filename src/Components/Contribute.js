import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";

import "../Styles/HelpPage.css";

const HelpPage = ({ isMobile }) => {
	const [animation, setAnimation] = useState("fade-left");
	const [title, setTitle] = useState(null);
	const [content, setContent] = useState(null);
	const [help, setHelp] = useState(true);
	const [scrollOffset, setScrollOffset] = useState(70);

	useEffect(() => {
		if (isMobile) {
			setScrollOffset(70);
			setAnimation("");
			setTitle(() => {
				return (
					<div data-aos="fade" data-aos-duration="800" data-aos-delay="0">
						<h1 id="helpPage-title-post">Start a conversation.</h1>
					</div>
				);
			});
			setContent(() => {
				return (
					<div data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="500">
						<p id="bubble-uncomfort" className="convo-bubbles">
							Let’s have this uncomfortable conversation.
						</p>
					</div>
				);
			});
		} else {
			setScrollOffset(110);
			setAnimation("fade-left");
			setTitle(() => {
				return (
					<div data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="500">
						<p id="bubble-uncomfort" className="convo-bubbles">
							Let’s have this uncomfortable conversation.
						</p>
					</div>
				);
			});
			setContent(() => {
				return (
					<div data-aos="fade" data-aos-duration="800" data-aos-delay="0">
						<h1 id="helpPage-title-post">Start a conversation.</h1>
					</div>
				);
			});
		}
	}, [isMobile, animation, scrollOffset]);

	const handleHelpClick = () => {
		setHelp(!help);
	};

	return (
		<div id="contribute" className="centerRow">
			{help ? (
				<Container fluid className="content-wrapper">
					<Row>
						<Col xs={{ offset: 1, span: 10 }}>
							<h1 id="helpPage-title">
								<Link
									activeClass="active"
									to="contribute"
									smooth={true}
									duration={500}
									onClick={handleHelpClick}
									offset={scrollOffset}
								>
									Combating racism feels like a daunting task...
									<br></br>how should I start?
									<svg
										id="helpPage-arrow"
										xmlns="http://www.w3.org/2000/svg"
										width="50"
										height="40"
										fill="currentColor"
										class="bi bi-arrow-right-square"
										viewBox="0 0 16 16"
									>
										<path
											fill-rule="evenodd"
											d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
										/>
									</svg>
								</Link>
							</h1>
						</Col>
					</Row>
				</Container>
			) : (
				<Container className="d-flex flex-column justify-content-around content fluid">
					<Row>
						<Col>
							<div data-aos="fade" data-aos-duration="800" data-aos-delay="0">
								{title}
							</div>
						</Col>
					</Row>
					<Row>
						<Col xs={{ span: 10, offset: 1 }} xl={{ span: 10, offset: 0 }}>
							<div data-aos="zoom-in-up" data-aos-delay="300"></div>
						</Col>
					</Row>
					<Row>
						<Col xs={{ span: 10, offset: 1 }} xl={{ span: 10, offset: 0 }}>
							<div data-aos="zoom-in-up" data-aos-delay="300">
								<p id="bubble-wrong" className="convo-bubbles">
									I'm ready to be wrong.
								</p>
							</div>
						</Col>
					</Row>
					<Row>
						<Col xs={{ span: 10, offset: 1 }} xl={{ span: 11, offset: 0 }}>
							{content}
						</Col>
					</Row>
					<Row>
						<Col xs={{ span: 10, offset: 1 }} xl={{ span: 10, offset: 0 }}>
							<div data-aos="zoom-in-up" data-aos-delay="700">
								<p
									id="bubble-feedback"
									className="convo-bubbles reverse-bubble"
								>
									I'm open to feedback.
								</p>
							</div>
						</Col>
					</Row>
					<Row>
						<Col xs={{ span: 10, offset: 1 }} xl={{ span: 10, offset: 0 }}>
							<div
								data-aos="zoom-in-up"
								data-aos-offset="-400"
								data-aos-delay="800"
							>
								<p id="bubble-callout" className="convo-bubbles">
									Hey, you can call me out.{" "}
								</p>
							</div>
						</Col>
					</Row>
					<Row>
						<Col xs={{ span: 10, offset: 1 }} xl={{ span: 10, offset: 0 }}>
							<div
								data-aos="zoom-in-up"
								data-aos-offset="-400"
								data-aos-delay="1000"
							>
								<p id="bubble-listen" className="convo-bubbles reverse-bubble">
									I'm ready to listen and learn.
								</p>
							</div>
						</Col>
					</Row>
				</Container>
			)}
		</div>
	);
};

export default HelpPage;
