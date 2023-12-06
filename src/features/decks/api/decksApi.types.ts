export type DecksResponseType = {
	items: DeckType[];
	pagination: DecksPaginationType;
	maxCardsCount: number;
}
export type DeckAuthorType = {
	id: string;
	name: string;
}
export type DeckType = {
	author: DeckAuthorType;
	id: string;
	userId: string;
	name: string;
	isPrivate: boolean;
	shots: number;
	cover: string;
	rating: number;
	created: string;
	updated: string;
	cardsCount: number;
}
export type DecksPaginationType = {
	currentPage: number;
	itemsPerPage: number;
	totalPages: number;
	totalItems: number;
}


export type GetDecksParamsType = {
	minCardsCount: number,
	maxCarsCount: number,
	name: string,
	authorId: string,
	orderBy: string,
	currentPage: number,
	itemsPerPage: number
}

export type DeleteDeckResponseType = Omit<DeckType, 'author'>


export type DeleteDeckParamsType  = Pick<DeckType, 'id'>

export type UpdateDeckParamsType = {
	id: string,
	body: FormData
}

export type GetDeckByIdParamsType = DeleteDeckParamsType