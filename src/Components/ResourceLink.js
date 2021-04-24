import React from "react";
import { Card, Button } from "react-bootstrap";
import "../Styles/ResourceLink.css";

const ResourceLink = ({ title, body, link }) => {
	return (
		<Card>
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>{body}</Card.Text>
				<Card.Link href={link} target="_blank" rel="noreferrer">
					<Button variant="outline-info" className="learnMore-Button">Learn More</Button>
				</Card.Link>
			</Card.Body>
		</Card>
	);
};

export default ResourceLink;
//TODO: Brand Logo Alignment
