'use client';
import React from 'react';
import { ProductCard, Title } from '.';
import { cn } from '@/lib/utils';
import { useIntersection } from 'react-use';
import { useCategoryStore } from '@/store/category';

interface Props {
	title: string;
	items: any[];
	catgoryId: number;
	className?: string;
	listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
	title,
	items,
	className,
	listClassName,
	catgoryId
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);

	const intersectionRef = React.useRef(null);
	const intersection = useIntersection(intersectionRef, {
		threshold: 0.4
	});

	React.useEffect(() => {
		if (intersection?.isIntersecting) {
      setActiveCategoryId(catgoryId)
		}
	}, [catgoryId, intersection?.isIntersecting]);

	return (
		<div className={className} id={title} ref={intersectionRef}>
			<Title text={title} size="lg" className="font-extrabold mb-5" />
			<div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
				{items.map((product, i) => (
					<ProductCard
						id={product.id}
						key={product.id}
						name={product.name}
						imageUrl={product.imageUrl}
						price={product.items[0].price}
						// count={i % 2}
					/>
				))}
			</div>
		</div>
	);
};
