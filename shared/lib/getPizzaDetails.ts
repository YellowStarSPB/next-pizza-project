import { Ingredient, ProductItem } from '@prisma/client';
import { calcTotalPizzaPrice } from '.';
import { PizzaSize, PizzaType, mapPizzaType } from '../constants/pizza';

export const getPizzaDetails = (
	size: PizzaSize,
	type: PizzaType,
	items: ProductItem[],
	ingredients: Ingredient[],
	selectedIngredients: Set<number>
) => {
	const totalPrice = calcTotalPizzaPrice(size, type, items, ingredients, selectedIngredients);

	const textDetaills = `${size} см, ${mapPizzaType[type]} тесто`;

	return { totalPrice, textDetaills };
};
