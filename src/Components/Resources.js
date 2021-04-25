import React from "react";
import { Container, Row, Col, Accordion, Card, Button } from "react-bootstrap";
import "../Styles/Resources.css";
import ResourceLink from "./ResourceLink";
const Resources = ({ isMobile }) => {
	return (
		<div id="resources">
			{isMobile ? (
				<Container
					fluid
					className="d-flex justify-content-start resources-container"
				>
					<Row>
						<Col xs={{ offset: 1 }} sm={{ offset: 1 }}>
							<Accordion>
								<Card>
									<Card.Header>
										<Accordion.Toggle
											className="d-flex justify-content-center align-content-center"
											as={Button}
											variant="link"
											eventKey="0"
										>
											<h3 id="resource-vancouver">How you can help in Vancouver </h3>
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
												<a
													href="https://act2endracism.ca/"
													target="_blank"
													rel="noreferrer"
												>
													ACCT Foundation
												</a>
											</h4>
											<h4>
												<a
													href="https://www.yarrowsociety.ca/"
													target="_blank"
													rel="noreferrer"
												>
													Yarrow Intergenerational Society for Justice
												</a>
											</h4>
											<h4>
												<a
													href="https://huafoundation.org/"
													target="_blank"
													rel="noreferrer"
												>
													Hua Foundation
												</a>
											</h4>
											<h4>
												<a
													href="https://www.chinatownfoundation.org/"
													target="_blank"
													rel="noreferrer"
												>
													The Chinatown Foundation
												</a>
											</h4>
											<h4 className="longLinks">
												<a
													href="https://pchc-mom.org/virtual-storytelling-series/story-archive/"
													target="_blank"
													rel="noreferrer"
												>
													Pacific Canada Heritage Centre - Museum of Migration
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
											<h3 id="resource-canada">How you can help in Canada </h3>
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
												<a
													href="https://www.ihollaback.org/bystanderintervention/"
													target="_blank"
													rel="noreferrer"
												>
													Bystander Intervention
												</a>
											</h4>
											<h4>
												<a
													href="https://www.elimin8hate.org/resources"
													target="_blank"
													rel="noreferrer"
												>
													Elimin8hate
												</a>
											</h4>
											<h4>
												<a
													href="https://www.project1907.org/resources"
													target="_blank"
													rel="noreferrer"
												>
													Project 1907
												</a>
											</h4>
											<h4>
												<a
													href="https://www.stopthespread.ca/"
													target="_blank"
													rel="noreferrer"
												>
													Stop the Spread
												</a>
											</h4>
											<h4 className="longLinks">
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
					className="resources-container d-flex flex-column justify-content-evenly"
				>
					<Row>
						<Col>
							<h3>How you can help in Canada: </h3>
						</Col>
					</Row>
					<Row>
						<Col>
							<ResourceLink
								title="Bystander Intervention"
								body="Don’t be a bystander when you witness anti-Asian racism in your community."
								link="https://www.ihollaback.org/bystanderintervention/"
							></ResourceLink>
						</Col>
						<Col>
							<ResourceLink
								title="Elimin8hate"
								body="Learn how to report a hate crime with a series of resources."
								link="https://www.elimin8hate.org/resources"
							></ResourceLink>
						</Col>
						<Col className="extended-col">
							<ResourceLink
								title="Project 1907"
								body="Read more about the history and the prevailing issues of anti-Asian racism."
								link="https://www.project1907.org/resources"
							></ResourceLink>
						</Col>
						<Col>
							<ResourceLink
								title="Stop the Spread"
								body="Reduce the stigma against Asians."
								link="https://www.stopthespread.ca/"
							></ResourceLink>
						</Col>
						<Col>
							<ResourceLink
								title="Chinese Canadian National Council - For Social Justice"
								body="Find out how to combat anti-Asian racism through online resources and social media."
								link="https://ccncsj.ca/"
							></ResourceLink>
						</Col>
						<Col className="extended-col"></Col>
					</Row>
					<Row>
						<Col>
							{" "}
							<h3 className="my-auto">How you can help in Vancouver: </h3>
						</Col>
					</Row>
					<Row>
						<Col>
							<ResourceLink
								title="ACCT Foundation"
								body="Builds the capacity of Chinese Canadian leaders committed to creating a more equitable society in Canada."
								link="https://act2endracism.ca/"
							></ResourceLink>
						</Col>
						<Col>
							<ResourceLink
								title="Yarrow Intergenerational Society for Justice"
								body="Supports youth and low-income immigrant seniors in Chinatown and the Downtown Eastside."
								link="https://www.yarrowsociety.ca/"
							></ResourceLink>
						</Col>
						<Col className="extended-col">
							<ResourceLink
								title="Hua Foundation"
								body="Focuses on racial equity and civic engagement issues."
								link="https://huafoundation.org/"
							></ResourceLink>
						</Col>
						<Col>
							<ResourceLink
								title="The Chinatown Foundation"
								body="Focuses on building a resilient community, while preserving Chinatown’s irreplaceable cultural heritage."
								link="https://www.chinatownfoundation.org/"
							></ResourceLink>
						</Col>
						<Col>
							<ResourceLink
								title="Pacific Canada Heritage Centre - Museum of Migration"
								body="Learn more about the stories of Chinese migrants to better understand their history and struggles."
								link="https://pchc-mom.org/virtual-storytelling-series/story-archive/"
							></ResourceLink>
						</Col>
						<Col className="extended-col"></Col>
					</Row>
				</Container>
			)}
		</div>
	);
};

export default Resources;
