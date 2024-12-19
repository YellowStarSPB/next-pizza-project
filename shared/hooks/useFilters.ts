import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useSet } from 'react-use';
interface IPrice {
	priceFrom?: number;
	priceTo?: number;
}
export interface QueryFilters extends IPrice {
	pizzaTypes: string;
	sizes: string;
	ingredients: string;
}

export interface Filters {
	sizes: Set<string>;
	pizzaTypes: Set<string>;
	selectedIngredients: Set<string>;
	prices: IPrice;
}

interface ReturnProps extends Filters {
	setPrices: (name: keyof IPrice, value: number) => void;
	setPizzaTypes: (value: string) => void;
	setSizes: (value: string) => void;
	setSelectedIngredients: (value: string) => void;
}

export const useFilters = (): ReturnProps => {
	const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;
	/* фильтр ингериентов */
	const [selectedIngredients, { toggle: toggleIngredients }] = useSet<string>(
		new Set(searchParams.get('ingredients')?.split(','))
	);

	/* фильтр размеров */
	const [sizes, { toggle: toggleSizes }] = useSet(
		new Set<string>(
			searchParams.get('sizes') ? searchParams.get('sizes')?.split(',') : []
		)
	);
	/* фильтр типа пиццы */

	const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet<string>(
		new Set(
			searchParams.get('pizzaTypes') ? searchParams.get('pizzaTypes')?.split(',') : []
		)
	);
	/* фильтр цены */

	const [prices, setPrices] = useState<IPrice>({
		priceFrom: Number(searchParams.get('priceFrom')) || undefined,
		priceTo: Number(searchParams.get('priceTo')) || undefined
	});

	const updatePrice = (name: keyof IPrice, value: number) => {
		if (value > 1000) return;
		setPrices((prev) => ({
			...prev,
			[name]: value
		}));
	};

	return {
		sizes,
		pizzaTypes,
		selectedIngredients,
		prices,
		setPrices: updatePrice,
		setPizzaTypes: togglePizzaTypes,
		setSizes: toggleSizes,
		setSelectedIngredients: toggleIngredients
	};
};
