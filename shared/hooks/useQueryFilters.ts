import { useEffect } from 'react';
import { Filters } from './useFilters';
import qs from 'qs';
import { useRouter } from 'next/navigation';

export const useQueryFilters = (filters: Filters) => {
	const router = useRouter();

	useEffect(() => {
		const params = {
			...filters.prices,
			ingredients: Array.from(filters.selectedIngredients),
			sizes: Array.from(filters.sizes),
			pizzaTypes: Array.from(filters.pizzaTypes)
		};
		//библиотека для работы с гет-параметрами
		const query = qs.stringify(params, { arrayFormat: 'comma' });
		//создаем стейт навигации при помощи хука, чтобы можно было двигаться по навигации фильтров
		router.push(`?${query}`, { scroll: false });
	}, [filters, router]);
};
