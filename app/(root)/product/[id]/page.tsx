import { Container, GroupVariants, ProductImage, Title } from '@/shared/components/shared';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';

async function ProductPage({ params: { id } }: { params: { id: string } }) {
	const product = await prisma.product.findFirst({ where: { id: Number(id) } });
	if (!product) {
		return notFound();
	}
	return (
		<Container className="flex flex-col my-10">
			<div className="flex flex-1">
				<ProductImage imageUrl={product.imageUrl} size={20} />
				<div className="w-[490px] bg-[#f7f6f5] p-7">
					<Title text={product.name} size="md" className="font-extrabold mb-1" />

					<p className="text-gray-400">{'312312'}</p>
					<GroupVariants
						value="2"
						items={[
							{
								name: 'Маленькая',
								value: '1'
							},
							{
								name: 'Средняя',
								value: '2'
							},
							{
								name: 'Большая',
								value: '3'
							}
						]}
					/>
				</div>
			</div>
		</Container>
	);
}
export default ProductPage;
