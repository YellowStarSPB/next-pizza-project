'use client';

import React, { ChangeEvent } from 'react';

import { FilterCheckbox, FilterChecboxProps } from './filterCheckbox';
import { Input, Skeleton } from '../ui';

type Item = FilterChecboxProps;

interface Props {
	title: string;
	items: Item[];
	defaultItems?: Item[];
	limit?: number;
	loading?: boolean;
	searchInputPlaceholder?: string;
	onClickCheckbox?: (id: string) => void;
	selected: Set<string>;
	defaultValue?: string[];
	className?: string;
	name?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
	title,
	items,
	defaultItems,
	limit = 5,
	loading,
	searchInputPlaceholder = 'Поиск...',
	className,
	onClickCheckbox,
	selected,
	name,
	defaultValue
}) => {
	const [showAll, setShowAll] = React.useState(false);
	const [searchValue, setSearchValue] = React.useState('');

	// const onCheckedChange = useCallback((value: string) => {
	//     toggle(value);
	// },[]);
	if (loading) {
		return (
			<div className={className}>
				<p className="font-bold mb-3">{title}</p>

				{Array(limit)
					.fill('')
					.map((_, i) => (
						<Skeleton key={i} className="h-6 mb-4 rounded-[8px]" />
					))}
				<Skeleton className="w-28 h-6 mb-4 rounded-[8px]" />
			</div>
		);
	}

	const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};
	const list = showAll
		? items.filter((item) =>
				item.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
		  )
		: (defaultItems || items).slice(0, limit);
	// React.useEffect(() => {
	//     if (defaultValue) {
	//         defaultValue.forEach(add);
	//     }
	// }, [defaultValue?.length]);

	// React.useEffect(() => {
	//     onChange?.(Array.from(selected));
	// }, [selected]);
	return (
		<div className={className}>
			<p className="font-bold mb-3">{title}</p>

			{showAll && (
				<div className="mb-5">
					<Input
						onChange={(e) => onChangeSearchInput(e)}
						placeholder={searchInputPlaceholder}
						className="bg-gray-50 border-none"
					/>
				</div>
			)}

			<div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
				{list.map((item) => (
					<FilterCheckbox
						key={String(item.value)}
						text={item.text}
						value={item.value}
						endAdornment={item.endAdornment}
						onCheckedChange={() => onClickCheckbox?.(item.value)}
						checked={selected.has(item.value)}
						name={name}
					/>
				))}
			</div>

			{items.length > limit && (
				<div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
					<button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
						{showAll ? 'Скрыть' : '+ Показать все'}
					</button>
				</div>
			)}
		</div>
	);
};
