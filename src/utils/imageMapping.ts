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
import theHundredThousandKingdoms from "../assets/TheHundredThousandKingdoms.jpg";

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
	"./TheHundredThousandKingdoms.jpg": theHundredThousandKingdoms,
};

export const mapBookImage = (book: Book) => ({
	...book,
	coverImage: imageMap[book.coverImage] || book.coverImage,
});
