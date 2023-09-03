import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderDiv from "./Components/header/HeaderDiv";
import Home from "./Components/Home/Home";
import TicTacToe from "./Components/TicTacToe/TicTacToe";
import Minesweeper from "./Components/Minesweeper/Minesweeper";
import Forca from './Components/Forca/Forca';
import Page404 from "./Components/Page404/Page404";
import SpaceShooter from './Components/SpaceShooter/SpaceShooter';
//import disableContextMenu from "./Functions/disableContextMenu";

export default function App() {
	return (
		<div className="gamecenter-page">
			<Router>
				<Routes>
					<Route path = "/" element = {(
						<>
						<HeaderDiv/>
						<Home></Home>
						</>
					)}/>
					<Route exact path = "/tictactoe" element = {(
						<>
						<HeaderDiv color = {`green`} closed = {`closed`}/>
						<TicTacToe/>
						</>
					)}/>
					<Route exact path = "/minesweeper" element = {(
						<>
						<HeaderDiv color = {`yellow`} closed = {`closed`}/>
						<Minesweeper/>
						</>
					)}/>
					<Route exact path = "/forca" element = {(
						<>
						<HeaderDiv color = {`cyan`} closed = {`closed`}/>
						<Forca/>
						</>
					)}/>
					<Route exact path = "/spaceshooter" element = {(
						<>
						<HeaderDiv color = {`red`} closed = {`closed`}/>
						<SpaceShooter/>
						</>
					)}/>
					<Route path = "*" element = {(
						<>
						<HeaderDiv/>
						<Page404/>
						</>
					)}/>
				</Routes>
			</Router>
		</div>
	);
};