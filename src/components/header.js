import React, { Component } from 'react';

export default class Header extends Component {
	render() {
		return (
			<div className='header'>
				<nav class='navbar navbar-expand-lg bg-body-tertiary'>
					<div class='container-fluid'>
						<a class='navbar-brand' href='#'>
							Kaleb McCullough
						</a>
						<button
							class='navbar-toggler'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#navbarNav'
							aria-controls='navbarNav'
							aria-expanded='false'
							aria-label='Toggle navigation'>
							<span class='navbar-toggler-icon'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16'
									height='16'
									fill='currentColor'
									class='bi bi-list'
									viewBox='0 0 16 16'>
									<path
										fill-rule='evenodd'
										d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
									/>
								</svg>
							</span>
						</button>
						<div class='collapse navbar-collapse' id='navbarNav'>
							<ul class='navbar-nav'>
								<li class='nav-item'>
									<a class='nav-link active' aria-current='page' href='#'>
										Home
									</a>
								</li>
								<li class='nav-item'>
									<a class='nav-link' href='#'>
										Projects
									</a>
								</li>
								<li class='nav-item'>
									<a class='nav-link' href='#'>
										About
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}
