import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
// import { Browserrouter as Router, Routes, Route } from "react-router-dom";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {
	return (
		<React.Fragment>
			<Router>
				<Sidebar />
				<Routes>
					<Route path="/" element={<Header/>}/>
				</Routes>
				<Header />
			</Router>
		</React.Fragment>
	);
};

export default App;
