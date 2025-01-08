import { Book } from "../types/book";
import theNameOfTheWind from "../assets/theNameOfTheWind.jpg";
import gardensOfTheMoon from "../assets/gardensOfTheMoon.jpg";
import theWayOfKings from "../assets/theWayOfKings.jpg";
import theLiesOfLockeLamora from "../assets/TheLiesOfLockeLamora.jpg";
import theLastUnicorn from "../assets/TheLastUnicorn.jpg";
import uprooted from "../assets/Uprooted.jpg";
import theNightCircus from "../assets/TheNightCircus.jpg";
import perdidoStreetStation from "../assets/PerdidoStreetStation.jpg";
import jonathanStrange from "../assets/JonathanStrange&MrNorrell.jpg";
import hundredThousandKingdoms from "../assets/TheHundredThousandKingdoms.jpg";

interface BookCardProps {
	book: Book;
}

const imageMap: Record<string, string> = {
	"./theNameOfTheWind.jpg": theNameOfTheWind,
	"./gardensOfTheMoon.jpg": gardensOfTheMoon,
	"./theWayOfKings.jpg": theWayOfKings,
	"./TheLiesOfLockeLamora.jpg": theLiesOfLockeLamora,
	"./TheLastUnicorn.jpg": theLastUnicorn,
	"./Uprooted.jpg": uprooted,
	"./TheNightCircus.jpg": theNightCircus,
	"./PerdidoStreetStation.jpg": perdidoStreetStation,
	"./JonathanStrange&MrNorrell.jpg": jonathanStrange,
	"./TheHundredThousandKingdoms.jpg": hundredThousandKingdoms,
};

const BookCard = ({ book }: BookCardProps) => {
	return (
		<li className="book-card">
			<h3>{book.title}</h3>
			<p>by {book.author}</p>
			<img
				src={imageMap[book.coverImage] || book.coverImage}
				alt={book.title}
			/>
		</li>
	);
};

export default BookCard;
