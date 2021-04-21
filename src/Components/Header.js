import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import "../Styles/Header.css";

const Header = () => {
	return (
		<>
			<Container id="nav-wrapper" fluid className="content-wrapper">
				<Navbar id="home" bg="nav-color" variant="dark" expand="lg">
					<Navbar.Brand className="whiteText" href="#home">
						<img
							id="brandLogo"
							src="./BornChinese_Logo_rev.png"
							alt="born_chinese_logo"
						></img>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<Nav.Link>
								<Link
									activeClass="active"
									to="learn"
									smooth={true}
									duration={500}
								>
									Learn
								</Link>
							</Nav.Link>
							<Nav.Link>
								{" "}
								<Link
									activeClass="active"
									to="contribute"
									smooth={true}
									duration={500}
								>
									Contribute
								</Link>
							</Nav.Link>
							<Nav.Link>
								{" "}
								<Link
									activeClass="active"
									to="resources"
									smooth={true}
									duration={500}
								>
									Resources
								</Link>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Container>
			<Link
				id="return-top"
				activeClass="active"
				to="home"
				smooth={true}
				duration={800}
			>
				<div
					id="animated-div"
					data-aos-duration="200"
					data-aos="fade-up"
					data-aos-once="false"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="30"
						height="30"
						fill="currentColor"
						class="bi bi-chevron-double-up"
						viewBox="0 0 16 16"
					>
						<path
							fill-rule="evenodd"
							d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"
						/>
						<path
							fill-rule="evenodd"
							d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
						/>
					</svg>
					Top
				</div>
			</Link>
		</>
	);
};

export default Header;
