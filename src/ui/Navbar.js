import React from "react";
const Navbar = () => {

	const categorias = ['Abarrotes', 'Limpieza', 'Aseo'];

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand" href="/">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Suspension_bridge_icon.svg/1280px-Suspension_bridge_icon.svg.png"
					width="30"
					height="30"
					className="d-inline-block align-top mr-4"
					alt=""
					loading="lazy"
				/>
				iPronect
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavDropdown"
				aria-controls="navbarNavDropdown"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNavDropdown">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item dropdown">
						<a
							href="/#"
							className="nav-link dropdown-toggle"
							id="navbarDropdownMenuLink"
							role="button"
							data-toggle="dropdown"
							data-target="#navbarDropdownCategories"
							aria-haspopup="true"
							aria-expanded="false"
						>
							Categorias
						</a>
						<div id="navbarDropdownCategories"  className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
							{
								categorias.map((categoria) => (
									<a key={categoria} className="dropdown-item" href="/#">
										{categoria}
									</a>
								))
							}
						</div>
					</li>
				</ul>
				<ul className="navbar-nav pr4">
					<li className="nav-item dropdown">
						<a
							href="/#"
							className="nav-link dropdown"
							id="navbarDropdownMenuLink"
							role="button"
							data-toggle="dropdown"
							data-target="#navbarDropdownUser"
							aria-haspopup="true"
							aria-expanded="false"
						>
							<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
								<path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
								<path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
								<path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
							</svg>
						</a>

						<div id="navbarDropdownUser" className="dropdown-menu dropdown-menu-right">
							<a className="dropdown-item" href="/#">Perfil</a>
							<a className="dropdown-item" href="/#">Logout</a>
						</div>

					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
