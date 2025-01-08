import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import booksData from "../assets/books.json";
import BookCard from "../components/BookCard";
import { mapBookImage } from "../utils/imageMapping";

const LandingPage = () => {
	const [searchTerm, setSearchTerm] = useState(
		new URLSearchParams(useLocation().search).get("search") || ""
	);

	const latestBooks = [...booksData.books]
		.sort(
			(a, b) =>
				new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
		)
		.slice(0, 3)
		.map(mapBookImage);

	const searchResults = searchTerm
		? booksData.books
				.filter(
					(book) =>
						book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
						book.author.toLowerCase().includes(searchTerm.toLowerCase())
				)
				.map(mapBookImage)
		: [];

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	return (
		<div>
			<h1>Do you live in fantasy land?</h1>
			<div className="search-container">
				<input
					type="text"
					value={searchTerm}
					onChange={handleSearch}
					placeholder="Search for a book"
				/>
				<Link to={`/?search=${searchTerm}`} className="button-link">
					Search
				</Link>
			</div>

			{searchTerm && (
				<div className="search-results">
					<h2>Search Results</h2>
					<ul className="books-list">
						{searchResults.map((book) => (
							<BookCard key={book.title} book={book} />
						))}
						{searchResults.length === 0 && (
							<p>No books found matching "{searchTerm}"</p>
						)}
					</ul>
				</div>
			)}

			<h2>Latest Books</h2>
			<ul className="carousel-list">
				{latestBooks.map((book) => (
					<BookCard key={book.title} book={book} />
				))}
			</ul>
			<nav className="nav-center">
				<Link to="/books" className="back-link">
					Books →
				</Link>
			</nav>
		</div>
	);
};

export default LandingPage;
