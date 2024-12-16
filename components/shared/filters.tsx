'use client';
import React, { useEffect, useState } from 'react';
import { CheckboxFiltersGroup, FilterCheckbox, Title } from '.';
import { Input, RangeSlider } from '../ui';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';
import { useSet } from 'react-use';

interface IFiltersProps {
	className?: string;
}

interface IPrice {
	priceFrom: number;
	priceTo: number;
}

export const Filters = ({ className }: IFiltersProps): JSX.Element => {
	const { ingredients, loading, selectedIngredients, onAddId } = useFilterIngredients();
	const [sizes, { toggle: toggleSizes }] = useSet<string>(new Set([]));
	const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet<string>(new Set([]));
	const [prices, setPrice] = useState<IPrice>({
		priceFrom: 0,
		priceTo: 1000
	});

	const preparedIngredients = ingredients.map((ingredient) => ({
		text: ingredient.name,
		value: String(ingredient.id)
	}));

	const updatePrice = (name: keyof IPrice, value: number) => {
		if (value > 1000) return;
		setPrice({
			...prices,
			[name]: value
		});
	};
  useEffect(() => {
    console.log(selectedIngredients,sizes,prices,pizzaTypes)
  },[selectedIngredients,sizes,prices,pizzaTypes])

	return (
		<div className={className}>
			<Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
			{/* верхние чекбоксы */}
			<CheckboxFiltersGroup
				title="Тип теста"
				name="pizzaTypes"
				className="mb-5"
				onClickCheckbox={togglePizzaTypes}
				selected={pizzaTypes}
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
				selected={sizes}
				onClickCheckbox={toggleSizes}
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
						value={String(prices.priceFrom)}
						onChange={(e) => updatePrice('priceFrom', Number(e.target.value))}
					/>
					<Input
						type="number"
						min={100}
						max={1000}
						placeholder="1000"
						value={String(prices.priceTo)}
						onChange={(e) => updatePrice('priceTo', Number(e.target.value))}
					/>
				</div>
				<RangeSlider
					min={0}
					max={1000}
					step={10}
					value={[prices.priceFrom, prices.priceTo]}
					onValueChange={([priceFrom, priceTo]) => setPrice({ priceFrom, priceTo })}
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
				onClickCheckbox={onAddId}
				selected={selectedIngredients}
			/>
		</div>
	);
};
