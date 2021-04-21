import React, { useEffect } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "../Styles/Header.css";
import aos from "aos";

const Header = () => {
	useEffect(() => {
		aos.init({ duration: 800, offset: 200, easing: "ease-in-out-quat" });
	});
	return (
		<>
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
						<Nav.Link href="#learn">Learn</Nav.Link>
						<Nav.Link href="#contribute">Contribute</Nav.Link>
						<Nav.Link href="#resources">Resources</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<Button href="#home" id="return-top">
				<div id="animated-div" data-aos="fade-up">
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
					<br></br>
					Top
				</div>
			</Button>
		</>
	);
};

export default Header;