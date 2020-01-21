import React, { Component } from 'react';
import './App.css';
import { SideBar } from './containers/SideBar';
import { Header } from './templates/header';

class App extends Component {

	render() {
		return (
			<div className="App">
					<Header />
					<div className="row">
					<SideBar />
					</div>					
			</div>
		);
	}
}

export default App;
