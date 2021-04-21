import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import aos from "aos";

import "../Styles/StatsPage.css";
const StatsPage = ({ isMobile }) => {
	const [animation, setAnimation] = useState("");

	useEffect(() => {
		aos.init({ duration: 800, once: true, offset: 200, easing: "ease-in-out-quat" });
	}, []);

	useEffect(() => {
		if (isMobile) {
			setAnimation("none");
		} else {
			setAnimation("fade-left");
		}
	}, [animation, isMobile]);

	return (
		<div id="learn">
			<Container fluid className="centerRow">
				<Row>
					<Col
						className="d-flex flex-column align-content-center"
						xs={{ span: 11, offset: 1 }}
					>
						<h2>In Vancouver...</h2>
						<ul>
							<li>
								<div data-aos={animation} data-aos-offset="400">
									<p className="bold">717%</p>
									<p className="light"> increase in </p>
									<p className="bold underline">
										<a href="https://bc.ctvnews.ca/hate-crimes-up-97-overall-in-vancouver-last-year-anti-asian-hate-crimes-up-717-1.5314307">
											anti-Asian hate crimes.
										</a>
									</p>
								</div>
							</li>
							<li>
								<div
									data-aos={animation}
									data-aos-offset="330"
									data-aos-delay="300"
								>
									<p className="superLight strikethrough">12 cases in 2019</p>
									<p className="light"> vs </p>
									<p className="bold"> 98 </p>
									<p className="light"> cases in </p>
									<p className="bold underline">
										<a href="https://www.theglobeandmail.com/canada/british-columbia/article-horgan-condemns-rise-in-hate-crimes-against-east-asians-in-vancouver/">
											2020.
										</a>
									</p>
								</div>
							</li>
							<li>
								<div
									data-aos={animation}
									data-aos-offset="230"
									data-aos-delay="500"
								>
									<p className="bold">60%</p>
									<p className="light"> of victims are </p>
									<p className="bold underline">
										<a href="https://www.straight.com/news/vancouver-police-investigate-two-unprovoked-assault-on-asian-women-as-reports-reveal-anti-asian">
											women.
										</a>
									</p>
								</div>
							</li>
							<li>
								<div
									data-aos={animation}
									data-aos-offset="200"
									data-aos-delay="700"
								>
									<p className="bold">65%</p>
									<p className="light"> of incidents are </p>
									<p className="bold underline">
										<a href="https://www.straight.com/news/vancouver-police-investigate-two-unprovoked-assault-on-asian-women-as-reports-reveal-anti-asian">
											verbal abuse.
										</a>
									</p>
								</div>
							</li>
							<li>
								<div
									data-aos={animation}
									data-aos-offset="140"
									data-aos-delay="900"
								>
									<p className="bold">30%</p>
									<p className="light"> of incidents are </p>
									<p className="bold underline">
										<a href="https://www.straight.com/news/vancouver-police-investigate-two-unprovoked-assault-on-asian-women-as-reports-reveal-anti-asian">
											physical attacks.
										</a>
									</p>
								</div>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default StatsPage;
