import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import booksData from "../assets/books.json";

const BooksPage = () => {
	const sortedBooks = [...booksData.books].sort(
		(a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
	);

	return (
		<div>
			<Link to="/" className="back-link">
				← Back to Home
			</Link>
			<h1>Books List</h1>
			<ul className="books-list">
				{sortedBooks.map((book) => (
					<BookCard key={book.title} book={book} />
				))}
			</ul>
		</div>
	);
};

export default BooksPage;
