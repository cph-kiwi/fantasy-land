import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../src/pages/LandingPage";
import BooksPage from "../src/pages/BooksPage";
import DetailsPage from "../src/pages/DetailsPage";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/books" element={<BooksPage />} />
				<Route path="/book/:id" element={<DetailsPage />} />
			</Routes>
		</Router>
	);
}

export default App;
