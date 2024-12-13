import {
	Container,
	Filters,
	ProductsGroupList,
	Title,
	TopBar
} from '@/components/shared';

export default function Home() {
	return (
		<>
			<Container className="mt-10">
				<Title text="Все пиццы" size="lg" className="font-extrabold" />
			</Container>
			<TopBar />
			<Container className="mt-10 pb-14">
				<div className="flex gap-[80px]">
					{/* фильтрация */}
					<div className="w-[250px]">
						<Filters />
					</div>

					{/* список товаров */}
					<div className="flex-1">
						<div className="flex flex-col gap-16">
							<ProductsGroupList
								title="Пиццы"
								catgoryId={1}
								items={[
									{
                    id:0,
										name: 'Маргарита',
										imageUrl:
											'https://media.dodostatic.net/image/r:233x233/11EF12B2F6AFD043932EFBBAF24F90DF.avif',
										items: [{ price: 390 }]
									},
                  {
                    id:1,
										name: 'Маргарита',
										imageUrl:
											'https://media.dodostatic.net/image/r:233x233/11EF12B2F6AFD043932EFBBAF24F90DF.avif',
										items: [{ price: 390 }]
									},
                  {
                    id:2,
										name: 'Маргарита',
										imageUrl:
											'https://media.dodostatic.net/image/r:233x233/11EF12B2F6AFD043932EFBBAF24F90DF.avif',
										items: [{ price: 390 }]
									},
                  {
                    id:3,
										name: 'Маргарита',
										imageUrl:
											'https://media.dodostatic.net/image/r:233x233/11EF12B2F6AFD043932EFBBAF24F90DF.avif',
										items: [{ price: 390 }]
									},
                  
								]}
							/>
              <ProductsGroupList
								title="Комбо"
								catgoryId={2}
								items={[
									{
                    id:0,
										name: 'Маргарита',
										imageUrl:
											'https://media.dodostatic.net/image/r:233x233/11EF12B2F6AFD043932EFBBAF24F90DF.avif',
										items: [{ price: 390 }]
									},
                  {
                    id:1,
										name: 'Маргарита',
										imageUrl:
											'https://media.dodostatic.net/image/r:233x233/11EF12B2F6AFD043932EFBBAF24F90DF.avif',
										items: [{ price: 390 }]
									},
                  {
                    id:2,
										name: 'Маргарита',
										imageUrl:
											'https://media.dodostatic.net/image/r:233x233/11EF12B2F6AFD043932EFBBAF24F90DF.avif',
										items: [{ price: 390 }]
									},
                  {
                    id:3,
										name: 'Маргарита',
										imageUrl:
											'https://media.dodostatic.net/image/r:233x233/11EF12B2F6AFD043932EFBBAF24F90DF.avif',
										items: [{ price: 390 }]
									},
                  
								]}
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}
