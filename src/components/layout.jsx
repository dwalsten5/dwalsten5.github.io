import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from './sidebar.jsx';
import '../../assets/css/main.css';

/**
Top level basic layout for the site. Includes a sidebar for navigation on the left
and a main body for content

*/
const Layout = ({ children }) => {
	const routes = [
		{
			title: 'Home',
			slug: '/#',
		},
		{
			title: 'Projects',
			slug: '/projects',
		},
		{
			title: 'Another',
			slug: '/another',
		},
	];

	return (
		<div id="wrapper">
			<div id="main">
				<div className="inner">
					{ children }
				</div>
			</div>

			<Sidebar routes={routes} />
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
