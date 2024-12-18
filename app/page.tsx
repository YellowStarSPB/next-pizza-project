import {
	Container,
	Filters,
	ProductsGroupList,
	Title,
	TopBar
} from '@/components/shared';
import { prisma } from '@/prisma/prisma-client';

export default async function Home() {
	const categories = await prisma.category.findMany({
		include: {
			products: {
				include: {
					ingredients: true,
					items: true
				}
			}
		}
	});
  
	const notEmptyCategories = categories.filter(
		(category) => category.products.length > 0
	);
	return (
		<>
			<Container className="mt-10">
				<Title text="Все пиццы" size="lg" className="font-extrabold" />
			</Container>
			<TopBar categories={notEmptyCategories} />
			<Container className="mt-10 pb-14">
				<div className="flex gap-[80px]">
					{/* фильтрация */}
					<div className="w-[250px]">
						<Filters />
					</div>
					{/* список товаров */}
					<div className="flex-1">
						<div className="flex flex-col gap-16">
							{notEmptyCategories.map((category) => (
								<ProductsGroupList
									key={category.id}
									title={category.name}
									catgoryId={category.id}
									items={category.products}
								/>
							))}
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}
