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
			<h3>{book.title}</h3>
			<p>by {book.author}</p>
			<img src={book.coverImage} alt={book.title} />
		</li>
	);
};

export default BookCard;
