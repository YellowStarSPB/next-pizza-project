import { Category } from '@prisma/client';
import { axiosInstance } from './instance';
import { ApiRoutes } from './constants';

export const getAllCategories = async (): Promise<Category[]> => {
	return (await axiosInstance.get<Category[]>(ApiRoutes.CATEGORIES)).data;
};
