import { Api } from '@/services/api-client';
import { Ingredient } from '@prisma/client';
import React, { useState } from 'react';
import { useSet } from 'react-use';

type IngredientItem = Pick<Ingredient, 'id' | 'name'>;

interface ReturnProps {
	ingredients: IngredientItem[];
	loading: boolean;
	selectedIngredients: Set<string>;
	onAddId: (id: string) => void;
}

export const useFilterIngredients = (): ReturnProps => {
	const [ingredients, setIngredients] = useState<ReturnProps['ingredients']>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [selectedIds, { toggle }] = useSet<string>(new Set([]));

	React.useEffect(() => {
		async function fetchIngredients() {
			try {
				setLoading(true);
				const ingredients = await Api.ingredients.getAll();
				setIngredients(
					ingredients.map((ingredient) => ({ id: ingredient.id, name: ingredient.name }))
				);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		}

		fetchIngredients();
	}, []);

	return { ingredients, loading, selectedIngredients: selectedIds, onAddId: toggle };
};
