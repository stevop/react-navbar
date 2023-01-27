import "./Navbar.css";
import logo from "../images/netflix.png";
import { GiHamburgerMenu } from "react-icons/gi";
import links from "../data";
import { useState } from "react";

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<nav>
			<div className="Nav">
				<div className="Nav-header">
					<img
						src={logo}
						alt="netflix logo"
					/>
					<button onClick={() => setShowMenu(!showMenu)}>
						<GiHamburgerMenu className="Nav-hamburger" />
					</button>
				</div>
				<div className={`${showMenu ? "Nav-links show" : "Nav-links hide"}`}>
					<ul>
						{links.map((link) => {
							const { id, text, url } = link;
							return (
								<li key={id}>
									<a href={url}>{text}</a>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
