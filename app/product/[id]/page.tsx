import React from 'react';

interface IPageProps {
	params?: string;
}

function ProductPage({ params: { id } }: { params: { id: string } }): JSX.Element {
	return <div className={''}>product {id}</div>;
}
export default ProductPage;
