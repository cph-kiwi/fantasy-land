import { Book } from "../types/book";

const imageMap: Record<string, string> = {
	"../../public/theNameOfTheWind.jpg": "/theNameOfTheWind.jpg",
	"../../public/gardensOfTheMoon.jpg": "/gardensOfTheMoon.jpg",
	"../../public/theWayOfKings.jpg": "/theWayOfKings.jpg",
	"../../public/TheLiesOfLockeLamora.jpg": "/TheLiesOfLockeLamora.jpg",
	"../../public/TheLastUnicorn.jpg": "/TheLastUnicorn.jpg",
	"../../public/Uprooted.jpg": "/Uprooted.jpg",
	"../../public/TheNightCircus.jpg": "/TheNightCircus.jpg",
	"../../public/PerdidoStreetStation.jpg": "/PerdidoStreetStation.jpg",
	"../../public/JonathanStrange&MrNorrell.jpg":
		"/JonathanStrange&MrNorrell.jpg",
	"../../public/TheHundredThousandKingdoms.jpg":
		"/TheHundredThousandKingdoms.jpg",
};

export const mapBookImage = (book: Book) => ({
	...book,
	coverImage: imageMap[book.coverImage] || book.coverImage,
});
