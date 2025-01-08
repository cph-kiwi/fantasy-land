export type Book = {
	title: string;
	author: string;
	yearPublished: number;
	genre: string;
	pages: number;
	publisher: string;
	themes: string[];
	description: string;
	coverImage: string;
	setting: string;
	edition: string;
	translator: string | null;
	series: string | null;
	dateAdded: string;
};
