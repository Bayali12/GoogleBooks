import { Category, SortField } from '../components/Filters/types';

export type RootState = {
	isLoading: boolean;
	books: Book[];
	searchQuery: SearchParams;
	total: number;
};

export type Book = {
	id: string;
	volumeInfo: any;
};

type SearchParams = {
	searchTerm?: string;
	category: Category;
	page: number;
	sort: SortField;
};
