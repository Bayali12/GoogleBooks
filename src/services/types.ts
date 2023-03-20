import { Category, SortField } from '../components/Filters/types';

export type requestParams = {
	searchTerm?: string;
	category?: Category;
	sort?: SortField;
	page?: number;
};
