import React from "react";
import { Container, Row, Col, Accordion, Card, Button } from "react-bootstrap";
import "../Styles/Resources.css";
const Resources = ({ isMobile }) => {
	return (
		<div id="resources">
			{isMobile ? (
				<Container
					fluid
					className="d-flex justify-content-start resources-container"
				>
					<Row>
						<Col xs={{ offset: 0 }} sm={{ offset: 1 }}>
							<Accordion>
								<Card>
									<Card.Header>
										<Accordion.Toggle
											className="d-flex justify-content-center align-content-center"
											as={Button}
											variant="link"
											eventKey="0"
										>
											<h3>How can I help in Vancouver </h3>
											<svg
												class="bi bi-chevron-down resource-dropdown-chevron"
												xmlns="http://www.w3.org/2000/svg"
												width="45"
												height="25"
												fill="currentColor"
												viewBox="0 0 16 16"
											>
												<path
													fill-rule="evenodd"
													d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
												/>
											</svg>
										</Accordion.Toggle>
									</Card.Header>
									<Accordion.Collapse eventKey="0">
										<Card.Body>
											{" "}
											<h4>
												<a href="https://act2endracism.ca/">ACCT Foundation</a>
											</h4>
											<h4>
												<a href="https://www.yarrowsociety.ca/">
													Yarrow Intergenerational Society for Justice
												</a>
											</h4>
											<h4>
												<a href="https://huafoundation.org/">Hua Foundation</a>
											</h4>
											<h4>
												<a href="https://www.chinatownfoundation.org/">
													The Chinatown Foundation
												</a>
											</h4>
											<h4>
												<a href="https://pchc-mom.org/virtual-storytelling-series/story-archive/">
													Pacific Canada Heritage Centre - <br></br>Museum of
													Migration
												</a>
											</h4>
										</Card.Body>
									</Accordion.Collapse>
								</Card>
								<Card bg={"dark"}>
									<Card.Header>
										<Accordion.Toggle
											className="d-flex justify-content-center align-content-center"
											as={Button}
											variant="link"
											eventKey="1"
										>
											<h3>How can I help in Canada </h3>
											<svg
												class="bi bi-chevron-down resource-dropdown-chevron"
												xmlns="http://www.w3.org/2000/svg"
												width="45"
												height="25"
												fill="currentColor"
												viewBox="0 0 16 16"
											>
												<path
													fill-rule="evenodd"
													d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
												/>
											</svg>
										</Accordion.Toggle>
									</Card.Header>
									<Accordion.Collapse eventKey="1">
										<Card.Body>
											<h4>
												<a href="https://www.ihollaback.org/bystanderintervention/">
													Bystander Intervention
												</a>
											</h4>
											<h4>
												<a href="https://www.elimin8hate.org/resources">
													Elimin8hate
												</a>
											</h4>
											<h4>
												<a href="https://www.project1907.org/resources">
													Project 1907
												</a>
											</h4>
											<h4>
												<a href="https://www.stopthespread.ca/">
													Stop the Spread
												</a>
											</h4>
											<h4>
												<a href="https://ccncsj.ca/">
													Chinese Canadian National Council - For Social Justice
												</a>
											</h4>
										</Card.Body>
									</Accordion.Collapse>
								</Card>
							</Accordion>
						</Col>
					</Row>
				</Container>
			) : (
				<Container
					fluid
					className="d-flex justify-content-evenly resources-container"
				>
					<Row></Row>
					<Row>
						<Col xs={{ offset: 2 }} sm={{ offset: 1 }}>
							<h2 id="resources-title">How can I help in...</h2>
						</Col>
					</Row>
					<Row>
						<Col sm={{ offset: 1 }}>
							<h3>Vancouver</h3>
							<h4>
								<a href="https://act2endracism.ca/">ACCT Foundation</a>
							</h4>
							<h4>
								<a href="https://www.yarrowsociety.ca/">
									Yarrow Intergenerational Society for Justice
								</a>
							</h4>
							<h4>
								<a href="https://huafoundation.org/">Hua Foundation</a>
							</h4>
							<h4>
								<a href="https://www.chinatownfoundation.org/">
									The Chinatown Foundation
								</a>
							</h4>
							<h4>
								<a href="https://pchc-mom.org/virtual-storytelling-series/story-archive/">
									Pacific Canada Heritage Centre - <br></br>Museum of Migration
								</a>
							</h4>
						</Col>
						<Col>
							<h3>Canada</h3>
							<h4>
								<a href="https://www.ihollaback.org/bystanderintervention/">
									Bystander Intervention
								</a>
							</h4>
							<h4>
								<a href="https://www.elimin8hate.org/resources">Elimin8hate</a>
							</h4>
							<h4>
								<a href="https://www.project1907.org/resources">Project 1907</a>
							</h4>
							<h4>
								<a href="https://www.stopthespread.ca/">Stop the Spread</a>
							</h4>
							<h4>
								<a href="https://ccncsj.ca/">
									Chinese Canadian National Council - <br></br>For Social
									Justice
								</a>
							</h4>
						</Col>
					</Row>
					<Row></Row>
				</Container>
			)}
		</div>
	);
};

export default Resources;
