import { Book } from "../types/book";
import { useNavigate } from "react-router-dom";

interface BookCardProps {
	book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
	const navigate = useNavigate();

	return (
		<li
			className="book-card"
			onClick={() => navigate(`/book/${book.id}`)}
			style={{ cursor: "pointer" }}
		>
			<div className="book-card-header">
				<h3>{book.title}</h3>
				<p>by {book.author}</p>
			</div>
			<img src={book.coverImage} alt={book.title} />
		</li>
	);
};

export default BookCard;
