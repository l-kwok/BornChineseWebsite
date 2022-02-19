import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/StatsPage.css";

const StatsPage = ({ isMobile }) => {
	const [animation, setAnimation] = useState("");

	useEffect(() => {
		if (isMobile) {
			setAnimation("none");
		} else {
			setAnimation("fade-left");
		}
	}, [animation, isMobile]);

	return (
		<div id="learn">
			<Container fluid className="centerRow content-wrapper">
				<Row className="d-flex flex-row">
					<Col
						className="d-flex flex-column align-content-center"
						xs={{ span: 11, offset: 1 }}
						sm={{ span: 11, offset: 1 }}
						xl={{ span: 6, offset: 1 }}
					>
						<h2>Facts &#38; Stats:</h2>
						<ul>
							<li>
								<div
									data-aos={animation}
									data-aos-offset="400"
									data-aos-duration="400"
								>
									<p className="light">Vancouver is the "Anti-Asian Hate Crime Capital of North America."</p>
								</div>
							</li>
							<li>
								<div
									data-aos={animation}
									data-aos-offset="330"
									data-aos-delay="300"
									data-aos-duration="400"
								>
									<p className="light">Vancouver saw a </p>
									<p className="bold">717%</p>
									<p className="light"> increase in </p>
									<p className="bold">
										<a
											className="underline"
											href="https://bc.ctvnews.ca/hate-crimes-up-97-overall-in-vancouver-last-year-anti-asian-hate-crimes-up-717-1.5314307"
										>
											anti-Asian hate crimes
										</a>
										.
									</p>
								</div>
							</li>
							<li>
								<div
									data-aos={animation}
									data-aos-offset="230"
									data-aos-delay="500"
									data-aos-duration="400"
								>
									<p className="light">43% of Asians in B.C. experienced some kind of racism 2020.</p>
								</div>
							</li>
							<li>
								<div
									data-aos={animation}
									data-aos-offset="200"
									data-aos-delay="700"
									data-aos-duration="400"
								>
									<p className="light">Asian Americans saw a 339% increase in hate crimes in 2021.</p>
								</div>
							</li>
							{/* <li>
								<div
									data-aos={animation}
									data-aos-offset="140"
									data-aos-delay="900"
									data-aos-duration="400"
								>
									<p className="bold">30%</p>
									<p className="light"> of incidents are </p>
									<p className="bold">
										<a
											className="underline"
											href="https://www.straight.com/news/vancouver-police-investigate-two-unprovoked-assault-on-asian-women-as-reports-reveal-anti-asian"
										>
											physical attacks
										</a>
										.
									</p>
								</div>
							</li> */}
						</ul>
					</Col>
					<Col>
						<img
							id="img-protest"
							src="./Images/img2.jpeg"
							alt="stop asian hate protest"
						></img>
						<img
							id="img-chinatown"
							src="./Images/img3.jpeg"
							alt="stop asian hate protest"
						></img>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default StatsPage;
