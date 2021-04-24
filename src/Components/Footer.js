import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../Styles/Footer.css";
const Footer = ({ isMobile }) => {
	return (
		<div className="footer">
			<Container fluid className="footer-content content-wrapper">
				<Row></Row>
				{isMobile ? (
					<Row>
						<Col xs={{span: 11, offset: 1 }} sm={{ offset: 1 }}>
							<img
								id="brandLogo"
								src="./Images/BornChinese_Logo_rev.png"
								alt="born_chinese_logo"
							></img>
						</Col>
						<Col xs={{ span: 11, offset: 1 }} sm={{ span: 11, offset: 1 }} md={11}>
							<p className="footer-about">
								Born Chinese aims to connect and inspire Chinese Canadians and
								Americans through helpful and educational content.
							</p>
						</Col>
						<Col
							xs={{ span: 11, offset: 1 }}
							sm={{ offset: 1 }}
						>
							<div>
								<p className="footer-social">
									Find us on{" "}
									<a
										href="https://www.instagram.com/bornchinese/"
										className="underline"
									>
										Instagram.
									</a>
								</p>
								<p className="footer-social">
									Contact us at{" "}
									<a href="mailto:hello@bornchinese.ca">hello@bornchinese.ca</a>
								</p>
							</div>
						</Col>
					</Row>
				) : (
					<Row>
						<Col className="d-flex justify-content-center">
							<img
								id="brandLogo"
								src="./Images/BornChinese_Logo_rev.png"
								alt="born_chinese_logo"
							></img>
						</Col>
						<Col className="d-flex justify-content-center">
							<p className="mx-auto footer-about">
								Born Chinese aims to connect and inspire Chinese Canadians and
								Americans through helpful and educational content.
							</p>
						</Col>
						<Col>
							<div className="mx-auto my-auto">
								<p className="footer-social">
									Find us on{" "}
									<a
										href="https://www.instagram.com/bornchinese/"
										className="underline"
									>
										Instagram.
									</a>
								</p>
								<p className="footer-social">
									Contact us at{" "}
									<a href="mailto:hello@bornchinese.ca">hello@bornchinese.ca</a>
								</p>
							</div>
						</Col>
					</Row>
				)}
				<Row>
					<Col xs={{offset: 1}} className="d-flex justify-content-center footer-copyright">
						<p>
							Born Chinese <span>&#169;</span> Copyright 2021. Website by{" "}
							<a href="https://l-kwok.github.io/"> Linden Kwok.</a>
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Footer;
