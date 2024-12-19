'use client';
import { Dialog, DialogContent } from '@/shared/components/ui';
import { ChoosePizzaForm, ChooseProductForm } from '..';
import { cn } from '@/shared/lib/utils';
import { useRouter } from 'next/navigation';
import { ProductWithRelations } from '@/@types/prisma';

interface IChooseProductModalProps {
	className?: string;
	product: ProductWithRelations;
}

function ChooseProductModal({ className, product }: IChooseProductModalProps): JSX.Element {
	const router = useRouter();
	const isPizzaForm = Boolean(product.items[0].pizzaType);

	return (
		<Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
			<DialogContent
				className={cn(
					'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
					className
				)}>
				{isPizzaForm ? (
					<ChoosePizzaForm
						imageUrl={product.imageUrl}
						name={product.name}
						ingredients={product.ingredients}
						items={product.items}
						onSubmit={() => {}}
					/>
				) : (
					<ChooseProductForm
						imageUrl={product.imageUrl}
						name={product.name}
						price={product.items[0].price}
						onSubmit={() => {}}
					/>
				)}
			</DialogContent>
		</Dialog>
	);
}

export default ChooseProductModal;
