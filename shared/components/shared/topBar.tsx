import { cn } from '@/shared/lib/utils';
import React from 'react';
import { Categories, Container, SortPopup } from '.';
import { Category } from '@prisma/client';

interface ITopBarProps {
    categories: Category[];
    className?: string;
}

export const TopBar = ({ className,categories }: ITopBarProps): JSX.Element => {
    return (
        <div
            className={cn(
                'sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10',
                className,
            )}
        >
            <Container className='flex items-center justify-between'>
                <Categories categories={categories} />
                <SortPopup />
            </Container>
        </div>
    );
};
