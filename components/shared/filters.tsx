'use client';
import React from 'react';
import { CheckboxFiltersGroup, Title } from '.';
import { Input, RangeSlider } from '../ui';
import { useQueryFilters, useFilters, useIngredients } from '@/hooks';

interface IFiltersProps {
	className?: string;
}

export const Filters = ({ className }: IFiltersProps): JSX.Element => {
	const { ingredients, loading } = useIngredients();
	const filters = useFilters();

	useQueryFilters(filters);

	const preparedIngredients = ingredients.map((ingredient) => ({
		text: ingredient.name,
		value: String(ingredient.id)
	}));

	const updatePrices = (prices: number[]) => {
		filters.setPrices('priceFrom', prices[0]);
		filters.setPrices('priceTo', prices[1]);
	};

	return (
		<div className={className}>
			<Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
			{/* верхние чекбоксы */}
			<CheckboxFiltersGroup
				title="Тип теста"
				name="pizzaTypes"
				className="mb-5"
				onClickCheckbox={filters.setPizzaTypes}
				selected={filters.pizzaTypes}
				items={[
					{ text: 'Тонкое', value: '1' },
					{ text: 'Традиционное', value: '2' }
				]}
			/>

			<CheckboxFiltersGroup
				className="mb-5"
				title="Размеры"
				name="sizes"
				items={[
					{ text: '20 см', value: '20' },
					{ text: '30 см', value: '30' },
					{ text: '40 см', value: '40' }
				]}
				selected={filters.sizes}
				onClickCheckbox={filters.setSizes}
			/>

			{/* фильтр цены */}
			<div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
				<p className="font-bold mb-3">Цена от и до:</p>
				<div className="flex gap-3 mb-5">
					<Input
						type="number"
						placeholder="0"
						min={0}
						max={1000}
						value={String(filters.prices.priceFrom)}
						onChange={(e) => filters.setPrices('priceFrom', Number(e.target.value))}
					/>
					<Input
						type="number"
						min={100}
						max={1000}
						placeholder="1000"
						value={String(filters.prices.priceTo)}
						onChange={(e) => filters.setPrices('priceTo', Number(e.target.value))}
					/>
				</div>
				<RangeSlider
					min={0}
					max={1000}
					step={10}
					value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 1000]}
					onValueChange={updatePrices}
				/>
			</div>

			<CheckboxFiltersGroup
				className="mt-5"
				title="Ингредиенты"
				name="Ингредиенты"
				limit={6}
				loading={loading}
				defaultItems={preparedIngredients.slice(0, 6)}
				items={preparedIngredients}
				onClickCheckbox={filters.setSelectedIngredients}
				selected={filters.selectedIngredients}
			/>
		</div>
	);
};
