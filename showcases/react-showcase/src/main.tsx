import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import './index.scss';
import App from './app';
import { NAVIGATION_ITEMS, NavigationItem } from './utils/navigation-item';

ReactDOM.createRoot(document.querySelector('#root')!).render(
	<React.StrictMode>
		<HashRouter>
			<Routes>
				<Route path="/" element={<App />}>
					{NAVIGATION_ITEMS.map((navItem) => (
						<Route
							key={`router-${navItem.path}`}
							path={navItem.path}
							element={navItem.component}>
							{navItem.subNavigation
								? navItem.subNavigation.map((subItem) => (
										<Route
											key={`router-${subItem.path}`}
											path={subItem.path}
											element={subItem.component}
										/>
								  ))
								: null}
						</Route>
					))}
				</Route>
				<Route path="/*" element={<Navigate to="/" />} />
			</Routes>
		</HashRouter>
	</React.StrictMode>
);
